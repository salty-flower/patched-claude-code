import { c as _c } from "react/compiler-runtime";
import React, { useRef } from 'react';
import { renderPlaceholder } from '../hooks/renderPlaceholder.js';
import { usePasteHandler } from '../hooks/usePasteHandler.js';
import { useDeclaredCursor } from '../ink/hooks/use-declared-cursor.js';
import { Ansi, Box, Text, useInput } from '../ink.js';
import type { BaseInputState, BaseTextInputProps } from '../types/textInputTypes.js';
import type { TextHighlight } from '../utils/textHighlighting.js';
import { HighlightedInput } from './PromptInput/ShimmeredInput.js';
type BaseTextInputComponentProps = BaseTextInputProps & {
  inputState: BaseInputState;
  children?: React.ReactNode;
  terminalFocus: boolean;
  highlights?: TextHighlight[];
  invert?: (text: string) => string;
  hidePlaceholderText?: boolean;
};

/**
 * A base component for text inputs that handles rendering and basic input
 */
export function BaseTextInput(t0) {
  const $ = _c(24);
  const {
    inputState,
    children,
    terminalFocus,
    invert,
    hidePlaceholderText,
    ...props
  } = t0;
  const {
    handleKeyDown,
    renderedValue,
    cursorLine,
    cursorColumn
  } = inputState;
  const t1 = Boolean(props.focus && props.showCursor && terminalFocus);
  let t2;
  if ($[0] !== cursorColumn || $[1] !== cursorLine || $[2] !== t1) {
    t2 = {
      line: cursorLine,
      column: cursorColumn,
      active: t1
    };
    $[0] = cursorColumn;
    $[1] = cursorLine;
    $[2] = t1;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const cursorRef = useDeclaredCursor(t2);
  const caretRef = useRef(null);
  let t3;
  if ($[4] !== cursorRef) {
    t3 = ($6) => {
      caretRef.current = $6;
      cursorRef($6);
    };
    $[4] = cursorRef;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  const setRef = t3;
  const {
    handleKeyDown: wrappedOnInput,
    handlePaste,
    isPasting: t4
  } = usePasteHandler({
    onPaste: props.onPaste,
    handleKeyDown: ($6) => {
      if (props.onKeyDownBefore?.($6), $6.defaultPrevented || $6.didStopImmediatePropagation()) return;
      handleKeyDown($6);
    },
    onImagePaste: props.onImagePaste
  });
  const isPasting = t4;
  const {
    onIsPastingChange
  } = props;
  React.useEffect(() => {
    if (onIsPastingChange) {
      onIsPastingChange(isPasting);
    }
  }, [isPasting, onIsPastingChange]);
  const focus = props.focus !== false;
  let t5;
  let t6;
  if ($[6] !== focus) {
    t5 = () => {
      if (!focus || !caretRef.current) return;
      const $6 = cE(caretRef.current);
      return $6.focus(caretRef.current), $6.subscribe(() => {
        const H6 = caretRef.current;
        if (!H6 || $6.activeElement === H6) return;
        if (!$6.activeElement) {
          $6.focus(H6);
          return;
        }
        let q6 = H6.parentNode;
        while (q6) {
          if (q6 === $6.activeElement) {
            $6.focus(H6);
            return;
          }
          q6 = q6.parentNode;
        }
      });
    };
    t6 = [focus];
    $[6] = focus;
    $[7] = t5;
    $[8] = t6;
  } else {
    t5 = $[7];
    t6 = $[8];
  }
  React.useEffect(t5, t6);
  const {
    showPlaceholder,
    renderedPlaceholder
  } = renderPlaceholder({
    placeholder: props.placeholder,
    value: props.value,
    showCursor: props.showCursor,
    focus: props.focus,
    terminalFocus,
    invert,
    hidePlaceholderText
  });
  let t7;
  if ($[9] !== wrappedOnInput || $[10] !== handlePaste || $[11] !== focus) {
    t7 = focus ? {
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: wrappedOnInput,
      onPaste: handlePaste
    } : {};
    $[9] = wrappedOnInput;
    $[10] = handlePaste;
    $[11] = focus;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  const inputProps = t7;
  const commandWithoutArgs = props.value && props.value.trim().indexOf(" ") === -1 || props.value && props.value.endsWith(" ");
  const showArgumentHint = Boolean(props.argumentHint && props.value && commandWithoutArgs && props.value.startsWith("/"));
  const cursorFiltered = props.showCursor && props.highlights ? props.highlights.filter(($6) => $6.dimColor || props.cursorOffset < $6.start || props.cursorOffset >= $6.end) : props.highlights;
  const {
    viewportCharOffset,
    viewportCharEnd
  } = inputState;
  const filteredHighlights = cursorFiltered && viewportCharOffset > 0 ? cursorFiltered.filter(($6) => $6.end > viewportCharOffset && $6.start < viewportCharEnd).map(($6) => ({
    ...$6,
    start: Math.max(0, $6.start - viewportCharOffset),
    end: $6.end - viewportCharOffset
  })) : cursorFiltered;
  const hasHighlights = filteredHighlights && filteredHighlights.length > 0;
  if (hasHighlights) {
    return <Box ref={setRef} {...inputProps}><HighlightedInput text={renderedValue} highlights={filteredHighlights} />{showArgumentHint && <Text dimColor={true}>{props.value?.endsWith(" ") ? "" : " "}{props.argumentHint}</Text>}{children}</Box>;
  }
  const T0 = Box;
  const T1 = Text;
  const t8 = "truncate-end";
  const t9 = showPlaceholder && props.placeholderElement ? props.placeholderElement : showPlaceholder && renderedPlaceholder ? <Ansi>{renderedPlaceholder}</Ansi> : <Ansi>{renderedValue}</Ansi>;
  const t10 = showArgumentHint && <Text dimColor={true}>{props.value?.endsWith(" ") ? "" : " "}{props.argumentHint}</Text>;
  let t11;
  if ($[13] !== T1 || $[14] !== children || $[15] !== props || $[16] !== t9 || $[17] !== t10) {
    t11 = <T1 wrap={t8} dimColor={props.dimColor}>{t9}{t10}{children}</T1>;
    $[13] = T1;
    $[14] = children;
    $[15] = props;
    $[16] = t9;
    $[17] = t10;
    $[18] = t11;
  } else {
    t11 = $[18];
  }
  let t12;
  if ($[19] !== T0 || $[20] !== inputProps || $[21] !== setRef || $[22] !== t11) {
    t12 = <T0 ref={setRef} {...inputProps}>{t11}</T0>;
    $[19] = T0;
    $[20] = inputProps;
    $[21] = setRef;
    $[22] = t11;
    $[23] = t12;
  } else {
    t12 = $[23];
  }
  return t12;
}
