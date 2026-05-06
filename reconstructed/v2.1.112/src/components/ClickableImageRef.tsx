import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import Link from '../ink/components/Link.js';
import { supportsHyperlinks } from '../ink/supports-hyperlinks.js';
import { Text } from '../ink.js';
import { useImageStore } from '../stores/imageStore.js';
import type { Theme } from '../utils/theme.js';
type Props = {
  imageId: number;
  backgroundColor?: keyof Theme;
  isSelected?: boolean;
};

/**
 * Renders an image reference like [Image #1] as a clickable link.
 * When clicked, opens the stored image file in the default viewer.
 *
 * Falls back to styled text if:
 * - Terminal doesn't support hyperlinks
 * - Image file is not found in the store
 */
export function ClickableImageRef(t0) {
  const $ = _c(15);
  const {
    imageId,
    backgroundColor,
    isSelected: t1
  } = t0;
  const isSelected = t1 === undefined ? false : t1;
  const imagePath = useImageStore((j) => j.storedImagePaths.get(imageId) ?? null) ?? null;
  const displayText = `[Image #${imageId}]`;
  if (imagePath && supportsHyperlinks()) {
    let j;
    if ($[0] !== imagePath) {
      j = new URL(imagePath);
      $[0] = imagePath;
      $[1] = j;
    } else {
      j = $[1];
    }
    const fileUrl = j.href;
    let t2;
    let t3;
    if ($[2] !== backgroundColor || $[3] !== displayText || $[4] !== isSelected) {
      t2 = <Text backgroundColor={backgroundColor} inverse={isSelected}>{displayText}</Text>;
      t3 = <Text backgroundColor={backgroundColor} inverse={isSelected} bold={isSelected}>{displayText}</Text>;
      $[2] = backgroundColor;
      $[3] = displayText;
      $[4] = isSelected;
      $[5] = t2;
      $[6] = t3;
    } else {
      t2 = $[5];
      t3 = $[6];
    }
    let t4;
    if ($[7] !== fileUrl || $[8] !== t2 || $[9] !== t3) {
      t4 = <Link url={fileUrl} fallback={t2}>{t3}</Link>;
      $[7] = fileUrl;
      $[8] = t2;
      $[9] = t3;
      $[10] = t4;
    } else {
      t4 = $[10];
    }
    return t4;
  }
  let t2;
  if ($[11] !== backgroundColor || $[12] !== displayText || $[13] !== isSelected) {
    t2 = <Text backgroundColor={backgroundColor} inverse={isSelected}>{displayText}</Text>;
    $[11] = backgroundColor;
    $[12] = displayText;
    $[13] = isSelected;
    $[14] = t2;
  } else {
    t2 = $[14];
  }
  return t2;
}
