// --
// Adapter interface for the layout engine (Yoga)
// v112 uses numeric constants directly (matching Yoga's native enum values)
// instead of string mappings.

export const LayoutEdge = {
  Left: 0,
  Top: 1,
  Right: 2,
  Bottom: 3,
  Start: 4,
  End: 5,
  Horizontal: 6,
  Vertical: 7,
  All: 8,
} as const
export type LayoutEdge = (typeof LayoutEdge)[keyof typeof LayoutEdge]

export const LayoutGutter = {
  Column: 0,
  Row: 1,
  All: 2,
} as const
export type LayoutGutter = (typeof LayoutGutter)[keyof typeof LayoutGutter]

export const LayoutDisplay = {
  Flex: 0,
  None: 1,
} as const
export type LayoutDisplay = (typeof LayoutDisplay)[keyof typeof LayoutDisplay]

export const LayoutFlexDirection = {
  Column: 0,
  ColumnReverse: 1,
  Row: 2,
  RowReverse: 3,
} as const
export type LayoutFlexDirection =
  (typeof LayoutFlexDirection)[keyof typeof LayoutFlexDirection]

export const LayoutAlign = {
  Auto: 0,
  FlexStart: 1,
  Center: 2,
  FlexEnd: 3,
  Stretch: 4,
} as const
export type LayoutAlign = (typeof LayoutAlign)[keyof typeof LayoutAlign]

export const LayoutJustify = {
  FlexStart: 0,
  Center: 1,
  FlexEnd: 2,
  SpaceBetween: 3,
  SpaceAround: 4,
  SpaceEvenly: 5,
} as const
export type LayoutJustify = (typeof LayoutJustify)[keyof typeof LayoutJustify]

export const LayoutWrap = {
  NoWrap: 0,
  Wrap: 1,
  WrapReverse: 2,
} as const
export type LayoutWrap = (typeof LayoutWrap)[keyof typeof LayoutWrap]

export const LayoutPositionType = {
  Static: 0,
  Relative: 1,
  Absolute: 2,
} as const
export type LayoutPositionType =
  (typeof LayoutPositionType)[keyof typeof LayoutPositionType]

export const LayoutOverflow = {
  Visible: 0,
  Hidden: 1,
  Scroll: 2,
} as const
export type LayoutOverflow =
  (typeof LayoutOverflow)[keyof typeof LayoutOverflow]

export type LayoutMeasureFunc = (
  width: number,
  widthMode: LayoutMeasureMode,
) => { width: number; height: number }

export const LayoutMeasureMode = {
  Undefined: 0,
  Exactly: 1,
  AtMost: 2,
} as const
export type LayoutMeasureMode =
  (typeof LayoutMeasureMode)[keyof typeof LayoutMeasureMode]

export type LayoutNode = {
  // Tree
  insertChild(child: LayoutNode, index: number): void
  removeChild(child: LayoutNode): void
  getChildCount(): number
  getParent(): LayoutNode | null

  // Layout computation
  calculateLayout(width?: number, height?: number): void
  setMeasureFunc(fn: LayoutMeasureFunc): void
  unsetMeasureFunc(): void
  markDirty(): void

  // Layout reading (post-layout)
  getComputedLeft(): number
  getComputedTop(): number
  getComputedWidth(): number
  getComputedHeight(): number
  getComputedBorder(edge: LayoutEdge): number
  getComputedPadding(edge: LayoutEdge): number

  // Style setters
  setWidth(value: number): void
  setWidthPercent(value: number): void
  setWidthAuto(): void
  setHeight(value: number): void
  setHeightPercent(value: number): void
  setHeightAuto(): void
  setMinWidth(value: number): void
  setMinWidthPercent(value: number): void
  setMinHeight(value: number): void
  setMinHeightPercent(value: number): void
  setMaxWidth(value: number): void
  setMaxWidthPercent(value: number): void
  setMaxHeight(value: number): void
  setMaxHeightPercent(value: number): void
  setFlexDirection(dir: LayoutFlexDirection): void
  setFlexGrow(value: number): void
  setFlexShrink(value: number): void
  setFlexBasis(value: number): void
  setFlexBasisPercent(value: number): void
  setFlexWrap(wrap: LayoutWrap): void
  setAlignItems(align: LayoutAlign): void
  setAlignSelf(align: LayoutAlign): void
  setJustifyContent(justify: LayoutJustify): void
  setDisplay(display: LayoutDisplay): void
  getDisplay(): LayoutDisplay
  setPositionType(type: LayoutPositionType): void
  setPosition(edge: LayoutEdge, value: number): void
  setPositionPercent(edge: LayoutEdge, value: number): void
  setOverflow(overflow: LayoutOverflow): void
  setMargin(edge: LayoutEdge, value: number): void
  setMarginAuto(edge: LayoutEdge): void
  setPadding(edge: LayoutEdge, value: number): void
  setBorder(edge: LayoutEdge, value: number): void
  setGap(gutter: LayoutGutter, value: number): void

  // Lifecycle
  free(): void
  freeRecursive(): void
}
