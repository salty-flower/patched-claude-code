import chalk from 'chalk';
import figures from 'figures';
import React from 'react';
import { getOriginalCwd } from '../bootstrap/state.js';
import { useExitOnCtrlCDWithKeybindings } from '../hooks/useExitOnCtrlCDWithKeybindings.js';
import { useSearchInput } from '../hooks/useSearchInput.js';
import { useTerminalSize } from '../hooks/useTerminalSize.js';
import { applyColor } from '../ink/colorize.js';
import type { Color } from '../ink/styles.js';
import { Box, Text, useTerminalFocus, useTheme } from '../ink.js';
import { useKeybinding } from '../keybindings/useKeybinding.js';
import { logEvent } from '../services/analytics/index.js';
import type { LogOption, SerializedMessage } from '../types/logs.js';
import { formatLogMetadata, truncateToWidth } from '../utils/format.js';
import { getWorktreePathsAsync } from '../utils/getWorktreePaths.js';
import { getBranch } from '../utils/git.js';
import { getLogDisplayTitle } from '../utils/log.js';
import { getFirstMeaningfulUserMessageTextContent, getSessionIdFromLog as getSessionIdFromLogStorage, isCustomTitleEnabled, saveCustomTitle } from '../utils/sessionStorage.js';
import { getTheme } from '../utils/theme.js';
import { ConfigurableShortcutHint } from './ConfigurableShortcutHint.js';
import { Select } from './CustomSelect/select.js';
import { Byline } from './design-system/Byline.js';
import { Divider } from './design-system/Divider.js';
import { KeyboardShortcutHint } from './design-system/KeyboardShortcutHint.js';
import { SearchBox } from './SearchBox.js';
import { SessionPreview } from './SessionPreview.js';
import { Spinner } from './Spinner.js';
import TextInput from './TextInput.js';
import { type TreeNode, TreeSelect } from './ui/TreeSelect.js';

// TODO(lift-v112): Verify these imports match v112 bundle symbols:
// - useTerminalSize → Fd(s1())
// - useExitOnCtrlCDWithKeybindings → $3
// - useTerminalFocus → K2
// - useTheme → Zq (returns [themeName])
// - getTheme → DD (takes themeName, returns theme object with .warning)
// - applyColor → Ba
// - useSearchInput → bS (returns {query, setQuery, cursorOffset, handleKeyDown, handlePaste})
// - useKeybinding → G1
// - logEvent → d
// - getWorktreePathsAsync → xf6
// - getBranch → rj
// - getLogDisplayTitle → kA6
// - formatLogMetadata → wF6
// - getSessionIdFromLogStorage → xY (in v112 minified; was SA in v88)
// - getFirstMeaningfulUserMessageTextContent → U_8 (in v112 minified; was wq8 in v88)
// - isCustomTitleEnabled → K66 (in v112 minified; was Js in v88)
// - saveCustomTitle → AN (in v112 minified; was $s in v88)
// - Divider → zA (in v112 minified; was R$ in v88)
// - Text → T (in v112 minified; was k in v88)
// - Box → u (in v112 minified)
// - SearchBox → wg (in v112 minified; was Tp in v88)
// - Byline → z1 (in v112 minified; was I1 in v88)
// - KeyboardShortcutHint → A8 (in v112 minified; was t8 in v88)
// - ConfigurableShortcutHint → v1 (in v112 minified; was W1 in v88)
// - Spinner → Y5 (in v112 minified; was IK in v88)
// - SessionPreview → ucK (in v112 minified; was ohK in v88)
// - TreeSelect → BcK (in v112 minified; was YSK in v88)
// - Select → A1 (in v112 minified; was H1 in v88)
// - TextInput → l4 (in v112 minified; was r3 in v88)

type AgenticSearchState =
  | { status: 'idle' }
  | { status: 'searching' }
  | { status: 'results'; results: LogOption[]; query: string }
  | { status: 'error'; message: string };

export type LogSelectorProps = {
  logs: LogOption[];
  maxHeight?: number;
  forceWidth?: number;
  onCancel?: () => void;
  onSelect: (log: LogOption) => void;
  onLogsChanged?: () => void;
  onLoadMore?: (count: number) => void;
  initialSearchQuery?: string;
  isLoading?: boolean;
  reloadGeneration?: number;
  showAllProjects?: boolean;
  onToggleAllProjects?: () => void;
  onAgenticSearch?: (query: string, logs: LogOption[], signal?: AbortSignal) => Promise<LogOption[]>;
};

type LogTreeNode = TreeNode<{
  log: LogOption;
  indexInFiltered: number;
}>;

// Width of prefixes that TreeSelect will add
const PARENT_PREFIX_WIDTH = 2; // '▼ ' or '▶ '
const CHILD_PREFIX_WIDTH = 4; // '  ▸ '

// Deep search constants
const DEEP_SEARCH_MAX_MESSAGES = 2000;
const DEEP_SEARCH_CROP_SIZE = 1000;
const DEEP_SEARCH_MAX_TEXT_LENGTH = 50000; // Cap searchable text per session
const DATE_TIE_THRESHOLD_MS = 60 * 1000; // 1 minute - use relevance as tie-breaker within this window
const SNIPPET_CONTEXT_CHARS = 50; // Characters to show before/after match

type Snippet = {
  before: string;
  match: string;
  after: string;
};

function normalizeAndTruncateToWidth(text: string, maxWidth: number): string {
  const normalized = text.replace(/\s+/g, ' ').trim();
  return truncateToWidth(normalized, maxWidth);
}

function formatSnippet(
  { before, match, after }: Snippet,
  highlightColor: (text: string) => string,
): string {
  return chalk.dim(before) + highlightColor(match) + chalk.dim(after);
}

