import React from 'react'
import { BLACK_CIRCLE } from '../constants/figures.js'
import { useBlink } from '../hooks/useBlink.js'
import { Box, Text } from '../ink.js'

type Props = {
  isError: boolean
  isUnresolved: boolean
  shouldAnimate: boolean
}

export function ToolUseLoader({
  isError,
  isUnresolved,
  shouldAnimate,
}: Props): React.ReactNode {
  const [ref, isBlinking] = useBlink(shouldAnimate)
  const color = isUnresolved ? undefined : isError ? 'error' : 'success'
  const symbol =
    !shouldAnimate || isBlinking || isError || !isUnresolved
      ? BLACK_CIRCLE
      : ' '

  return (
    <Box ref={ref} minWidth={2}>
      <Text color={color} dimColor={isUnresolved}>
        {symbol}
      </Text>
    </Box>
  )
}
