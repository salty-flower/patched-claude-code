import React from 'react';
import Text from '../../ink/components/Text.js';

type FormatOptions = {
  /** Separator between chord keys. @default '+' */
  keySep?: string;
  /** Separator for arrow keys. @default '/' */
  arrowSep?: string;
  /** Case transformation for key names. @default undefined */
  keyCase?: 'lower' | 'upper';
};

type Props = {
  /** The key or chord to display (e.g., "ctrl+o", "Enter", ["up", "down"]) */
  chord: string | string[];
  /** The action the key performs (e.g., "expand", "select", "navigate") */
  action: string;
  /** Whether to wrap the hint in parentheses. Default: false */
  parens?: boolean;
  /** Whether to render the shortcut in bold. Default: false */
  bold?: boolean;
  /** Optional formatting for chord rendering */
  format?: FormatOptions;
};

// TODO: unresolved minified symbol l$4 (formatChord) [4450656-4451265]
function formatChord_V112(
  chord: string[],
  format?: FormatOptions,
): string {
  // TODO: reconstruct from v112 minified bytes 4450656-4451265
  return chord.join(format?.keySep ?? '+')
}

/**
 * Renders a keyboard shortcut hint like "ctrl+o to expand" or "(tab to toggle)"
 *
 * Wrap in <Text dimColor> for the common dim styling.
 *
 * @example
 * // Simple hint wrapped in dim Text
 * <Text dimColor><KeyboardShortcutHint chord="esc" action="cancel" /></Text>
 *
 * // With parentheses: "(ctrl+o to expand)"
 * <Text dimColor><KeyboardShortcutHint chord="ctrl+o" action="expand" parens /></Text>
 *
 * // With bold shortcut: "Enter to confirm" (Enter is bold)
 * <Text dimColor><KeyboardShortcutHint chord="Enter" action="confirm" bold /></Text>
 *
 * // Chord with array: "↑↓ to navigate"
 * <Text dimColor><KeyboardShortcutHint chord={["up", "down"]} action="navigate" format={{ arrowSep: "" }} /></Text>
 *
 * // Multiple hints with middot separator - use Byline
 * <Text dimColor>
 *   <Byline>
 *     <KeyboardShortcutHint chord="Enter" action="confirm" />
 *     <KeyboardShortcutHint chord="Esc" action="cancel" />
 *   </Byline>
 * </Text>
 */
export function KeyboardShortcutHint({
  chord,
  action,
  parens = false,
  bold = false,
  format,
}: Props): React.ReactNode {
  const chordArray = typeof chord === 'string' ? [chord] : chord
  const formattedChord = formatChord_V112(chordArray, format)

  if (!formattedChord) return null

  const shortcutText = bold ? <Text bold>{formattedChord}</Text> : formattedChord

  if (parens) {
    return <Text>({shortcutText} to {action})</Text>
  }

  return <Text>{shortcutText} to {action}</Text>
}
