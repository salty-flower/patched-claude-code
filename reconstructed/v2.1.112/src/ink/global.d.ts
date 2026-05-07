import type { ReactNode, Ref } from 'react'
import type { DOMElement } from './dom.js'
import type { Styles, TextStyles } from './styles.js'

type InkElementProps = {
  children?: ReactNode
  ref?: Ref<DOMElement>
  style?: Styles
  textStyles?: TextStyles
  [attribute: string]: unknown
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ink-root': InkElementProps
      'ink-box': InkElementProps
      'ink-text': InkElementProps
      'ink-virtual-text': InkElementProps
      'ink-link': InkElementProps
      'ink-progress': InkElementProps
      'ink-raw-ansi': InkElementProps
    }
  }
}

export {}
