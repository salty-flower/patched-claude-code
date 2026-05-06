import { basename } from 'path'
import React from 'react'
import { logError } from 'src/utils/log.js'
import { useDebounceCallback } from 'usehooks-ts'
import type { Key } from '../ink.js'
import {
  getImageFromClipboard,
  isImageFilePath,
  tryReadImageFromPath,
} from '../utils/imagePaste.js'
import type { ImageDimensions } from '../utils/imageResizer.js'
import { getPlatform } from '../utils/platform.js'

const CLIPBOARD_CHECK_DEBOUNCE_MS = 50

// Threshold for single-key character length that triggers paste handling.
// When a key sequence is longer than this, it's treated as pasted text.
const LONG_KEY_THRESHOLD = 10

type PasteHandlerProps = {
  onPaste?: (text: string) => void
  handleKeyDown: (key: Key) => void
  onImagePaste?: (
    base64Image: string,
    mediaType?: string,
    filename?: string,
    dimensions?: ImageDimensions,
    sourcePath?: string,
  ) => void
}

export function usePasteHandler({
  onPaste,
  handleKeyDown,
  onImagePaste,
}: PasteHandlerProps): {
  handleKeyDown: (key: Key) => void
  handlePaste: (event: { text: string; preventDefault: () => void }) => void
  isPasting: boolean
} {
  const [isPasting, setIsPasting] = React.useState(false)
  const isMountedRef = React.useRef(true)
  const pastePendingRef = React.useRef(false)

  const isMacOS = React.useMemo(() => getPlatform() === 'macos', [])

  React.useEffect(() => {
    return () => {
      isMountedRef.current = false
    }
  }, [])

  const checkClipboardForImageImpl = React.useCallback(() => {
    if (!onImagePaste || !isMountedRef.current) return

    void getImageFromClipboard()
      .then(imageData => {
        if (imageData && isMountedRef.current) {
          onImagePaste(
            imageData.base64,
            imageData.mediaType,
            undefined, // no filename for clipboard images
            imageData.dimensions,
          )
        }
      })
      .catch(error => {
        if (isMountedRef.current) {
          logError(error as Error)
        }
      })
      .finally(() => {
        if (isMountedRef.current) {
          pastePendingRef.current = false
          setIsPasting(false)
        }
      })
  }, [onImagePaste])

  const checkClipboardForImage = useDebounceCallback(
    checkClipboardForImageImpl,
    CLIPBOARD_CHECK_DEBOUNCE_MS,
  )

  // Forward text as a synthetic key event when no onPaste handler is provided
  function forwardAsKey(text: string): void {
    if (onPaste) {
      onPaste(text)
      return
    }
    handleKeyDown({
      kind: 'key',
      name: undefined,
      sequence: text,
      raw: text,
      ctrl: false,
      meta: false,
      shift: false,
      option: false,
      super: false,
      fn: false,
      isPasted: true,
    } as Key)
  }

  function finishPaste(): void {
    setIsPasting(false)
    // Defer clearing pastePendingRef to allow synchronous checks in the same tick
    setTimeout(
      (mountedRef, pendingRef) => {
        if (mountedRef.current) {
          pendingRef.current = false
        }
      },
      0,
      isMountedRef,
      pastePendingRef,
    )
  }

  function processPastedText(text: string): void {
    pastePendingRef.current = true

    // Filter out orphaned focus sequences that can appear when focus events
    // split during paste
    const pastedText = text.replace(/\[I$/, '').replace(/\[O$/, '')

    // Check if the pasted text contains image file paths
    // When dragging multiple images, they may come as:
    // 1. Newline-separated paths (common in some terminals)
    // 2. Space-separated paths (common when dragging from Finder)
    // For space-separated paths, we split on spaces that precede absolute paths:
    // - Unix: space followed by `/` (e.g., `/Users/...`)
    // - Windows: space followed by drive letter and `:\` (e.g., `C:\Users\...`)
    // This works because spaces within paths are escaped (e.g., `file\ name.png`)
    const lines = pastedText
      .split(/ (?=\/|[A-Za-z]:\\)/)
      .flatMap(part => part.split('\n'))
      .filter(line => line.trim())
    const imagePaths = lines.filter(line => isImageFilePath(line))

    // If paste is empty (common when trying to paste images with Cmd+V),
    // check if clipboard has an image (macOS only)
    if (pastedText.length === 0 && isMacOS && onImagePaste) {
      checkClipboardForImage()
      return
    }

    if (onImagePaste && imagePaths.length > 0) {
      const isTempScreenshot =
        /\/TemporaryItems\/.*screencaptureui.*\/Screenshot/i.test(pastedText)

      // Process all image paths
      void Promise.all(imagePaths.map(imagePath => tryReadImageFromPath(imagePath))).then(
        results => {
          if (!isMountedRef.current) return

          const validImages = results.filter(
            (r): r is NonNullable<typeof r> => r !== null,
          )

          if (validImages.length > 0) {
            // Successfully read at least one image
            for (const imageData of validImages) {
              const filename = basename(imageData.path)
              onImagePaste(
                imageData.base64,
                imageData.mediaType,
                filename,
                imageData.dimensions,
                imageData.path,
              )
            }
            // If some paths weren't images, paste them as text
            const nonImageLines = lines.filter(line => !isImageFilePath(line))
            if (nonImageLines.length > 0) {
              forwardAsKey(nonImageLines.join('\n'))
            }
            pastePendingRef.current = false
            setIsPasting(false)
          } else if (isTempScreenshot && isMacOS) {
            // For temporary screenshot files that no longer exist, try clipboard
            checkClipboardForImage()
          } else {
            forwardAsKey(pastedText)
            pastePendingRef.current = false
            setIsPasting(false)
          }
        },
      )
      return
    }

    forwardAsKey(pastedText)
    finishPaste()
  }

  function handlePaste(event: { text: string; preventDefault: () => void }): void {
    event.preventDefault()
    setIsPasting(true)
    processPastedText(event.text)
  }

  function handleKeyDownWrapper(key: Key): void {
    // If we're in the middle of processing a paste and the user hits Enter,
    // prevent it from submitting until paste processing completes
    if (pastePendingRef.current && key.name === 'return') {
      key.preventDefault?.()
      return
    }

    // Detect long key sequences that look like pasted text
    if (
      (onPaste || onImagePaste) &&
      !key.ctrl &&
      !key.meta &&
      key.sequence &&
      key.sequence.length > LONG_KEY_THRESHOLD &&
      !key.defaultPrevented
    ) {
      key.preventDefault?.()
      setIsPasting(true)
      processPastedText(key.sequence)
      return
    }

    handleKeyDown(key)
  }

  return {
    handleKeyDown: handleKeyDownWrapper,
    handlePaste,
    isPasting,
  }
}
