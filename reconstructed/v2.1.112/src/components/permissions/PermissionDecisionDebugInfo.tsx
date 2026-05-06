import { feature } from 'bun:bundle';
import chalk from 'chalk';
import figures from 'figures';
import React, { useMemo } from 'react';
import { Ansi, Box, color, Text, useTheme } from '../../ink.js';
import { useAppState } from '../../state/AppState.js';
import type { PermissionMode } from '../../utils/permissions/PermissionMode.js';
import { permissionModeTitle } from '../../utils/permissions/PermissionMode.js';
import type { PermissionDecision, PermissionDecisionReason } from '../../utils/permissions/PermissionResult.js';
import { extractRules } from '../../utils/permissions/PermissionUpdate.js';
import type { PermissionUpdate } from '../../utils/permissions/PermissionUpdateSchema.js';
import { permissionRuleValueToString } from '../../utils/permissions/permissionRuleParser.js';
import { detectUnreachableRules } from '../../utils/permissions/shadowedRuleDetection.js';
import { SandboxManager } from '../../utils/sandbox/sandbox-adapter.js';
import { getSettingSourceDisplayNameLowercase } from '../../utils/settings/constants.js';

type PermissionDecisionInfoItemProps = {
  title?: string;
  decisionReason: PermissionDecisionReason;
};

function decisionReasonDisplayString(decisionReason: PermissionDecisionReason & {
  type: Exclude<PermissionDecisionReason['type'], 'subcommandResults'>;
}): string {
  if ((feature('BASH_CLASSIFIER') || feature('TRANSCRIPT_CLASSIFIER')) && decisionReason.type === 'classifier') {
    return `${chalk.bold(decisionReason.classifier)} classifier: ${decisionReason.reason}`;
  }
  switch (decisionReason.type) {
    case 'rule':
      return `${chalk.bold(permissionRuleValueToString(decisionReason.rule.ruleValue))} rule from ${getSettingSourceDisplayNameLowercase(decisionReason.rule.source)}`;
    case 'mode':
      return `${permissionModeTitle(decisionReason.mode)} mode`;
    case 'sandboxOverride':
      return 'Requires permission to bypass sandbox';
    case 'workingDir':
      return decisionReason.reason;
    case 'safetyCheck':
    case 'other':
      return decisionReason.reason;
    case 'permissionPromptTool':
      return `${chalk.bold(decisionReason.permissionPromptToolName)} permission prompt tool`;
    case 'hook':
      return decisionReason.reason ? `${chalk.bold(decisionReason.hookName)} hook: ${decisionReason.reason}` : `${chalk.bold(decisionReason.hookName)} hook`;
    case 'asyncAgent':
      return decisionReason.reason;
    default:
      return '';
  }
}

function PermissionDecisionInfoItem({ title, decisionReason }: PermissionDecisionInfoItemProps) {
  const [theme] = useTheme();

  const formatDecisionReason = useMemo(() => {
    switch (decisionReason.type) {
      case 'subcommandResults':
        return (
          <Box flexDirection="column">
            {Array.from(decisionReason.reasons.entries()).map(([subcommand, result]) => {
              const icon = result.behavior === 'allow'
                ? color('success', theme)(figures.tick)
                : color('error', theme)(figures.cross);
              return (
                <Box flexDirection="column" key={subcommand}>
                  <Text>{icon} {subcommand}</Text>
                  {result.decisionReason !== undefined && result.decisionReason.type !== 'subcommandResults' && (
                    <Text>
                      <Text dimColor>{'  '}⎿{'  '}</Text>
                      <Ansi>{decisionReasonDisplayString(result.decisionReason)}</Ansi>
                    </Text>
                  )}
                  {result.behavior === 'ask' && <SuggestedRules suggestions={result.suggestions} />}
                </Box>
              );
            })}
          </Box>
        );
      default:
        return (
          <Text>
            <Ansi>{decisionReasonDisplayString(decisionReason)}</Ansi>
          </Text>
        );
    }
  }, [decisionReason, theme]);

  return (
    <Box flexDirection="column">
      {title && <Text>{title}</Text>}
      {formatDecisionReason}
    </Box>
  );
}

function SuggestedRules({ suggestions }: { suggestions: PermissionUpdate[] | undefined }) {
  const rules = extractRules(suggestions);
  if (rules.length === 0) {
    return null;
  }

  return (
    <Text>
      <Text dimColor>{'  '}⎿{'  '}</Text>
      {'Suggested rules: '}
      <Ansi>{rules.map(rule => chalk.bold(permissionRuleValueToString(rule))).join(', ')}</Ansi>
    </Text>
  );
}

type Props = {
  permissionResult: PermissionDecision;
  toolName?: string; // Filter unreachable rules to this tool
};

// Helper function to extract directories from permission updates
function extractDirectories(updates: PermissionUpdate[] | undefined): string[] {
  if (!updates) return [];
  return updates.flatMap(update => {
    switch (update.type) {
      case 'addDirectories':
        return update.directories;
      default:
        return [];
    }
  });
}

