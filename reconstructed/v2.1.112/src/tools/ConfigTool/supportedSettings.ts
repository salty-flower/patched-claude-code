import { getRemoteControlAtStartup } from '../../utils/config.js'
import {
  EDITOR_MODES,
  NOTIFICATION_CHANNELS,
  TEAMMATE_MODES,
} from '../../utils/configConstants.js'
import { getModelOptions } from '../../utils/model/modelOptions.js'
import { validateModel } from '../../utils/model/validateModel.js'
import { THEME_NAMES } from '../../utils/theme.js'

/** AppState keys that can be synced for immediate UI effect */
type SyncableAppStateKey = 'verbose' | 'mainLoopModel' | 'thinkingEnabled'

type SettingConfig = {
  source: 'global' | 'settings'
  type: 'boolean' | 'string'
  description: string
  path?: string[]
  options?: readonly string[]
  getOptions?: () => string[]
  appStateKey?: SyncableAppStateKey
  /** Async validation called when writing/setting a value */
  validateOnWrite?: (v: unknown) => Promise<{ valid: boolean; error?: string }>
  /** Format value when reading/getting for display */
  formatOnRead?: (v: unknown) => unknown
}

// v112: SUPPORTED_SETTINGS is now a lazy-module-initialized variable (y37 lazy block)
// The object is materially identical to v88 but with additions:
// - autoScrollEnabled: new setting for fullscreen auto-scroll
// - tui: new setting for terminal UI renderer (fullscreen vs default)
// - VOICE_MODE gate is always-false in v112 (build constant)
// - BRIDGE_MODE voiceEnabled is included unconditionally (feature baked in)
// - KAIROS notifications dropped taskCompleteNotifEnabled (only inputNeeded + agentPush remain)
// - permissions.defaultMode: 'auto' always included (TRANSCRIPT_CLASSIFIER always on)
export const SUPPORTED_SETTINGS: Record<string, SettingConfig> = {
  theme: {
    source: 'global',
    type: 'string',
    description: 'Color theme for the UI',
    // v112: uses THEME_NAMES directly (AUTO_THEME feature is not present)
    options: THEME_NAMES,
  },
  editorMode: {
    source: 'global',
    type: 'string',
    description: 'Key binding mode',
    options: EDITOR_MODES,
  },
  verbose: {
    source: 'global',
    type: 'boolean',
    description: 'Show detailed debug output',
    appStateKey: 'verbose',
  },
  preferredNotifChannel: {
    source: 'global',
    type: 'string',
    description: 'Preferred notification channel',
    options: NOTIFICATION_CHANNELS,
  },
  autoCompactEnabled: {
    source: 'global',
    type: 'boolean',
    description: 'Auto-compact when context is full',
  },
  // v112: new setting
  autoScrollEnabled: {
    source: 'global',
    type: 'boolean',
    description: 'Auto-scroll conversation to bottom (fullscreen mode only)',
  },
  autoMemoryEnabled: {
    source: 'settings',
    type: 'boolean',
    description: 'Enable auto-memory',
  },
  autoDreamEnabled: {
    source: 'settings',
    type: 'boolean',
    description: 'Enable background memory consolidation',
  },
  fileCheckpointingEnabled: {
    source: 'global',
    type: 'boolean',
    description: 'Enable file checkpointing for code rewind',
  },
  showTurnDuration: {
    source: 'global',
    type: 'boolean',
    description:
      'Show turn duration message after responses (e.g., "Cooked for 1m 6s")',
  },
  terminalProgressBarEnabled: {
    source: 'global',
    type: 'boolean',
    description: 'Show OSC 9;4 progress indicator in supported terminals',
  },
  todoFeatureEnabled: {
    source: 'global',
    type: 'boolean',
    description: 'Enable todo/task tracking',
  },
  model: {
    source: 'settings',
    type: 'string',
    description: 'Override the default model',
    appStateKey: 'mainLoopModel',
    getOptions: () => {
      try {
        return getModelOptions()
          .filter(o => o.value !== null)
          .map(o => o.value as string)
      } catch {
        return ['sonnet', 'opus', 'haiku']
      }
    },
    validateOnWrite: v => validateModel(String(v)),
    formatOnRead: v => (v === null ? 'default' : v),
  },
  alwaysThinkingEnabled: {
    source: 'settings',
    type: 'boolean',
    description: 'Enable extended thinking (false to disable)',
    appStateKey: 'thinkingEnabled',
  },
  'permissions.defaultMode': {
    source: 'settings',
    type: 'string',
    description: 'Default permission mode for tool usage',
    // v112: 'auto' is always included (TRANSCRIPT_CLASSIFIER always on in v112)
    options: ['default', 'plan', 'acceptEdits', 'dontAsk', 'auto'],
  },
  language: {
    source: 'settings',
    type: 'string',
    description:
      'Preferred language for Claude responses and voice dictation (e.g., "japanese", "spanish")',
  },
  teammateMode: {
    source: 'global',
    type: 'string',
    description:
      'How to spawn teammates: "tmux" for traditional tmux, "in-process" for same process, "auto" to choose automatically',
    options: TEAMMATE_MODES,
  },
  // v112: new setting for TUI renderer selection
  tui: {
    source: 'settings',
    type: 'string',
    description:
      'Terminal UI renderer: "fullscreen" for flicker-free alt-screen rendering, "default" for the classic renderer',
    options: ['default', 'fullscreen'],
  },
  // v112: VOICE_MODE feature is baked off (false) at build time — no ant-only block
  // v112: voiceEnabled is always included (feature('BRIDGE_MODE') always on)
  voiceEnabled: {
    source: 'settings' as const,
    type: 'boolean' as const,
    description: 'Enable voice dictation (hold-to-talk)',
  },
  // v112: remoteControlAtStartup always present (BRIDGE_MODE always on)
  remoteControlAtStartup: {
    source: 'global' as const,
    type: 'boolean' as const,
    description:
      'Enable Remote Control for all sessions (true | false | default)',
    formatOnRead: () => getRemoteControlAtStartup(),
  },
  // v112: KAIROS notifications — taskCompleteNotifEnabled removed, only inputNeeded + agentPush
  inputNeededNotifEnabled: {
    source: 'global' as const,
    type: 'boolean' as const,
    description:
      'Push to your mobile device when a permission prompt or question is waiting (requires Remote Control)',
  },
  agentPushNotifEnabled: {
    source: 'global' as const,
    type: 'boolean' as const,
    description:
      'Allow Claude to push to your mobile device when it deems it appropriate (requires Remote Control)',
  },
}

export function isSupported(key: string): boolean {
  return key in SUPPORTED_SETTINGS
}

export function getConfig(key: string): SettingConfig | undefined {
  return SUPPORTED_SETTINGS[key]
}

export function getAllKeys(): string[] {
  return Object.keys(SUPPORTED_SETTINGS)
}

export function getOptionsForSetting(key: string): string[] | undefined {
  const config = SUPPORTED_SETTINGS[key]
  if (!config) return undefined
  if (config.options) return [...config.options]
  if (config.getOptions) return config.getOptions()
  return undefined
}

export function getPath(key: string): string[] {
  const config = SUPPORTED_SETTINGS[key]
  return config?.path ?? key.split('.')
}