function extractSnippet(text: string, query: string, contextChars: number): Snippet | null {
  const matchIndex = text.toLowerCase().indexOf(query.toLowerCase());
  if (matchIndex === -1) return null;
  const matchEnd = matchIndex + query.length;
  const snippetStart = Math.max(0, matchIndex - contextChars);
  const snippetEnd = Math.min(text.length, matchEnd + contextChars);
  const beforeRaw = text.slice(snippetStart, matchIndex);
  const matchText = text.slice(matchIndex, matchEnd);
  const afterRaw = text.slice(matchEnd, snippetEnd);
  return {
    before: (snippetStart > 0 ? '…' : '') + beforeRaw.replace(/\s+/g, ' ').trimStart(),
    match: matchText.trim(),
    after: afterRaw.replace(/\s+/g, ' ').trimEnd() + (snippetEnd < text.length ? '…' : ''),
  };
}

function buildLogLabel(
  log: LogOption,
  maxLabelWidth: number,
  options?: {
    isGroupHeader?: boolean;
    isChild?: boolean;
    forkCount?: number;
  },
): string {
  const { isGroupHeader = false, isChild = false, forkCount = 0 } = options || {};
  const prefixWidth =
    isGroupHeader && forkCount > 0 ? PARENT_PREFIX_WIDTH : isChild ? CHILD_PREFIX_WIDTH : 0;
  const sessionCountSuffix =
    isGroupHeader && forkCount > 0
      ? ` (+${forkCount} other ${forkCount === 1 ? 'session' : 'sessions'})`
      : '';
  const sidechainSuffix = log.isSidechain ? ' (sidechain)' : '';
  const maxSummaryWidth =
    maxLabelWidth - prefixWidth - sidechainSuffix.length - sessionCountSuffix.length;
  const truncatedSummary = normalizeAndTruncateToWidth(getLogDisplayTitle(log), maxSummaryWidth);
  return `${truncatedSummary}${sidechainSuffix}${sessionCountSuffix}`;
}

function buildLogMetadata(
  log: LogOption,
  options?: {
    isChild?: boolean;
    showProjectPath?: boolean;
  },
): string {
  const { isChild = false, showProjectPath = false } = options || {};
  const childPadding = isChild ? '    ' : ''; // 4 spaces to match '  ▸ '
  const baseMetadata = formatLogMetadata(log);
  const projectSuffix = showProjectPath && log.projectPath ? ` · ${log.projectPath}` : '';
  return childPadding + baseMetadata + projectSuffix;
}