// Helper function to extract mode from permission updates
function extractMode(updates: PermissionUpdate[] | undefined): PermissionMode | undefined {
  if (!updates) return undefined;
  const update = updates.findLast(u => u.type === 'setMode');
  return update?.type === 'setMode' ? update.mode : undefined;
}

function SuggestionDisplay({ suggestions, width }: { suggestions: PermissionUpdate[] | undefined; width: number }) {
  if (!suggestions || suggestions.length === 0) {
    return (
      <Box flexDirection="row">
        <Box justifyContent="flex-end" minWidth={width}>
          <Text dimColor>Suggestions </Text>
        </Box>
        <Text>None</Text>
      </Box>
    );
  }

  const rules = extractRules(suggestions);
  const directories = extractDirectories(suggestions);
  const mode = extractMode(suggestions);

  if (rules.length === 0 && directories.length === 0 && !mode) {
    return (
      <Box flexDirection="row">
        <Box justifyContent="flex-end" minWidth={width}>
          <Text dimColor>Suggestion </Text>
        </Box>
        <Text>None</Text>
      </Box>
    );
  }

  return (
    <Box flexDirection="column">
      <Box flexDirection="row">
        <Box justifyContent="flex-end" minWidth={width}>
          <Text dimColor>Suggestions </Text>
        </Box>
        <Text> </Text>
      </Box>
      {rules.length > 0 && (
        <Box flexDirection="row">
          <Box justifyContent="flex-end" minWidth={width}>
            <Text dimColor> Rules </Text>
          </Box>
          <Box flexDirection="column">
            {rules.map((rule, index) => (
              <Text key={index}>{figures.bullet} {permissionRuleValueToString(rule)}</Text>
            ))}
          </Box>
        </Box>
      )}
      {directories.length > 0 && (
        <Box flexDirection="row">
          <Box justifyContent="flex-end" minWidth={width}>
            <Text dimColor> Directories </Text>
          </Box>
          <Box flexDirection="column">
            {directories.map((dir, index) => (
              <Text key={index}>{figures.bullet} {dir}</Text>
            ))}
          </Box>
        </Box>
      )}
      {mode && (
        <Box flexDirection="row">
          <Box justifyContent="flex-end" minWidth={width}>
            <Text dimColor> Mode </Text>
          </Box>
          <Text>{permissionModeTitle(mode)}</Text>
        </Box>
      )}
    </Box>
  );
}

export function PermissionDecisionDebugInfo({ permissionResult, toolName }: Props) {
  const toolPermissionContext = useAppState(s => s.toolPermissionContext);
  const decisionReason = permissionResult.decisionReason;
  const suggestions = 'suggestions' in permissionResult ? permissionResult.suggestions : undefined;

  const unreachableRules = useMemo(() => {
    const sandboxAutoAllowEnabled = SandboxManager.isSandboxingEnabled() && SandboxManager.isAutoAllowBashIfSandboxedEnabled();
    const all = detectUnreachableRules(toolPermissionContext, { sandboxAutoAllowEnabled });
    const suggestedRules = extractRules(suggestions);
    if (suggestedRules.length > 0) {
      return all.filter(u => suggestedRules.some(
        suggested => suggested.toolName === u.rule.ruleValue.toolName && suggested.ruleContent === u.rule.ruleValue.ruleContent
      ));
    }
    if (toolName) {
      return all.filter(u => u.rule.ruleValue.toolName === toolName);
    }
    return all;
  }, [suggestions, toolName, toolPermissionContext]);

  return (
    <Box flexDirection="column">
      <Box flexDirection="row">
        <Box justifyContent="flex-end" minWidth={10}>
          <Text dimColor>Behavior </Text>
        </Box>
        <Text>{permissionResult.behavior}</Text>
      </Box>
      {permissionResult.behavior !== 'allow' && (
        <Box flexDirection="row">
          <Box justifyContent="flex-end" minWidth={10}>
            <Text dimColor>Message </Text>
          </Box>
          <Text>{permissionResult.message}</Text>
        </Box>
      )}
      <Box flexDirection="row">
        <Box justifyContent="flex-end" minWidth={10}>
          <Text dimColor>Reason </Text>
        </Box>
        {decisionReason === undefined ? <Text>undefined</Text> : <PermissionDecisionInfoItem decisionReason={decisionReason} />}
      </Box>
      <SuggestionDisplay suggestions={suggestions} width={10} />
      {unreachableRules.length > 0 && (
        <Box flexDirection="column" marginTop={1}>
          <Text color="warning">{figures.warning} Unreachable Rules ({unreachableRules.length})</Text>
          {unreachableRules.map((u, i) => (
            <Box key={i} flexDirection="column" marginLeft={2}>
              <Text color="warning">{permissionRuleValueToString(u.rule.ruleValue)}</Text>
              <Text dimColor>{'  '}{u.reason}</Text>
              <Text dimColor>{'  '}Fix: {u.fix}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
