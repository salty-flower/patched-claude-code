import { c as _c } from "react/compiler-runtime";
import figures from 'figures';
import React from 'react';
import { Box, Text } from '../../ink.js';
import type { PastedContent } from '../../utils/config.js';
import type { ImageDimensions } from '../../utils/imageResizer.js';
import type { OptionWithDescription } from './select.js';
import { SelectInputOption } from './select-input-option.js';
import { SelectOption } from './select-option.js';
import { useMultiSelectState } from './use-multi-select-state.js';
export type SelectMultiProps<T> = {
  readonly isDisabled?: boolean;
  readonly visibleOptionCount?: number;
  readonly options: OptionWithDescription<T>[];
  readonly defaultValue?: T[];
  readonly onCancel: () => void;
  readonly onChange?: (values: T[]) => void;
  readonly onFocus?: (value: T) => void;
  readonly focusValue?: T;
  /**
   * Text for the submit button. When provided, a submit button is shown and
   * Enter toggles selection (submit only fires when the button is focused).
   * When omitted, Enter submits directly and Space toggles selection.
   */
  readonly submitButtonText?: string;
  /**
   * Callback when user submits. Receives the currently selected values.
   */
  readonly onSubmit?: (values: T[]) => void;
  /**
   * When true, hides the numeric indexes next to each option.
   */
  readonly hideIndexes?: boolean;
  /**
   * Callback when user presses down from the last item (submit button).
   * If provided, navigation will not wrap to the first item.
   */
  readonly onDownFromLastItem?: () => void;
  /**
   * Callback when user presses up from the first item.
   * If provided, navigation will not wrap to the last item.
   */
  readonly onUpFromFirstItem?: () => void;
  /**
   * Focus the last option initially instead of the first.
   */
  readonly initialFocusLast?: boolean;
  /**
   * Callback to open external editor for editing input option values.
   * When provided, ctrl+g will trigger this callback in input options
   * with the current value and a setter function to update the internal state.
   */
  readonly onOpenEditor?: (currentValue: string, setValue: (value: string) => void) => void;
  readonly onImagePaste?: (base64Image: string, mediaType?: string, filename?: string, dimensions?: ImageDimensions, sourcePath?: string) => void;
  readonly pastedContents?: Record<number, PastedContent>;
  readonly onRemoveImage?: (id: number) => void;
};
export function SelectMulti(t0) {
  const $ = _c(54);
  const {
    isDisabled: t1,
    visibleOptionCount: t2,
    options,
    defaultValue: t3,
    onCancel,
    onChange,
    onFocus,
    focusValue,
    submitButtonText,
    onSubmit,
    onDownFromLastItem,
    onUpFromFirstItem,
    initialFocusLast,
    onOpenEditor,
    hideIndexes: t4,
    onImagePaste,
    pastedContents,
    onRemoveImage
  } = t0;
  const isDisabled = t1 === undefined ? false : t1;
  const visibleOptionCount = t2 === undefined ? 5 : t2;
  let t5;
  if ($[0] !== t3) {
    t5 = t3 === undefined ? [] : t3;
    $[0] = t3;
    $[1] = t5;
  } else {
    t5 = $[1];
  }
  const defaultValue = t5;
  const hideIndexes = t4 === undefined ? false : t4;
  let t6;
  if ($[2] !== defaultValue || $[3] !== focusValue || $[4] !== hideIndexes || $[5] !== initialFocusLast || $[6] !== isDisabled || $[7] !== onCancel || $[8] !== onChange || $[9] !== onDownFromLastItem || $[10] !== onFocus || $[11] !== onSubmit || $[12] !== onUpFromFirstItem || $[13] !== options || $[14] !== submitButtonText || $[15] !== visibleOptionCount) {
    t6 = {
      isDisabled,
      visibleOptionCount,
      options,
      defaultValue,
      onChange,
      onCancel,
      onFocus,
      focusValue,
      submitButtonText,
      onSubmit,
      onDownFromLastItem,
      onUpFromFirstItem,
      initialFocusLast,
      hideIndexes
    };
    $[2] = defaultValue;
    $[3] = focusValue;
    $[4] = hideIndexes;
    $[5] = initialFocusLast;
    $[6] = isDisabled;
    $[7] = onCancel;
    $[8] = onChange;
    $[9] = onDownFromLastItem;
    $[10] = onFocus;
    $[11] = onSubmit;
    $[12] = onUpFromFirstItem;
    $[13] = options;
    $[14] = submitButtonText;
    $[15] = visibleOptionCount;
    $[16] = t6;
  } else {
    t6 = $[16];
  }
  const state = useMultiSelectState(t6);
  const focusRef = React.useRef(null);
  let t7;
  let t8;
  if ($[17] !== isDisabled) {
    t7 = () => {
      if (!isDisabled && focusRef.current) {
        // TODO(lift): focus manager call at byte ~6967047
        focusRef.current.focus();
      }
    };
    t8 = [isDisabled];
    $[17] = isDisabled;
    $[18] = t7;
    $[19] = t8;
  } else {
    t7 = $[18];
    t8 = $[19];
  }
  React.useEffect(t7, t8);
  let T0;
  let T1;
  let t9;
  let t10;
  let t11;
  let t12;
  let t13;
  if ($[20] !== hideIndexes || $[21] !== isDisabled || $[22] !== onCancel || $[23] !== onImagePaste || $[24] !== onOpenEditor || $[25] !== onRemoveImage || $[26] !== options.length || $[27] !== pastedContents || $[28] !== state) {
    const maxIndexWidth = options.length.toString().length;
    if (T1 = Box, t11 = "column", t12 = focusRef, $[36] !== isDisabled || $[37] !== state.handleKeyDown) {
      t13 = isDisabled ? {} : {
        tabIndex: 0,
        onKeyDown: state.handleKeyDown
      };
      $[36] = isDisabled;
      $[37] = state.handleKeyDown;
      $[38] = t13;
    } else {
      t13 = $[38];
    }
    T0 = Box;
    t10 = "column";
    t9 = state.visibleOptions.map((option, index) => {
      const isOptionFocused = !isDisabled && state.focusedValue === option.value && !state.isSubmitFocused;
      const isSelected = state.selectedValues.includes(option.value);
      const isFirstVisibleOption = option.index === state.visibleFromIndex;
      const isLastVisibleOption = option.index === state.visibleToIndex - 1;
      const areMoreOptionsBelow = state.visibleToIndex < options.length;
      const areMoreOptionsAbove = state.visibleFromIndex > 0;
      const i = state.visibleFromIndex + index + 1;
      if (option.type === "input") {
        const inputValue = state.inputValues.get(option.value) || "";
        return <Box key={String(option.value)} gap={1}><SelectInputOption option={option} isFocused={isOptionFocused} isSelected={false} shouldShowDownArrow={areMoreOptionsBelow && isLastVisibleOption} shouldShowUpArrow={areMoreOptionsAbove && isFirstVisibleOption} maxIndexWidth={maxIndexWidth} index={i} inputValue={inputValue} onInputChange={value => {
            state.updateInputValue(option.value, value);
          }} onSubmit={_temp} onExit={() => {
            onCancel();
          }} layout="compact" onOpenEditor={onOpenEditor} onImagePaste={onImagePaste} pastedContents={pastedContents} onRemoveImage={onRemoveImage}><Text color={isSelected ? "success" : undefined}>[{isSelected ? figures.tick : " "}]{" "}</Text></SelectInputOption></Box>;
      }
      return <Box key={String(option.value)} gap={1}><SelectOption isFocused={isOptionFocused} isSelected={false} shouldShowDownArrow={areMoreOptionsBelow && isLastVisibleOption} shouldShowUpArrow={areMoreOptionsAbove && isFirstVisibleOption} description={option.description}>{!hideIndexes && <Text dimColor={true}>{`${i}.`.padEnd(maxIndexWidth)}</Text>}<Text color={isSelected ? "success" : undefined}>[{isSelected ? figures.tick : " "}]</Text><Text color={isOptionFocused ? "suggestion" : undefined}>{option.label}</Text></SelectOption></Box>;
    });
    $[20] = hideIndexes;
    $[21] = isDisabled;
    $[22] = onCancel;
    $[23] = onImagePaste;
    $[24] = onOpenEditor;
    $[25] = onRemoveImage;
    $[26] = options.length;
    $[27] = pastedContents;
    $[28] = state;
    $[29] = T0;
    $[30] = T1;
    $[31] = t9;
    $[32] = t10;
    $[33] = t11;
    $[34] = t12;
    $[35] = t13;
  } else {
    T0 = $[29];
    T1 = $[30];
    t9 = $[31];
    t10 = $[32];
    t11 = $[33];
    t12 = $[34];
    t13 = $[35];
  }
  let t14;
  if ($[39] !== T0 || $[40] !== t9 || $[41] !== t10) {
    t14 = <T0 flexDirection={t10}>{t9}</T0>;
    $[39] = T0;
    $[40] = t9;
    $[41] = t10;
    $[42] = t14;
  } else {
    t14 = $[42];
  }
  let t15;
  if ($[43] !== onSubmit || $[44] !== state.isSubmitFocused || $[45] !== submitButtonText) {
    t15 = submitButtonText && onSubmit && <Box marginTop={0} gap={1}>{state.isSubmitFocused ? <Text color="suggestion">{figures.pointer}</Text> : <Text> </Text>}<Box marginLeft={3}><Text color={state.isSubmitFocused ? "suggestion" : undefined} bold={true}>{submitButtonText}</Text></Box></Box>;
    $[43] = onSubmit;
    $[44] = state.isSubmitFocused;
    $[45] = submitButtonText;
    $[46] = t15;
  } else {
    t15 = $[46];
  }
  let t16;
  if ($[47] !== T1 || $[48] !== t11 || $[49] !== t12 || $[50] !== t13 || $[51] !== t14 || $[52] !== t15) {
    t16 = <T1 flexDirection={t11} ref={t12} {...t13}>{t14}{t15}</T1>;
    $[47] = T1;
    $[48] = t11;
    $[49] = t12;
    $[50] = t13;
    $[51] = t14;
    $[52] = t15;
    $[53] = t16;
  } else {
    t16 = $[53];
  }
  return t16;
}
function _temp() {}
