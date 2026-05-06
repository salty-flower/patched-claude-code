import { c as _c } from "react/compiler-runtime";
import React from 'react';
import { type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS, logEvent } from 'src/services/analytics/index.js';
import { Box, Text } from '../../ink.js';
import { FeedbackSurveyView, isValidResponseInput } from './FeedbackSurveyView.js';
import type { TranscriptShareResponse } from './TranscriptSharePrompt.js';
import { TranscriptSharePrompt } from './TranscriptSharePrompt.js';
import { useDebouncedDigitInput } from './useDebouncedDigitInput.js';
import type { FeedbackSurveyResponse } from './utils.js';

// TODO(lift): MemoryEvaluationView at byte ~12553359

type Props = {
  state: 'closed' | 'open' | 'pending' | 'thanks' | 'transcript_prompt' | 'submitting' | 'submitted';
  lastResponse: FeedbackSurveyResponse | null;
  handleSelect: (selected: FeedbackSurveyResponse) => void;
  handleUndo?: () => void;
  handleTranscriptSelect?: (selected: TranscriptShareResponse) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  onRequestFeedback?: () => void;
  message?: string;
  memoryEvaluation?: unknown;
};

export function FeedbackSurvey(t0) {
  const $ = _c(24);
  const {
    state,
    lastResponse,
    handleSelect,
    handleUndo,
    handleTranscriptSelect,
    inputValue,
    setInputValue,
    onRequestFeedback,
    message,
    memoryEvaluation
  } = t0;
  if (state === "closed") {
    return null;
  }
  if (state === "pending") {
    let t1;
    if ($[0] !== handleUndo || $[1] !== lastResponse) {
      t1 = <FeedbackSurveyPending lastResponse={lastResponse} onUndo={handleUndo} />;
      $[0] = handleUndo;
      $[1] = lastResponse;
      $[2] = t1;
    } else {
      t1 = $[2];
    }
    return t1;
  }
  if (state === "thanks") {
    let t1;
    if ($[3] !== inputValue || $[4] !== lastResponse || $[5] !== onRequestFeedback || $[6] !== setInputValue) {
      t1 = <FeedbackSurveyThanks lastResponse={lastResponse} inputValue={inputValue} setInputValue={setInputValue} onRequestFeedback={onRequestFeedback} />;
      $[3] = inputValue;
      $[4] = lastResponse;
      $[5] = onRequestFeedback;
      $[6] = setInputValue;
      $[7] = t1;
    } else {
      t1 = $[7];
    }
    return t1;
  }
  if (state === "submitted") {
    let t1;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
      t1 = <Box marginTop={1}><Text color="success">{"\u2713"} Thanks for sharing your transcript!</Text></Box>;
      $[8] = t1;
    } else {
      t1 = $[8];
    }
    return t1;
  }
  if (state === "submitting") {
    let t1;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
      t1 = <Box marginTop={1}><Text dimColor={true}>Sharing transcript{"\u2026"}</Text></Box>;
      $[9] = t1;
    } else {
      t1 = $[9];
    }
    return t1;
  }
  if (state === "transcript_prompt") {
    if (!handleTranscriptSelect) {
      return null;
    }
    if (inputValue && !isValidTranscriptInput(inputValue.toLowerCase())) {
      return null;
    }
    let t1;
    if ($[10] !== handleTranscriptSelect || $[11] !== inputValue || $[12] !== setInputValue) {
      t1 = <TranscriptSharePrompt onSelect={handleTranscriptSelect} inputValue={inputValue} setInputValue={setInputValue} />;
      $[10] = handleTranscriptSelect;
      $[11] = inputValue;
      $[12] = setInputValue;
      $[13] = t1;
    } else {
      t1 = $[13];
    }
    return t1;
  }
  if (inputValue && !isValidResponseInput(inputValue)) {
    return null;
  }
  if (memoryEvaluation) {
    let t1;
    if ($[14] !== handleSelect || $[15] !== inputValue || $[16] !== memoryEvaluation || $[17] !== setInputValue) {
      t1 = <MemoryEvaluationView evaluation={memoryEvaluation} onSelect={handleSelect} inputValue={inputValue} setInputValue={setInputValue} />;
      $[14] = handleSelect;
      $[15] = inputValue;
      $[16] = memoryEvaluation;
      $[17] = setInputValue;
      $[18] = t1;
    } else {
      t1 = $[18];
    }
    return t1;
  }
  let t1;
  if ($[19] !== handleSelect || $[20] !== inputValue || $[21] !== message || $[22] !== setInputValue) {
    t1 = <FeedbackSurveyView onSelect={handleSelect} inputValue={inputValue} setInputValue={setInputValue} message={message} />;
    $[19] = handleSelect;
    $[20] = inputValue;
    $[21] = message;
    $[22] = setInputValue;
    $[23] = t1;
  } else {
    t1 = $[23];
  }
  return t1;
}

