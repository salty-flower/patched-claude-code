import { randomUUID } from 'crypto';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { TranscriptShareResponse } from './TranscriptSharePrompt.js';
import type { FeedbackSurveyResponse } from './utils.js';

type SurveyState = 'closed' | 'open' | 'pending' | 'thanks' | 'transcript_prompt' | 'submitting' | 'submitted';

const PENDING_TIMEOUT_MS = 5000;

type UseSurveyStateOptions = {
  hideThanksAfterMs: number;
  otherSurveyActive?: boolean;
  onOpen: (appearanceId: string) => void | Promise<void>;
  onSelect: (appearanceId: string, selected: FeedbackSurveyResponse) => void | Promise<void>;
  shouldShowTranscriptPrompt?: (selected: FeedbackSurveyResponse) => boolean;
  onTranscriptPromptShown?: (appearanceId: string, surveyResponse: FeedbackSurveyResponse) => void;
  onTranscriptSelect?: (appearanceId: string, selected: TranscriptShareResponse, surveyResponse: FeedbackSurveyResponse | null) => boolean | Promise<boolean>;
};

export function useSurveyState({
  hideThanksAfterMs,
  otherSurveyActive = false,
  onOpen,
  onSelect,
  shouldShowTranscriptPrompt,
  onTranscriptPromptShown,
  onTranscriptSelect
}: UseSurveyStateOptions): {
  state: SurveyState;
  lastResponse: FeedbackSurveyResponse | null;
  open: () => void;
  handleSelect: (selected: FeedbackSurveyResponse) => boolean;
  handleUndo: () => void;
  handleTranscriptSelect: (selected: TranscriptShareResponse) => void;
} {
  const [state, setState] = useState<SurveyState>('closed');
  const [lastResponse, setLastResponse] = useState<FeedbackSurveyResponse | null>(null);
  const appearanceId = useRef(randomUUID());
  const lastResponseRef = useRef<FeedbackSurveyResponse | null>(null);
  const pendingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => () => {
    if (pendingTimeoutRef.current) {
      clearTimeout(pendingTimeoutRef.current);
    }
  }, []);

  const showThanksThenClose = useCallback(() => {
    setState('thanks');
    setTimeout((setState_0, setLastResponse_0) => {
      setState_0('closed');
      setLastResponse_0(null);
    }, hideThanksAfterMs, setState, setLastResponse);
  }, [hideThanksAfterMs]);

  const showSubmittedThenClose = useCallback(() => {
    setState('submitted');
    setTimeout(setState, hideThanksAfterMs, 'closed');
  }, [hideThanksAfterMs]);

  const open = useCallback(() => {
    if (state !== 'closed') {
      return;
    }
    setState('open');
    appearanceId.current = randomUUID();
    void onOpen(appearanceId.current);
  }, [state, onOpen]);

  // Close if another survey becomes active while we're open
  useEffect(() => {
    if (otherSurveyActive && state === 'open') {
      setState('closed');
    }
  }, [otherSurveyActive, state]);

  const handleSelect = useCallback((selected: FeedbackSurveyResponse): boolean => {
    setLastResponse(selected);
    lastResponseRef.current = selected;
    // Always fire the survey response event first
    void onSelect(appearanceId.current, selected);
    if (selected === 'dismissed') {
      setState('closed');
      setLastResponse(null);
    } else if (shouldShowTranscriptPrompt?.(selected)) {
      setState('transcript_prompt');
      onTranscriptPromptShown?.(appearanceId.current, selected);
      return true;
    } else {
      showThanksThenClose();
    }
    return false;
  }, [showThanksThenClose, onSelect, shouldShowTranscriptPrompt, onTranscriptPromptShown]);

  const handleUndo = useCallback(() => {
    const previous = lastResponseRef.current;
    setLastResponse(null);
    lastResponseRef.current = null;
    if (previous === 'dismissed') {
      handleSelect(previous);
      return;
    }
    setState('pending');
    pendingTimeoutRef.current = setTimeout(handleSelect, PENDING_TIMEOUT_MS, previous);
  }, [handleSelect]);

  const handleTranscriptSelect = useCallback((selected_0: TranscriptShareResponse) => {
    switch (selected_0) {
      case 'yes':
        setState('submitting');
        void (async () => {
          try {
            const success = await onTranscriptSelect?.(appearanceId.current, selected_0, lastResponseRef.current);
            if (success) {
              showSubmittedThenClose();
            } else {
              showThanksThenClose();
            }
          } catch {
            showThanksThenClose();
          }
        })();
        break;
      case 'no':
      case 'dont_ask_again':
        void onTranscriptSelect?.(appearanceId.current, selected_0, lastResponseRef.current);
        showThanksThenClose();
        break;
    }
  }, [showThanksThenClose, showSubmittedThenClose, onTranscriptSelect]);

  return {
    state,
    lastResponse,
    open,
    handleSelect,
    handleUndo,
    handleTranscriptSelect
  };
}
