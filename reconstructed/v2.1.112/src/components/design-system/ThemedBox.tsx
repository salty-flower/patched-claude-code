import React from 'react';
import Box from '../../ink/components/Box.js';
import type { Color, Styles } from '../../ink/styles.js';
import { getTheme, type Theme } from '../../utils/theme.js';
import { useTheme } from './ThemeProvider.js';

export type Props = {
  readonly borderColor?: keyof Theme | Color;
  readonly borderTopColor?: keyof Theme | Color;
  readonly borderBottomColor?: keyof Theme | Color;
  readonly borderLeftColor?: keyof Theme | Color;
  readonly borderRightColor?: keyof Theme | Color;
  readonly backgroundColor?: keyof Theme;
  readonly children?: React.ReactNode;
  readonly ref?: React.Ref<unknown>;
} & Omit<React.ComponentProps<typeof Box>, 'borderColor' | 'borderTopColor' | 'borderBottomColor' | 'borderLeftColor' | 'borderRightColor' | 'backgroundColor'>;

function resolveColor(color: keyof Theme | Color | undefined, theme: Theme): Color | undefined {
  if (!color) return;
  if (color.startsWith('rgb(') || color.startsWith('#') || color.startsWith('ansi256(') || color.startsWith('ansi:')) return color as Color;
  return theme[color as keyof Theme] as Color;
}

export default function ThemedBox({
  borderColor,
  borderTopColor,
  borderBottomColor,
  borderLeftColor,
  borderRightColor,
  backgroundColor,
  children,
  ref,
  ...rest
}: Props): React.ReactNode {
  const [themeName] = useTheme();
  const theme = getTheme(themeName);
  const resolvedBorderColor = resolveColor(borderColor, theme);
  const resolvedBorderTopColor = resolveColor(borderTopColor, theme);
  const resolvedBorderBottomColor = resolveColor(borderBottomColor, theme);
  const resolvedBorderLeftColor = resolveColor(borderLeftColor, theme);
  const resolvedBorderRightColor = resolveColor(borderRightColor, theme);
  const resolvedBackgroundColor = backgroundColor ? (theme[backgroundColor] as Color) : undefined;

  return (
    <Box
      ref={ref}
      borderColor={resolvedBorderColor}
      borderTopColor={resolvedBorderTopColor}
      borderBottomColor={resolvedBorderBottomColor}
      borderLeftColor={resolvedBorderLeftColor}
      borderRightColor={resolvedBorderRightColor}
      backgroundColor={resolvedBackgroundColor}
      {...rest}
    >
      {children}
    </Box>
  );
}