const TRANSCRIPT_INPUTS = ['y', 'n', 'd'] as const;
const isValidTranscriptInput = (input: string): boolean =>
  (TRANSCRIPT_INPUTS as readonly string[]).includes(input);

type PendingProps = {
  lastResponse: FeedbackSurveyResponse | null;
  onUndo?: () => void;
};

function FeedbackSurveyPending(t0) {
  const $ = _c(2);
  const {
    lastResponse,
    onUndo
  } = t0;
  let t1;
  if ($[0] !== lastResponse || $[1] !== onUndo) {
    t1 = <Box marginTop={1}><Text dimColor={true}>Thanks for the feedback! </Text>{onUndo ? <Text color="ansi:cyan" dimColor={true}>[u] Undo</Text> : null}</Box>;
    $[0] = lastResponse;
    $[1] = onUndo;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  return t1;
}

type ThanksProps = {
  lastResponse: FeedbackSurveyResponse | null;
  inputValue: string;
  setInputValue: (value: string) => void;
  onRequestFeedback?: () => void;
};

const isFollowUpDigit = (char: string): char is '1' => char === '1';

function FeedbackSurveyThanks(t0) {
  const $ = _c(12);
  const {
    lastResponse,
    inputValue,
    setInputValue,
    onRequestFeedback
  } = t0;
  const showFollowUp = onRequestFeedback && lastResponse === "good";
  const t1 = Boolean(showFollowUp);
  let t2;
  if ($[0] !== lastResponse || $[1] !== onRequestFeedback) {
    t2 = () => {
      logEvent("tengu_feedback_survey_event", {
        event_type: "followup_accepted" as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
        response: lastResponse as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS
      });
      onRequestFeedback?.();
    };
    $[0] = lastResponse;
    $[1] = onRequestFeedback;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== inputValue || $[4] !== setInputValue || $[5] !== t1 || $[6] !== t2) {
    t3 = {
      inputValue,
      setInputValue,
      isValidDigit: isFollowUpDigit,
      enabled: t1,
      once: true,
      mountDelayMs: 0,
      onDigit: t2
    };
    $[3] = inputValue;
    $[4] = setInputValue;
    $[5] = t1;
    $[6] = t2;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  useDebouncedDigitInput(t3);
  let t4;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = <Text color="success">Thanks for the feedback!</Text>;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  let t5;
  if ($[9] !== lastResponse || $[10] !== showFollowUp) {
    t5 = <Box marginTop={1} flexDirection="column">{t4}{showFollowUp ? <Text dimColor={true}>(Optional) Press [<Text color="ansi:cyan">1</Text>] to tell us what went well {" \xB7 "}{"/feedback"}</Text> : lastResponse === "bad" ? <Text dimColor={true}>Use /issue to report model behavior issues.</Text> : <Text dimColor={true}>Use {"/feedback"} to share detailed feedback anytime.</Text>}</Box>;
    $[9] = lastResponse;
    $[10] = showFollowUp;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  return t5;
}
