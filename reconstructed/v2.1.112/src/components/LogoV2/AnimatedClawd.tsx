import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Box } from '../../ink.js';
import { getInitialSettings } from '../../utils/settings/settings.js';
import { Clawd, type ClawdPose } from './Clawd.js';
type Frame = {
  pose: ClawdPose;
  offset: number;
};

/** Hold a pose for n frames (60ms each). */
function hold(pose: ClawdPose, offset: number, frames: number): Frame[] {
  return Array.from({
    length: frames
  }, () => ({
    pose,
    offset
  }));
}

// Offset semantics: marginTop in a fixed-height-3 container. 0 = normal,
// 1 = crouched. Container height stays 3 so the layout never shifts; during
// a crouch (offset=1) Clawd's feet row dips below the container and gets
// clipped — reads as "ducking below the frame" before springing back up.

// Click animation: crouch, then spring up with both arms raised. Twice.
const JUMP_WAVE: readonly Frame[] = [...hold('default', 1, 2),
// crouch
...hold('arms-up', 0, 3),
// spring!
...hold('default', 0, 1), ...hold('default', 1, 2),
// crouch again
...hold('arms-up', 0, 3),
// spring!
...hold('default', 0, 1)];

// Click animation: glance right, then left, then back.
const LOOK_AROUND: readonly Frame[] = [...hold('look-right', 0, 5), ...hold('look-left', 0, 5), ...hold('default', 0, 1)];

// Autoplay: celebrate animation (jump wave + extra hold)
const CELEBRATE: readonly Frame[] = [...JUMP_WAVE, ...hold('default', 1, 3)];

// Autoplay sequences by name
const AUTOPLAY_SEQUENCES: Record<string, readonly Frame[]> = {
  jump: JUMP_WAVE,
  look: LOOK_AROUND,
  celebrate: CELEBRATE,
};

const CLICK_ANIMATIONS: readonly (readonly Frame[])[] = [JUMP_WAVE, LOOK_AROUND];
const IDLE: Frame = {
  pose: 'default',
  offset: 0
};
const FRAME_MS = 60;
const incrementFrame = (i: number) => i + 1;
const CLAWD_HEIGHT = 3;

type AnimatedClawdProps = {
  autoplay?: boolean;
  sequence?: string;
  onComplete?: () => void;
};

/**
 * Clawd with click-triggered animations (crouch-jump with arms up, or
 * look-around). Container height is fixed at CLAWD_HEIGHT — same footprint
 * as a bare `<Clawd />` — so the surrounding layout never shifts. During a
 * crouch only the feet row clips (see comment above). Click only fires when
 * mouse tracking is enabled (i.e. inside `<AlternateScreen>` / fullscreen);
 * elsewhere this renders and behaves identically to plain `<Clawd />`.
 *
 * v112 additions:
 * - `autoplay` prop: starts the animation immediately on mount
 * - `sequence` prop: named sequence to play ("jump", "look", "celebrate")
 * - `onComplete` prop: callback fired when animation completes
 */
export function AnimatedClawd(t0: AnimatedClawdProps): React.ReactNode {
  const $ = _c(10);
  const { autoplay, sequence, onComplete } = t0;
  const shouldAutoplay = (autoplay || sequence !== undefined) && !useClawdAnimation_shouldNotAutoplay();
  const {
    pose,
    bounceOffset,
    onClick
  } = useClawdAnimation(shouldAutoplay, sequence, onComplete);
  let t0_elem;
  if ($[2] !== pose) {
    t0_elem = <Clawd pose={pose} />;
    $[2] = pose;
    $[3] = t0_elem;
  } else {
    t0_elem = $[3];
  }
  let t1;
  if ($[4] !== bounceOffset || $[5] !== t0_elem) {
    t1 = <Box marginTop={bounceOffset} flexShrink={0}>{t0_elem}</Box>;
    $[4] = bounceOffset;
    $[5] = t0_elem;
    $[6] = t1;
  } else {
    t1 = $[6];
  }
  let t2;
  if ($[7] !== onClick || $[8] !== t1) {
    t2 = <Box height={CLAWD_HEIGHT} flexDirection="column" onClick={onClick}>{t1}</Box>;
    $[7] = onClick;
    $[8] = t1;
    $[9] = t2;
  } else {
    t2 = $[9];
  }
  return t2;
}

// TODO(lift): v112 minified shows this check inline; verify exact logic
function useClawdAnimation_shouldNotAutoplay(): boolean {
  const [reducedMotion] = useState(() => getInitialSettings().prefersReducedMotion ?? false);
  return reducedMotion;
}

function useClawdAnimation(
  autoplay?: boolean,
  sequenceName?: string,
  onComplete?: () => void,
): {
  pose: ClawdPose;
  bounceOffset: number;
  onClick: () => void;
} {
  // Read once at mount — no useSettings() subscription, since that would
  // re-render on any settings change.
  const [reducedMotion] = useState(() => getInitialSettings().prefersReducedMotion ?? false);
  const shouldStart = (autoplay || sequenceName !== undefined) && !reducedMotion;
  const [frameIndex, setFrameIndex] = useState(shouldStart ? 0 : -1);
  const sequenceRef = useRef<readonly Frame[]>(
    sequenceName ? (AUTOPLAY_SEQUENCES[sequenceName] ?? JUMP_WAVE) : JUMP_WAVE,
  );
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // v112: effect to call onComplete when reducedMotion is true
  useEffect(() => {
    if (reducedMotion) {
      onCompleteRef.current?.();
    }
  }, [reducedMotion]);

  const onClick = () => {
    if (reducedMotion || frameIndex !== -1) return;
    sequenceRef.current = CLICK_ANIMATIONS[Math.floor(Math.random() * CLICK_ANIMATIONS.length)]!;
    setFrameIndex(0);
  };
  useEffect(() => {
    if (frameIndex === -1) return;
    if (frameIndex >= sequenceRef.current.length) {
      onCompleteRef.current?.();
      setFrameIndex(autoplay || sequenceName !== undefined ? 0 : -1);
      return;
    }
    const timer = setTimeout(setFrameIndex, FRAME_MS, incrementFrame);
    return () => clearTimeout(timer);
  }, [frameIndex, autoplay, sequenceName]);
  const seq = sequenceRef.current;
  const idleFrame = sequenceName ? seq.at(-1) ?? IDLE : IDLE;
  const current = frameIndex >= 0 && frameIndex < seq.length ? seq[frameIndex]! : idleFrame;
  return {
    pose: current.pose,
    bounceOffset: current.offset,
    onClick
  };
}
