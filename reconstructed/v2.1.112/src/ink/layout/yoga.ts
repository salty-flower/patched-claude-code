import Yoga, {
  type Node as YogaNode,
} from 'src/native-ts/yoga-layout/index.js'
import {
  type LayoutAlign,
  LayoutDisplay,
  type LayoutEdge,
  type LayoutFlexDirection,
  type LayoutGutter,
  type LayoutJustify,
  type LayoutMeasureFunc,
  LayoutMeasureMode,
  type LayoutNode,
  type LayoutOverflow,
  type LayoutPositionType,
  type LayoutWrap,
} from './node.js'

// --
// Yoga adapter
// v112: passes numeric values directly through to Yoga without mapping.
// The Layout* types are now numeric constants matching Yoga's native values.

export class YogaLayoutNode implements LayoutNode {
  readonly yoga: YogaNode

  constructor(yoga: YogaNode) {
    this.yoga = yoga
  }

  // Tree

  insertChild(child: LayoutNode, index: number): void {
    this.yoga.insertChild((child as YogaLayoutNode).yoga, index)
  }

  removeChild(child: LayoutNode): void {
    this.yoga.removeChild((child as YogaLayoutNode).yoga)
  }

  getChildCount(): number {
    return this.yoga.getChildCount()
  }

  getParent(): LayoutNode | null {
    const p = this.yoga.getParent()
    return p ? new YogaLayoutNode(p) : null
  }

  // Layout

  calculateLayout(width?: number, _height?: number): void {
    this.yoga.calculateLayout(width, undefined, 1 /* Direction.LTR */)
  }

  setMeasureFunc(fn: LayoutMeasureFunc): void {
    this.yoga.setMeasureFunc((w, wMode) => {
      const mode =
        wMode === 1 /* MeasureMode.Exactly */
          ? LayoutMeasureMode.Exactly
          : wMode === 2 /* MeasureMode.AtMost */
            ? LayoutMeasureMode.AtMost
            : LayoutMeasureMode.Undefined
      return fn(w, mode)
    })
  }

  unsetMeasureFunc(): void {
    this.yoga.unsetMeasureFunc()
  }

  markDirty(): void {
    this.yoga.markDirty()
  }

  // Computed layout

  getComputedLeft(): number {
    return this.yoga.getComputedLeft()
  }

  getComputedTop(): number {
    return this.yoga.getComputedTop()
  }

  getComputedWidth(): number {
    return this.yoga.getComputedWidth()
  }

  getComputedHeight(): number {
    return this.yoga.getComputedHeight()
  }

  getComputedBorder(edge: LayoutEdge): number {
    return this.yoga.getComputedBorder(edge)
  }

  getComputedPadding(edge: LayoutEdge): number {
    return this.yoga.getComputedPadding(edge)
  }

  // Style setters

  setWidth(value: number): void {
    this.yoga.setWidth(value)
  }
  setWidthPercent(value: number): void {
    this.yoga.setWidthPercent(value)
  }
  setWidthAuto(): void {
    this.yoga.setWidthAuto()
  }
  setHeight(value: number): void {
    this.yoga.setHeight(value)
  }
  setHeightPercent(value: number): void {
    this.yoga.setHeightPercent(value)
  }
  setHeightAuto(): void {
    this.yoga.setHeightAuto()
  }
  setMinWidth(value: number): void {
    this.yoga.setMinWidth(value)
  }
  setMinWidthPercent(value: number): void {
    this.yoga.setMinWidthPercent(value)
  }
  setMinHeight(value: number): void {
    this.yoga.setMinHeight(value)
  }
  setMinHeightPercent(value: number): void {
    this.yoga.setMinHeightPercent(value)
  }
  setMaxWidth(value: number): void {
    this.yoga.setMaxWidth(value)
  }
  setMaxWidthPercent(value: number): void {
    this.yoga.setMaxWidthPercent(value)
  }
  setMaxHeight(value: number): void {
    this.yoga.setMaxHeight(value)
  }
  setMaxHeightPercent(value: number): void {
    this.yoga.setMaxHeightPercent(value)
  }

  setFlexDirection(dir: LayoutFlexDirection): void {
    this.yoga.setFlexDirection(dir)
  }

  setFlexGrow(value: number): void {
    this.yoga.setFlexGrow(value)
  }
  setFlexShrink(value: number): void {
    this.yoga.setFlexShrink(value)
  }
  setFlexBasis(value: number): void {
    this.yoga.setFlexBasis(value)
  }
  setFlexBasisPercent(value: number): void {
    this.yoga.setFlexBasisPercent(value)
  }

  setFlexWrap(wrap: LayoutWrap): void {
    this.yoga.setFlexWrap(wrap)
  }

  setAlignItems(align: LayoutAlign): void {
    this.yoga.setAlignItems(align)
  }

  setAlignSelf(align: LayoutAlign): void {
    this.yoga.setAlignSelf(align)
  }

  setJustifyContent(justify: LayoutJustify): void {
    this.yoga.setJustifyContent(justify)
  }

  setDisplay(display: LayoutDisplay): void {
    this.yoga.setDisplay(display)
  }

  getDisplay(): LayoutDisplay {
    return this.yoga.getDisplay()
  }

  setPositionType(type: LayoutPositionType): void {
    this.yoga.setPositionType(type)
  }

  setPosition(edge: LayoutEdge, value: number): void {
    this.yoga.setPosition(edge, value)
  }

  setPositionPercent(edge: LayoutEdge, value: number): void {
    this.yoga.setPositionPercent(edge, value)
  }

  setOverflow(overflow: LayoutOverflow): void {
    this.yoga.setOverflow(overflow)
  }

  setMargin(edge: LayoutEdge, value: number): void {
    this.yoga.setMargin(edge, value)
  }
  setMarginAuto(edge: LayoutEdge): void {
    this.yoga.setMarginAuto(edge)
  }
  setPadding(edge: LayoutEdge, value: number): void {
    this.yoga.setPadding(edge, value)
  }
  setBorder(edge: LayoutEdge, value: number): void {
    this.yoga.setBorder(edge, value)
  }
  setGap(gutter: LayoutGutter, value: number): void {
    this.yoga.setGap(gutter, value)
  }

  // Lifecycle

  free(): void {
    this.yoga.free()
  }
  freeRecursive(): void {
    this.yoga.freeRecursive()
  }
}

// --
// Instance management
//
// The TS yoga-layout port is synchronous — no WASM loading, no linear memory
// growth, so no preload/swap/reset machinery is needed. The Yoga instance is
// just a plain JS object available at import time.

export function createYogaLayoutNode(): LayoutNode {
  return new YogaLayoutNode(Yoga.Node.create())
}