export function LogSelector({
  logs,
  maxHeight: maxHeightProp,
  forceWidth,
  onCancel,
  onSelect,
  onLogsChanged,
  onLoadMore,
  initialSearchQuery,
  isLoading = false,
  reloadGeneration = 0,
  showAllProjects: showAllProjectsProp,
  onToggleAllProjects,
  onAgenticSearch,
}: LogSelectorProps) {
  const terminalSize = useTerminalSize();
  const columns = forceWidth === undefined ? terminalSize.columns : forceWidth;
  const exitState = useExitOnCtrlCDWithKeybindings(onCancel);
  const isTerminalFocused = useTerminalFocus();
  const isResumeWithRenameEnabled = React.useMemo(() => isCustomTitleEnabled(), []);
  const [themeName] = useTheme();
  const theme = React.useMemo(() => getTheme(themeName), [themeName]);
  const highlightColor = React.useMemo(
    () => (text: string) => applyColor(text, theme.warning as Color),
    [theme.warning],
  );
  const [currentBranch, setCurrentBranch] = React.useState<string | null>(null);
  // v112: branch filter is ON by default (was OFF in v88)
  const [branchFilterEnabled, setBranchFilterEnabled] = React.useState(true);
  const [showAllWorktrees, setShowAllWorktrees] = React.useState(false);
  const [hasMultipleWorktrees, setHasMultipleWorktrees] = React.useState(false);
  const currentCwd = React.useMemo(() => getOriginalCwd(), []);
  const [renameValue, setRenameValue] = React.useState('');
  const [renameCursorOffset, setRenameCursorOffset] = React.useState(0);
  const [expandedGroupSessionIds, setExpandedGroupSessionIds] = React.useState<Set<string>>(
    new Set(),
  );
  const [focusedNode, setFocusedNode] = React.useState<LogTreeNode | null>(null);
  const [focusedIndex, setFocusedIndex] = React.useState(1);
  // v112: initial view mode is "search" if initialSearchQuery is provided, else "list"
  const [viewMode, setViewMode] = React.useState(initialSearchQuery ? 'search' : 'list');
  const [previewLog, setPreviewLog] = React.useState<LogOption | null>(null);
  const prevFocusedIdRef = React.useRef<string | null>(null);
  const [agenticSearchState, setAgenticSearchState] = React.useState<AgenticSearchState>({
    status: 'idle',
  });
  const [isAgenticSearchOptionFocused, setIsAgenticSearchOptionFocused] = React.useState(false);
  const agenticSearchAbortRef = React.useRef<AbortController | null>(null);

  const {
    query: searchQuery,
    setQuery: setSearchQuery,
    cursorOffset: searchCursorOffset,
    handleKeyDown: handleSearchKeyDown,
    handlePaste: handleSearchPaste,
  } = useSearchInput({
    isActive: viewMode === 'search' && agenticSearchState.status !== 'searching',
    onExit: React.useCallback(() => {
      setViewMode('list');
      logEvent('tengu_session_search_toggled', { enabled: false });
    }, []),
    onExitUp: React.useCallback(() => {
      setViewMode('list');
      logEvent('tengu_session_search_toggled', { enabled: false });
    }, []),
    passthroughCtrlKeys: ['n'],
    initialQuery: initialSearchQuery || '',
  });

  const deferredSearchQuery = React.useDeferredValue(searchQuery);
  const [debouncedDeepSearchQuery, setDebouncedDeepSearchQuery] = React.useState('');

  React.useEffect(() => {
    if (!deferredSearchQuery) {
      setDebouncedDeepSearchQuery('');
      return;
    }
    const timeoutId = setTimeout(setDebouncedDeepSearchQuery, 300, deferredSearchQuery);
    return () => clearTimeout(timeoutId);
  }, [deferredSearchQuery]);

  const [deepSearchResults, setDeepSearchResults] = React.useState<{
    results: Array<{ log: LogOption; score: number | undefined; searchableText: string }>;
    query: string;
  } | null>(null);
  const [isDeepSearching, setIsDeepSearching] = React.useState(false);

  // v112: reworked worktree detection with async getWorktreePathsAsync and analytics
  const [worktreePaths, setWorktreePaths] = React.useState<string[]>([]);
  const [currentWorktree, setCurrentWorktree] = React.useState<string | null>(null);
  const [worktreesReady, setWorktreesReady] = React.useState(false);

  React.useEffect(() => {
    getBranch().then(branch => setCurrentBranch(branch));
    const startTime = Date.now();
    getWorktreePathsAsync(currentCwd)
      .then(paths => {
        logEvent('tengu_worktree_detection', {
          duration_ms: Date.now() - startTime,
          worktree_count: paths.length,
          success: true,
        });
        setHasMultipleWorktrees(paths.length > 1);
        setWorktreePaths(paths);
        setCurrentWorktree(paths[0] ?? null);
        // Find the most specific worktree matching currentCwd
        const matching = paths.filter(
          p => currentCwd === p || currentCwd.startsWith(p + '/'),
        );
        matching.sort((a, b) => b.length - a.length);
        setCurrentWorktree(matching[0] ?? null);
        setWorktreesReady(true);
      })
      .catch(() => {
        logEvent('tengu_worktree_detection', {
          duration_ms: Date.now() - startTime,
          worktree_count: 0,
          success: false,
        });
        setWorktreesReady(true);
      });
  }, [currentCwd]);

  // v112: removed tag tabs (getUniqueTags, TagTabs, etc.)

  // v112: searchable text by log is computed with useMemo
  const searchableTextByLog = React.useMemo(
    () => new Map(logs.map(log => [log, buildSearchableText(log)])),
    [logs],
  );

  // v112: fuseIndex is null (deep search removed)
  const fuseIndex = React.useMemo(() => {
    return null;
  }, [logs, searchableTextByLog]);

  // v112: reworked filtering logic with worktree support
  const baseFilteredLogs = React.useMemo(() => {
    let filtered = logs;
    if (isResumeWithRenameEnabled) {
      filtered = filtered.filter(log => {
        const currentSessionId = getSessionIdFromLogStorage();
        const logSessionId = getSessionIdFromLogStorage(log);
        if (currentSessionId && logSessionId === currentSessionId) return true;
        if (log.customTitle) return true;
        if (getFirstMeaningfulUserMessageTextContent(log.messages)) return true;
        if (log.firstPrompt || log.customTitle) return true;
        return false;
      });
    }
    if (!branchFilterEnabled && currentBranch) {
      filtered = filtered.filter(log => log.gitBranch === currentBranch);
    }
    if (hasMultipleWorktrees && !showAllWorktrees && !showAllProjects) {
      const targetWorktree = currentWorktree ?? currentCwd;
      filtered = filtered.filter(log => {
        const projectPath = log.projectPath;
        if (projectPath === undefined) return false;
        let bestMatch: string | null = null;
        for (const wt of worktreePaths) {
          if (projectPath === wt || projectPath.startsWith(wt + '/')) {
            if (bestMatch === null || wt.length > bestMatch.length) {
              bestMatch = wt;
            }
          }
        }
        if (bestMatch === null) return projectPath === targetWorktree;
        return bestMatch === targetWorktree;
      });
    }
    return filtered;
  }, [
    logs,
    isResumeWithRenameEnabled,
    branchFilterEnabled,
    currentBranch,
    hasMultipleWorktrees,
    showAllWorktrees,
    showAllProjects,
    currentWorktree,
    currentCwd,
    worktreePaths,
  ]);

  const titleFilteredLogs = React.useMemo(() => {
    if (!searchQuery) return baseFilteredLogs;
    const query = searchQuery.toLowerCase();
    return baseFilteredLogs.filter(log => {
      const displayedTitle = getLogDisplayTitle(log).toLowerCase();
      const branch = (log.gitBranch || '').toLowerCase();
      const tag = (log.tag || '').toLowerCase();
      const prInfo = log.prNumber
        ? `pr #${log.prNumber} ${log.prRepository || ''}`.toLowerCase()
        : '';
      return (
        displayedTitle.includes(query) ||
        branch.includes(query) ||
        tag.includes(query) ||
        prInfo.includes(query)
      );
    });
  }, [baseFilteredLogs, searchQuery]);

  // v112: deep search effects are no-ops (deep search removed)
  React.useEffect(() => {
    // TODO(lift-v112): Deep search was removed in v112; this effect is a no-op
  }, [deferredSearchQuery, debouncedDeepSearchQuery, false]);

  React.useEffect(() => {
    setDeepSearchResults(null);
    setIsDeepSearching(false);
  }, [debouncedDeepSearchQuery]);

  const { filteredLogs, snippets } = React.useMemo(() => {
    const snippetMap = new Map<LogOption, Snippet>();
    let filtered = titleFilteredLogs;
    if (deepSearchResults && debouncedDeepSearchQuery && deepSearchResults.query === debouncedDeepSearchQuery) {
      for (const result of deepSearchResults.results) {
        if (result.searchableText) {
          const snippet = extractSnippet(
            result.searchableText,
            debouncedDeepSearchQuery,
            SNIPPET_CONTEXT_CHARS,
          );
          if (snippet) snippetMap.set(result.log, snippet);
        }
      }
      const titleMatchIds = new Set(filtered.map(log => log.messages[0]?.uuid));
      const baseIds = new Set(baseFilteredLogs);
      const transcriptOnlyMatches = deepSearchResults.results
        .map(r => r.log)
        .filter(log => !titleMatchIds.has(log.messages[0]?.uuid) && baseIds.has(log));
      filtered = [...filtered, ...transcriptOnlyMatches];
    }
    return { filteredLogs: filtered, snippets: snippetMap };
  }, [titleFilteredLogs, deepSearchResults, debouncedDeepSearchQuery, baseFilteredLogs]);

  // v112: agentic search results are filtered against baseFilteredLogs
  const displayedLogs = React.useMemo(() => {
    if (agenticSearchState.status === 'results' && agenticSearchState.results.length > 0) {
      const baseSet = new Set(baseFilteredLogs);
      return agenticSearchState.results.filter(log => baseSet.has(log));
    }
    return filteredLogs;
  }, [agenticSearchState, filteredLogs, baseFilteredLogs]);

  const maxLabelWidth = Math.max(30, columns - 4);

  const treeNodes = React.useMemo(() => {
    if (!isResumeWithRenameEnabled) return [];
    const sessionGroups = groupLogsBySessionId(displayedLogs);
    return Array.from(sessionGroups.entries()).map(([sessionId, groupLogs]) => {
      const latestLog = groupLogs[0];
      const indexInFiltered = displayedLogs.indexOf(latestLog);
      const snippet = snippets.get(latestLog);
      const snippetStr = snippet ? formatSnippet(snippet, highlightColor) : null;
      if (groupLogs.length === 1) {
        const metadata = buildLogMetadata(latestLog, { showProjectPath: showAllProjects });
        return {
          id: `log:${sessionId}:0`,
          value: { log: latestLog, indexInFiltered },
          label: buildLogLabel(latestLog, maxLabelWidth),
          description: snippetStr ? `${metadata}\n  ${snippetStr}` : metadata,
          dimDescription: true,
        };
      }
      const forkCount = groupLogs.length - 1;
      const children = groupLogs.slice(1).map((log, index) => {
        const childIndexInFiltered = displayedLogs.indexOf(log);
        const childSnippet = snippets.get(log);
        const childSnippetStr = childSnippet ? formatSnippet(childSnippet, highlightColor) : null;
        const childMetadata = buildLogMetadata(log, { isChild: true, showProjectPath: showAllProjects });
        return {
          id: `log:${sessionId}:${index + 1}`,
          value: { log, indexInFiltered: childIndexInFiltered },
          label: buildLogLabel(log, maxLabelWidth, { isChild: true }),
          description: childSnippetStr ? `${childMetadata}\n      ${childSnippetStr}` : childMetadata,
          dimDescription: true,
        };
      });
      const parentMetadata = buildLogMetadata(latestLog, { showProjectPath: showAllProjects });
      return {
        id: `group:${sessionId}`,
        value: { log: latestLog, indexInFiltered },
        label: buildLogLabel(latestLog, maxLabelWidth, { isGroupHeader: true, forkCount }),
        description: snippetStr ? `${parentMetadata}\n  ${snippetStr}` : parentMetadata,
        dimDescription: true,
        children,
      };
    });
  }, [displayedLogs, highlightColor, maxLabelWidth, showAllProjects, snippets, isResumeWithRenameEnabled]);

  const flatOptions = React.useMemo(() => {
    if (isResumeWithRenameEnabled) return [];
    return displayedLogs.map((log, index) => {
      const rawSummary = getLogDisplayTitle(log);
      const summaryWithSidechain = rawSummary + (log.isSidechain ? ' (sidechain)' : '');
      const summary = normalizeAndTruncateToWidth(summaryWithSidechain, maxLabelWidth);
      const baseDescription = formatLogMetadata(log);
      const projectSuffix = showAllProjects && log.projectPath ? ` · ${log.projectPath}` : '';
      const snippet = snippets.get(log);
      const snippetStr = snippet ? formatSnippet(snippet, highlightColor) : null;
      return {
        label: summary,
        description: snippetStr
          ? `${baseDescription}${projectSuffix}\n  ${snippetStr}`
          : baseDescription + projectSuffix,
        dimDescription: true,
        value: index.toString(),
      };
    });
  }, [displayedLogs, highlightColor, maxLabelWidth, showAllProjects, snippets, isResumeWithRenameEnabled]);

  const focusedLog = focusedNode?.value.log ?? null;

  const getExpandCollapseHint = React.useCallback(() => {
    if (!isResumeWithRenameEnabled || !focusedLog) return '';
    const sessionId = getSessionIdFromLogStorage(focusedLog);
    if (!sessionId) return '';
    const sessionLogs = displayedLogs.filter(
      log => getSessionIdFromLogStorage(log) === sessionId,
    );
    if (!(sessionLogs.length > 1)) return '';
    const isExpanded = expandedGroupSessionIds.has(sessionId);
    const isChildNode = sessionLogs.indexOf(focusedLog) > 0;
    if (isChildNode || isExpanded) return '\u2190 to collapse';
    return '\u2192 to expand';
  }, [displayedLogs, expandedGroupSessionIds, focusedLog, isResumeWithRenameEnabled]);

  const handleRenameSubmit = React.useCallback(async () => {
    const sessionId = focusedLog ? getSessionIdFromLogStorage(focusedLog) : undefined;
    if (!focusedLog || !sessionId) {
      setViewMode('list');
      setRenameValue('');
      return;
    }
    if (renameValue.trim()) {
      await saveCustomTitle(sessionId, renameValue.trim(), focusedLog.fullPath);
      if (isResumeWithRenameEnabled && onLogsChanged) {
        onLogsChanged();
      }
    }
    setViewMode('list');
    setRenameValue('');
  }, [focusedLog, renameValue, onLogsChanged, isResumeWithRenameEnabled]);

  const exitSearchMode = React.useCallback(() => {
    setViewMode('list');
    setSearchQuery('');
    logEvent('tengu_session_search_toggled', { enabled: false });
  }, [setSearchQuery]);

  const enterSearchMode = React.useCallback(() => {
    setViewMode('search');
    logEvent('tengu_session_search_toggled', { enabled: true });
  }, []);

  const handleAgenticSearch = React.useCallback(async () => {
    if (!searchQuery.trim() || !onAgenticSearch) {
      return;
    }
    agenticSearchAbortRef.current?.abort();
    const abortController = new AbortController();
    agenticSearchAbortRef.current = abortController;
    setAgenticSearchState({ status: 'searching' });
    logEvent('tengu_agentic_search_started', { query_length: searchQuery.length });
    try {
      const results = await onAgenticSearch(searchQuery, logs, abortController.signal);
      if (abortController.signal.aborted) return;
      setAgenticSearchState({ status: 'results', results, query: searchQuery });
      logEvent('tengu_agentic_search_completed', {
        query_length: searchQuery.length,
        results_count: results.length,
      });
    } catch (error) {
      if (abortController.signal.aborted) return;
      setAgenticSearchState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Search failed',
      });
      logEvent('tengu_agentic_search_error', { query_length: searchQuery.length });
    }
  }, [searchQuery, onAgenticSearch, logs]);

  // Reset agentic search when query changes
  React.useEffect(() => {
    if (
      agenticSearchState.status !== 'idle' &&
      agenticSearchState.status !== 'searching'
    ) {
      if (
        (agenticSearchState.status === 'results' && agenticSearchState.query !== searchQuery) ||
        agenticSearchState.status === 'error'
      ) {
        setAgenticSearchState({ status: 'idle' });
      }
    }
  }, [searchQuery, agenticSearchState]);

  // Cleanup abort controller on unmount
  React.useEffect(() => {
    return () => {
      agenticSearchAbortRef.current?.abort();
    };
  }, []);

  // v112: reloadGeneration effect to reset state
  React.useEffect(() => {
    if (reloadGeneration === 0) return;
    agenticSearchAbortRef.current?.abort();
    setAgenticSearchState(prev => (prev.status === 'idle' ? prev : { status: 'idle' }));
    setIsAgenticSearchOptionFocused(false);
    setDeepSearchResults(null);
  }, [reloadGeneration]);

  // Auto-focus first result after agentic search completes
  const prevAgenticStatusRef = React.useRef(agenticSearchState.status);
  React.useEffect(() => {
    const prevStatus = prevAgenticStatusRef.current;
    prevAgenticStatusRef.current = agenticSearchState.status;
    if (prevStatus === 'searching' && agenticSearchState.status === 'results') {
      if (isResumeWithRenameEnabled && treeNodes.length > 0) {
        setFocusedNode(treeNodes[0]);
      } else if (!isResumeWithRenameEnabled && displayedLogs.length > 0) {
        const firstLog = displayedLogs[0];
        setFocusedNode({
          id: '0',
          value: { log: firstLog, indexInFiltered: 0 },
          label: '',
        });
      }
    }
  }, [agenticSearchState.status, isResumeWithRenameEnabled, treeNodes, displayedLogs]);

  const handleFlatOptionsSelectFocus = React.useCallback(
    (value: string) => {
      const index = parseInt(value, 10);
      const log = displayedLogs[index];
      if (!log || prevFocusedIdRef.current === index.toString()) return;
      prevFocusedIdRef.current = index.toString();
      setFocusedNode({
        id: index.toString(),
        value: { log, indexInFiltered: index },
        label: '',
      });
      setFocusedIndex(index + 1);
    },
    [displayedLogs],
  );

  const handleTreeSelectFocus = React.useCallback(
    (node: LogTreeNode) => {
      setFocusedNode(node);
      const index = displayedLogs.findIndex(
        log => getSessionIdFromLogStorage(log) === getSessionIdFromLogStorage(node.value.log),
      );
      if (index >= 0) {
        setFocusedIndex(index + 1);
      }
    },
    [displayedLogs],
  );

  const handleCancelAgenticSearch = React.useCallback(() => {
    agenticSearchAbortRef.current?.abort();
    setAgenticSearchState({ status: 'idle' });
    logEvent('tengu_agentic_search_cancelled', {});
  }, []);

  useKeybinding(
    'confirm:no',
    handleCancelAgenticSearch,
    { context: 'Confirmation', isActive: viewMode !== 'preview' && agenticSearchState.status === 'searching' },
  );

  useKeybinding(
    'confirm:no',
    React.useCallback(() => {
      setViewMode('list');
      setRenameValue('');
    }, []),
    { context: 'Settings', isActive: viewMode === 'rename' && agenticSearchState.status !== 'searching' },
  );

  const handleCancelWithClear = React.useCallback(() => {
    setSearchQuery('');
    setIsAgenticSearchOptionFocused(false);
    onCancel?.();
  }, [setSearchQuery, onCancel]);

  useKeybinding(
    'confirm:no',
    handleCancelWithClear,
    {
      context: 'Confirmation',
      isActive:
        viewMode !== 'preview' &&
        viewMode !== 'rename' &&
        viewMode !== 'search' &&
        isAgenticSearchOptionFocused &&
        agenticSearchState.status !== 'searching',
    },
  );

  // v112: reworked key handler with paste support and new shortcuts
  const handleKeyDown = React.useCallback(
    (input: string, key: { ctrl: boolean; meta: boolean; return: boolean; downArrow: boolean; upArrow: boolean; tab: boolean; shift: boolean; key: string }) => {
      if (viewMode === 'preview') return;
      if (agenticSearchState.status === 'searching') return;

      if (viewMode === 'rename') {
        // rename mode handled by TextInput
      } else if (viewMode === 'search') {
        handleSearchKeyDown(key);
        if (key.ctrl && key.key === 'n') {
          // prevent default handled by search input
          exitSearchMode();
        } else if (key.return || key.downArrow) {
          // v112: no agentic search option in search mode
        }
      } else {
        if (isAgenticSearchOptionFocused) {
          if (key.return) {
            handleAgenticSearch();
            setIsAgenticSearchOptionFocused(false);
            return;
          } else if (key.downArrow) {
            setIsAgenticSearchOptionFocused(false);
            return;
          } else if (key.upArrow) {
            setViewMode('search');
            setIsAgenticSearchOptionFocused(false);
            return;
          }
        }

        // v112: removed tag tab navigation (no tags in v112)

        if (displayedLogs.length === 0 && !isAgenticSearchOptionFocused && (key.upArrow || key.downArrow || key.return)) {
          // v112: navigate to search when no logs
          setViewMode('search');
          return;
        }

        const keyIsNotCtrlOrMeta = !key.ctrl && !key.meta;
        const lowerInput = input.toLowerCase();

        if (key.ctrl && key.key === 'a' && onToggleAllProjects) {
          onToggleAllProjects();
          logEvent('tengu_session_all_projects_toggled', { enabled: !showAllProjects });
        } else if (key.ctrl && key.key === 'b') {
          const newEnabled = !branchFilterEnabled;
          setBranchFilterEnabled(newEnabled);
          logEvent('tengu_session_branch_filter_toggled', { enabled: !newEnabled });
        } else if (key.ctrl && key.key === 'w' && hasMultipleWorktrees) {
          const newValue = !showAllWorktrees;
          setShowAllWorktrees(newValue);
          logEvent('tengu_session_worktree_filter_toggled', { enabled: !newValue });
        } else if (lowerInput === '/' && keyIsNotCtrlOrMeta) {
          setViewMode('search');
          setIsAgenticSearchOptionFocused(false);
          logEvent('tengu_session_search_toggled', { enabled: true });
        } else if (key.ctrl && key.key === 'r' && focusedLog) {
          setViewMode('rename');
          setRenameValue('');
          logEvent('tengu_session_rename_started', {});
        } else if ((key.key === ' ' && keyIsNotCtrlOrMeta || key.ctrl && key.key === 'v') && focusedLog && !isAgenticSearchOptionFocused) {
          // v112: Space (or Ctrl+V) triggers preview
          setPreviewLog(focusedLog);
          setViewMode('preview');
          logEvent('tengu_session_preview_opened', { messageCount: focusedLog.messageCount });
        } else if (keyIsNotCtrlOrMeta && input.length === 1 && input !== ' ') {
          setViewMode('search');
          setIsAgenticSearchOptionFocused(false);
          setSearchQuery(input);
          logEvent('tengu_session_search_toggled', { enabled: true });
        }
      }
    },
    [
      viewMode,
      agenticSearchState.status,
      isAgenticSearchOptionFocused,
      handleAgenticSearch,
      handleSearchKeyDown,
      exitSearchMode,
      displayedLogs,
      onToggleAllProjects,
      showAllProjects,
      branchFilterEnabled,
      hasMultipleWorktrees,
      showAllWorktrees,
      focusedLog,
      setSearchQuery,
    ],
  );

  // v112: paste handler
  const handlePaste = React.useCallback(
    (event: { text: string; preventDefault: () => void }) => {
      if (viewMode === 'search') {
        handleSearchPaste(event);
        return;
      }
      const firstLine = (event.text.split(/\r\n|\r|\n/, 2)[0] ?? '').trim();
      if (
        viewMode === 'preview' ||
        viewMode === 'rename' ||
        agenticSearchState.status === 'searching' ||
        isAgenticSearchOptionFocused ||
        !focusedLog ||
        !firstLine
      ) {
        return;
      }
      event.preventDefault();
      setViewMode('search');
      setSearchQuery(firstLine);
      logEvent('tengu_session_search_toggled', { enabled: true });
    },
    [viewMode, agenticSearchState.status, isAgenticSearchOptionFocused, focusedLog, handleSearchPaste, setSearchQuery],
  );

  // v112: reworked filter indicators with worktree path display
  const filterIndicators: string[] = [];
  const showProjectPathIndicator = !!onToggleAllProjects && !showAllProjects && worktreesReady;
  const effectiveWorktree = currentWorktree ?? currentCwd;
  if (showProjectPathIndicator) {
    filterIndicators.push(formatWorktreePath(effectiveWorktree));
  }
  if (!branchFilterEnabled && currentBranch) {
    filterIndicators.push(currentBranch);
  }
  if (hasMultipleWorktrees && !showAllWorktrees && !showAllProjects) {
    const wt = currentWorktree ?? currentCwd;
    if (!(showProjectPathIndicator && effectiveWorktree === wt)) {
      filterIndicators.push(formatWorktreePath(wt));
    }
  }

  const showNoMatchingWorktreeIndicator = !!onToggleAllProjects && !showAllProjects && !worktreesReady;
  const showFilterLine = (filterIndicators.length > 0 || showNoMatchingWorktreeIndicator) && viewMode !== 'search';

  // v112: header lines calculation (no tag tabs)
  const headerLines = 8 + (showFilterLine ? 1 : 0);
  const visibleCount = Math.max(1, Math.floor((maxHeightProp ?? Infinity - headerLines - 2) / 3));

  React.useEffect(() => {
    if (!onLoadMore) return;
    const buffer = visibleCount * 2;
    if (focusedIndex + buffer >= displayedLogs.length) {
      onLoadMore(visibleCount * 3);
    }
  }, [focusedIndex, visibleCount, displayedLogs.length, onLoadMore]);

  if (logs.length === 0) {
    return null;
  }

  if (viewMode === 'preview' && previewLog && isResumeWithRenameEnabled) {
    return (
      <SessionPreview
        log={previewLog}
        onExit={() => {
          setViewMode('list');
          setPreviewLog(null);
        }}
        onSelect={onSelect}
      />
    );
  }

  const containerHeight = (maxHeightProp ?? Infinity) - 1;

  return (
    <Box flexDirection="column" height={containerHeight} onKeyDown={handleKeyDown} onPaste={handlePaste}>
      <Box flexShrink={0}>
        <Divider color="suggestion" width={columns} />
      </Box>
      <Box flexShrink={0}>
        <Text> </Text>
      </Box>
      <Box flexShrink={0}>
        <Text bold={true} color="suggestion">
          Resume Session
          {viewMode === 'list' && displayedLogs.length > visibleCount && (
            <Text dimColor={true}>
              {' '}({focusedIndex} of {displayedLogs.length})
            </Text>
          )}
          {isLoading && <Text dimColor={true}>{' '}· Refreshing…</Text>}
        </Text>
      </Box>
      <SearchBox
        query={searchQuery}
        isFocused={viewMode === 'search'}
        isTerminalFocused={isTerminalFocused}
        cursorOffset={searchCursorOffset}
      />
      {showFilterLine &&
        (filterIndicators.length > 0 ? (
          <Box flexShrink={0} paddingLeft={2}>
            <Text dimColor={true}>
              <Byline>{filterIndicators}</Byline>
            </Text>
          </Box>
        ) : (
          <Box flexShrink={0} height={1} />
        ))}
      <Box flexShrink={0}>
        <Text> </Text>
      </Box>
      {agenticSearchState.status === 'searching' && (
        <Box paddingLeft={1} flexShrink={0}>
          <Spinner />
          <Text> Searching…</Text>
        </Box>
      )}
      {agenticSearchState.status === 'results' && agenticSearchState.results.length > 0 && (
        <Box paddingLeft={1} marginBottom={1} flexShrink={0}>
          <Text dimColor={true} italic={true}>Claude found these results:</Text>
        </Box>
      )}
      {agenticSearchState.status === 'results' && agenticSearchState.results.length === 0 && filteredLogs.length === 0 && (
        <Box paddingLeft={1} marginBottom={1} flexShrink={0}>
          <Text dimColor={true} italic={true}>No matching sessions found.</Text>
        </Box>
      )}
      {agenticSearchState.status === 'error' && filteredLogs.length === 0 && (
        <Box paddingLeft={1} marginBottom={1} flexShrink={0}>
          <Text dimColor={true} italic={true}>No matching sessions found.</Text>
        </Box>
      )}
      {viewMode === 'search' && Boolean(searchQuery.trim()) && filteredLogs.length === 0 && !isDeepSearching && !isLoading && agenticSearchState.status === 'idle' && (
        <Box paddingLeft={1} marginBottom={1} flexShrink={0}>
          <Text dimColor={true} italic={true}>
            No sessions match "{searchQuery}".
          </Text>
        </Box>
      )}
      {/* v112: agentic search option removed from UI */}
      {agenticSearchState.status === 'searching' ? null : viewMode === 'rename' && focusedLog ? (
        <Box paddingLeft={2} flexDirection="column">
          <Text bold={true}>Rename session:</Text>
          <Box paddingTop={1}>
            <TextInput
              value={renameValue}
              onChange={setRenameValue}
              onSubmit={handleRenameSubmit}
              placeholder={getLogDisplayTitle(focusedLog, 'Enter new session name')}
              columns={columns}
              cursorOffset={renameCursorOffset}
              onChangeCursorOffset={setRenameCursorOffset}
              showCursor={true}
            />
          </Box>
        </Box>
      ) : isResumeWithRenameEnabled ? (
        <TreeSelect
          nodes={treeNodes}
          onSelect={node => {
            onSelect(node.value.log);
          }}
          onFocus={handleTreeSelectFocus}
          onCancel={onCancel}
          focusNodeId={focusedNode?.id}
          visibleOptionCount={visibleCount}
          layout="expanded"
          isDisabled={viewMode === 'search' || isAgenticSearchOptionFocused}
          hideIndexes={false}
          isNodeExpanded={nodeId => {
            if (viewMode === 'search' || !branchFilterEnabled) return true;
            const sessionId =
              typeof nodeId === 'string' && nodeId.startsWith('group:')
                ? nodeId.substring(6)
                : null;
            return sessionId ? expandedGroupSessionIds.has(sessionId) : false;
          }}
          onExpand={nodeId => {
            const sessionId =
              typeof nodeId === 'string' && nodeId.startsWith('group:')
                ? nodeId.substring(6)
                : null;
            if (sessionId) {
              setExpandedGroupSessionIds(prev => new Set(prev).add(sessionId));
              logEvent('tengu_session_group_expanded', {});
            }
          }}
          onCollapse={nodeId => {
            const sessionId =
              typeof nodeId === 'string' && nodeId.startsWith('group:')
                ? nodeId.substring(6)
                : null;
            if (sessionId) {
              setExpandedGroupSessionIds(prev => {
                const newSet = new Set(prev);
                newSet.delete(sessionId);
                return newSet;
              });
            }
          }}
          onUpFromFirstItem={enterSearchMode}
        />
      ) : (
        <Select
          options={flatOptions}
          onChange={value => {
            const itemIndex = parseInt(value, 10);
            const log = displayedLogs[itemIndex];
            if (log) onSelect(log);
          }}
          visibleOptionCount={visibleCount}
          onCancel={onCancel}
          onFocus={handleFlatOptionsSelectFocus}
          defaultFocusValue={focusedNode?.id.toString()}
          layout="expanded"
          isDisabled={viewMode === 'search' || isAgenticSearchOptionFocused}
          onUpFromFirstItem={enterSearchMode}
        />
      )}
      <Box paddingLeft={2}>
        {exitState.pending ? (
          <Text dimColor={true}>
            Press {exitState.keyName} again to exit
          </Text>
        ) : viewMode === 'rename' ? (
          <Text dimColor={true}>
            <Byline>
              <KeyboardShortcutHint shortcut="Enter" action="save" />
              <ConfigurableShortcutHint
                action="confirm:no"
                context="Confirmation"
                fallback="Esc"
                description="cancel"
              />
            </Byline>
          </Text>
        ) : agenticSearchState.status === 'searching' ? (
          <Text dimColor={true}>
            <Byline>
              <Text>Searching with Claude…</Text>
              <ConfigurableShortcutHint
                action="confirm:no"
                context="Confirmation"
                fallback="Esc"
                description="cancel"
              />
            </Byline>
          </Text>
        ) : isAgenticSearchOptionFocused ? (
          <Text dimColor={true}>
            <Byline>
              <KeyboardShortcutHint shortcut="Enter" action="search" />
              <KeyboardShortcutHint shortcut={'\u2193'} action="skip" />
              <ConfigurableShortcutHint
                action="confirm:no"
                context="Confirmation"
                fallback="Esc"
                description="cancel"
              />
            </Byline>
          </Text>
        ) : viewMode === 'search' ? (
          <Text dimColor={true}>
            <Byline>
              <Text>Type to Search</Text>
              <KeyboardShortcutHint shortcut="Enter" action="select" />
              <ConfigurableShortcutHint
                action="confirm:no"
                context="Confirmation"
                fallback="Esc"
                description="clear"
              />
            </Byline>
          </Text>
        ) : (
          <Text dimColor={true}>
            <Byline>
              {onToggleAllProjects && (
                <KeyboardShortcutHint
                  shortcut="Ctrl+A"
                  action={showAllProjects ? 'only show current repo' : 'show all projects'}
                />
              )}
              {currentBranch && (
                <KeyboardShortcutHint
                  shortcut="Ctrl+B"
                  action={branchFilterEnabled ? 'only show current branch' : 'show all branches'}
                />
              )}
              {hasMultipleWorktrees && (
                <KeyboardShortcutHint
                  shortcut="Ctrl+W"
                  action={showAllWorktrees ? 'only show current worktree' : 'show all worktrees'}
                />
              )}
              {/* v112: Space triggers preview (was Ctrl+V in v88) */}
              <KeyboardShortcutHint shortcut="space" action="preview" />
              <KeyboardShortcutHint shortcut="Ctrl+R" action="rename" />
              <Text>Type to search</Text>
              <ConfigurableShortcutHint
                action="confirm:no"
                context="Confirmation"
                fallback="Esc"
                description="cancel"
              />
              {getExpandCollapseHint() && <Text>{getExpandCollapseHint()}</Text>}
            </Byline>
          </Text>
        )}
      </Box>
    </Box>
  );
}

