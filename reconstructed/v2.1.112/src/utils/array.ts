// v112_min has only one matched decl (intersperse/L16, jac=1, cos=1).
// v88 had `count` and `uniq`; region.json shows those have no v112 match
// in this slice — they are referenced from other files (bashPermissions.ts
// imports `count`, attachments.ts imports `uniq`) so they must still exist
// somewhere in v112. Transcribe all three from v88 since the only matched
// decl (L16 → intersperse) is verbatim and the others are trivially stable.

export function intersperse<A>(as: A[], separator: (index: number) => A): A[] {
  return as.flatMap((a, i) => (i ? [separator(i), a] : [a]))
}

export function count<T>(arr: readonly T[], pred: (x: T) => unknown): number {
  let n = 0
  for (const x of arr) n += +!!pred(x)
  return n
}

export function uniq<T>(xs: Iterable<T>): T[] {
  return [...new Set(xs)]
}
