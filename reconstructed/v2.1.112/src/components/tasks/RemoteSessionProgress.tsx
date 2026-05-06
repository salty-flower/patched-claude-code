import type { ReactNode } from 'react';
import React from 'react';
import { Box, Text } from '../../ink.js';
import { useSmoothCount } from '../../hooks/useSmoothCount.js';
import type { ReviewCounts } from '../../tasks/RemoteSessionTask/types.js';

function formatReviewStageCounts(counts: ReviewCounts): string {
  const parts: string[] = [];
  if (counts.approved > 0) parts.push(`${counts.approved} approved`);
  if (counts.rejected > 0) parts.push(`${counts.rejected} rejected`);
  if (counts.pending > 0) parts.push(`${counts.pending} pending`);
  return parts.join(', ') || 'No reviews';
}

function RainbowText({ text }: { text: string }): ReactNode {
  const colors = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'] as const;
  return (
    <>
      {text.split('').map((char, i) => (
        <Text key={i} color={colors[i % colors.length]}>
          {char}
        </Text>
      ))}
    </>
  );
}

function ReviewRainbowLine({ counts }: { counts: ReviewCounts }): ReactNode {
  const total = counts.approved + counts.rejected + counts.pending;
  const approvedCount = useSmoothCount(counts.approved, { duration: 500 });
  const rejectedCount = useSmoothCount(counts.rejected, { duration: 500 });
  const pendingCount = useSmoothCount(counts.pending, { duration: 500 });

  return (
    <Box flexDirection="row" gap={1}>
      <RainbowText text={`Reviews: ${approvedCount}/${total}`} />
      <Text dimColor>({rejectedCount} rejected, {pendingCount} pending)</Text>
    </Box>
  );
}

type Props = {
  counts: ReviewCounts;
};

export function RemoteSessionProgress({ counts }: Props): ReactNode {
  return (
    <Box flexDirection="column">
      <ReviewRainbowLine counts={counts} />
    </Box>
  );
}