// v112: new helper - get session ID from log via slug
function getSessionIdFromLog(log: LogOption): string | undefined {
  return log.messages.find(msg => msg.slug)?.slug;
}

// v112: new helper - map agentic search results
function mapAgenticSearchResults(
  results: Array<{ item: { log: LogOption; searchableText: string }; score?: number }>,
): Array<{ log: LogOption; score: number | undefined; searchableText: string }> {
  return results.map(r => ({
    log: r.item.log,
    score: r.score,
    searchableText: r.item.searchableText,
  }));
}

// v112: new helper - sort logs by modified date, then created date
function sortLogsByDate(logs: LogOption[]): LogOption[] {
  return logs.sort((a, b) => {
    const modifiedDiff = b.modified.getTime() - a.modified.getTime();
    if (modifiedDiff !== 0) return modifiedDiff;
    return b.created.getTime() - a.created.getTime();
  });
}

function extractSearchableText(message: SerializedMessage): string {
  if (message.type !== 'user' && message.type !== 'assistant') {
    return '';
  }
  const content = 'message' in message ? message.message?.content : undefined;
  if (!content) return '';
  if (typeof content === 'string') {
    return content;
  }
  if (Array.isArray(content)) {
    return content
      .map(block => {
        if (typeof block === 'string') return block;
        if ('text' in block && typeof block.text === 'string') return block.text;
        return '';
      })
      .filter(Boolean)
      .join(' ');
  }
  return '';
}

