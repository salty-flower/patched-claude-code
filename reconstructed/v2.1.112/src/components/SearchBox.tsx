import { c as _c } from "react/compiler-runtime";
import React from 'react';
import { Box, Text } from '../ink.js';
import { renderHighlightedQuery } from '../utils/highlight.js'; // TODO: verify import path

type Props = {
  query: string;
  placeholder?: string;
  isFocused: boolean;
  isTerminalFocused: boolean;
  prefix?: string;
  width?: number | string;
  cursorOffset?: number;
  borderless?: boolean;
  highlights?: Array<[number, number]>;
  prefixDim?: boolean;
};

export function SearchBox(t0: Props) {
  const $ = _c(23);
  const {
    query,
    placeholder: t1,
    isFocused,
    isTerminalFocused,
    prefix: t2,
    width,
    cursorOffset,
    borderless: t3,
    highlights: t4,
    prefixDim: t5,
  } = t0;
  const placeholder = t1 === undefined ? "Search\u2026" : t1;
  const prefix = t2 === undefined ? "\u2315" : t2;
  const borderless = t3 === undefined ? false : t3;
  const highlights = t4 === undefined ? [] : t4;
  const prefixDim = t5 === undefined ? false : t5;
  const offset = cursorOffset ?? query.length;
  const t6 = borderless ? undefined : "round";
  const t7 = isFocused ? "suggestion" : undefined;
  const t8 = !isFocused;
  const t9 = borderless ? 0 : 1;
  const t10 = !isFocused;
  let t11;
  if ($[0] !== highlights || $[1] !== isFocused || $[2] !== isTerminalFocused || $[3] !== offset || $[4] !== placeholder || $[5] !== query) {
    t11 = isFocused
      ? (query
        ? (isTerminalFocused
          ? renderHighlightedQuery(query, highlights, offset)
          : <Text>{query}</Text>)
        : (isTerminalFocused
          ? <><Text inverse={true}>{placeholder.charAt(0)}</Text><Text dimColor={true}>{placeholder.slice(1)}</Text></>
          : <Text dimColor={true}>{placeholder}</Text>))
      : (query ? <Text>{query}</Text> : <Text>{placeholder}</Text>);
    $[0] = highlights;
    $[1] = isFocused;
    $[2] = isTerminalFocused;
    $[3] = offset;
    $[4] = placeholder;
    $[5] = query;
    $[6] = t11;
  } else {
    t11 = $[6];
  }
  let t12;
  if ($[7] !== prefix || $[8] !== prefixDim || $[9] !== t10 || $[10] !== t11) {
    t12 = <Text dimColor={t10}>{prefix}{" "}{t11}</Text>;
    $[7] = prefix;
    $[8] = prefixDim;
    $[9] = t10;
    $[10] = t11;
    $[11] = t12;
  } else {
    t12 = $[11];
  }
  let t13;
  if ($[12] !== t12 || $[13] !== t6 || $[14] !== t7 || $[15] !== t8 || $[16] !== t9 || $[17] !== width) {
    t13 = <Box flexShrink={0} borderStyle={t6} borderColor={t7} borderDimColor={t8} paddingX={t9} width={width}>{t12}</Box>;
    $[12] = t12;
    $[13] = t6;
    $[14] = t7;
    $[15] = t8;
    $[16] = t9;
    $[17] = width;
    $[18] = t13;
  } else {
    t13 = $[18];
  }
  return t13;
}