function buildSearchableText(log: LogOption): string {
  const searchableMessages =
    log.messages.length <= DEEP_SEARCH_MAX_MESSAGES
      ? log.messages
      : [...log.messages.slice(0, DEEP_SEARCH_CROP_SIZE), ...log.messages.slice(-DEEP_SEARCH_CROP_SIZE)];
  const messageText = searchableMessages.map(extractSearchableText).filter(Boolean).join(' ');
  const metadata = [
    log.customTitle,
    log.summary,
    log.firstPrompt,
    log.gitBranch,
    log.tag,
    log.prNumber ? `PR #${log.prNumber}` : undefined,
    log.prRepository,
  ]
    .filter(Boolean)
    .join(' ');
  const fullText = `${metadata} ${messageText}`.trim();
  return fullText.length > DEEP_SEARCH_MAX_TEXT_LENGTH
    ? fullText.slice(0, DEEP_SEARCH_MAX_TEXT_LENGTH)
    : fullText;
}

function groupLogsBySessionId(filteredLogs: LogOption[]): Map<string, LogOption[]> {
  const groups = new Map<string, LogOption[]>();
  for (const log of filteredLogs) {
    const sessionId = getSessionIdFromLogStorage(log);
    if (sessionId) {
      const existing = groups.get(sessionId);
      if (existing) {
        existing.push(log);
      } else {
        groups.set(sessionId, [log]);
      }
    }
  }
  groups.forEach(logs =>
    logs.sort((a, b) => new Date(b.modified).getTime() - new Date(a.modified).getTime()),
  );
  return groups;
}

// v112: new helper - format worktree path for display
function formatWorktreePath(path: string | null): string {
  if (!path) return '';
  // TODO(lift-v112): verify this matches v112 FcK function behavior
  return path;
}
