// Claude Code function hooks: the plugin API's TypeScript declarations.
//
// EARLY ACCESS: this surface may change between releases without notice.
// Written by `/plugin-types`; regenerate with that command after an update
// rather than editing. The version that wrote it is on the line above.
//
// What is here: the module a hooks module may import types from,
//   import type { Register, On, EngineInterface } from 'claude-code'
// (at run time the import is empty), and the globals a hooks module has:
// `h`, `Fragment`, `Box`, `Text`, `Button`, the JSX namespace, and
// the environment's web APIs (URL, TextEncoder, AbortController,
// crypto.subtle, ...). A hooks module runs in an environment of its own:
// no DOM, no Node.
//
// Typing a plugin against it:
//   export const register: Register = (on, options) => { ... }
// or, in a .js module,
//   /** @type {import('claude-code').Register} */
//   export const register = (on, options) => { ... }
//
// A tsconfig.json (or jsconfig.json) that fits a hooks module:
//   {
//     "compilerOptions": {
//       "target": "es2023", "lib": ["es2023"], "types": [],
//       "module": "esnext", "moduleResolution": "bundler",
//       "strict": true, "noEmit": true, "skipLibCheck": true,
//       "jsx": "react", "jsxFactory": "h", "jsxFragmentFactory": "Fragment"
//     },
//     "include": [".claude/types", "hooks"]
//   }
// ".claude/types" is where /plugin-types writes; "hooks" is the plugin's
// hooks/ folder. `lib` names no DOM: the environment has none, and the
// DOM's own `Text` would shadow the element.

declare module 'claude-code' {
  /**
   * One subagent as `$.agent.list()` returns it.
   */
  export type AgentInfo = {
      /**
       * The agent's id (the task's).
       */
      id: string;
      /**
       * Its row's label.
       */
      description: string;
      /**
       * The agent definition it runs as (`general-purpose`, `Explore`, ...).
       */
      type: string;
      /**
       * `running`, `completed`, `failed`, `killed`, or another of the engine's task
       * statuses.
       */
      status: string;
  };

  /**
   * The input of `agent.offer`: one agent type, at the moment the engine
   * offers it to the model.
   *
   * Listed for the model (the agent listing) or named by it at dispatch
   * (`subagent_type`): the same event at each.
   */
  export type AgentOfferInput = {
      /**
       * Which type (`Explore`, `advisor`, a plugin's agent); the key a matcher
       * narrows on.
       */
      agent: string;
      /**
       * Its listing line's text as the definition states it (`whenToUse`).
       */
      description: string;
      /**
       * Where the definition came from (`built-in`, `plugin`, a settings
       * source), so a matcher tells a built-in from a user's agent of its name.
       */
      source: string;
  };

  /**
   * What an `agent.offer` hook returns: whether the model is offered the agent
   * type, in its listing and at dispatch.
   */
  export type AgentOfferResult = {
      isOffered: boolean;
  };

  /**
   * `agent.spawn`'s input as the call takes it: what the Agent tool's caller
   * says; the engine fills the rest.
   */
  export type AgentSpawnArgs = Pick<AgentSpawnInput, 'prompt'> & Partial<Pick<AgentSpawnInput, 'description' | 'subagentType' | 'model' | 'name' | 'cwd' | 'background'>>;

  /**
   * The input of `agent.spawn` (agent-spawn/): what the Agent tool decided
   * about the subagent it is about to start, before its model is resolved.
   *
   * A hook rewrites `model` or answers itself; a `next(e)` that changed any
   * other key is refused (site-rules/). Core is last: it resolves the model
   * as the Agent tool does (tool override, agent's own, parent's, allowlist).
   */
  export type AgentSpawnInput = {
      /**
       * The Agent tool call this spawn belongs to (for `$.ui.notice`).
       */
      tool_use_id: string;
      /**
       * The task the subagent is given: the Agent tool's `prompt` parameter.
       */
      prompt: string;
      /**
       * The Agent tool's short `description` of the task (a few words).
       */
      description: string;
      /**
       * The resolved agent type (`general-purpose`, `Explore`, a plugin's agent,
       * `fork`).
       */
      subagentType: string;
      /**
       * The Agent tool's `model` parameter as given, an alias (`haiku`) or a
       * full id; undefined lets the agent's own model, then the parent's, decide.
       *
       * Ignored for forks, which always inherit. A hook sets this to pick the
       * subagent's model.
       */
      model?: string;
      /**
       * The parent's effective model, what `inherit` resolves to.
       */
      parentModel: string;
      /**
       * The parent's permission mode (`default`, `acceptEdits`, `plan`, ...), which
       * the subagent inherits.
       */
      permissionMode?: string;
      /**
       * True when the subagent will run in the background (or remotely).
       */
      background: boolean;
      /**
       * True for a fork of the parent: it inherits the parent's context and model,
       * and `model` is ignored.
       */
      fork: boolean;
      /**
       * Given by the call (`Agent({ name })`, addressable by SendMessage);
       * undefined when unnamed.
       */
      name?: string;
      /**
       * The directory the subagent runs in when the call set one (`cwd`); undefined
       * means the parent's.
       */
      cwd?: string;
  };

  /**
   * What an `agent.spawn` hook returns and what `next(e)` resolves to:
   * `{ model }`, or `{ deny: reason }`, which refuses the spawn.
   *
   * `$.agent.spawn(input)` resolves to `{ model, text, isError }` once the
   * subagent ran; a `deny` there means the spawn was refused and nothing ran.
   */
  export type AgentSpawnResult = {
      /**
       * What the subagent runs on: from core the resolved id; from a hook an
       * alias (`haiku`) or an id, resolved like the Agent tool's parameter.
       */
      model: string;
      /**
       * The subagent's final message, or why its run failed when `isError`.
       *
       * Set on what `$.agent.spawn(input)` resolves to; absent at the event,
       * which fires before the run.
       */
      text?: string;
      /**
       * Set by core on what `$.agent.spawn(input)` resolves to, present only
       * when the subagent ran and failed (`text` says why).
       *
       * Absent at the event, which fires before the run.
       */
      isError?: true;
      deny?: undefined;
  } | {
      /**
       * Refuses the spawn, so nothing runs; the model sees the text as the
       * Agent tool's error.
       */
      deny: string;
      model?: undefined;
      text?: undefined;
      isError?: undefined;
  };

  /**
   * The hook `on("*", hook)` takes: it runs on every event (the settings hooks'
   * `PreToolUse` aside), so `e` is `unknown` and `next` is StarNext.
   *
   * Until `next.is(name, e)` narrows `e`, all a hook can do with it is pass it
   * on, time it, log it, or fail it; once narrowed it is an ordinary hook on that
   * event.
   *
   * @param $ the engine interface; at `engine.create` the empty table, so a hook
   *          that reads `$` tests `next.is("engine.create", e)` first
   */
  export type AnyEventHook = ($: EngineInterface, e: unknown, next: StarNext) => unknown;

  /**
   * Every key of every variant, index signatures included.
   */
  type AnyKeyOf<I> = I extends unknown ? keyof I : never;

  /**
   * The argument of event `N`: `e` in its hooks, and what its call takes. For a
   * union of names, the union of their arguments.
   */
  export type Args<N extends EventName = EventName> = EventOf[N];

  /**
   * Options of `$.ui.ask`.
   */
  export type AskProps = {
      /**
       * 2-4 option labels; fewer than two are padded with Yes/No; free text is the
       * dialog's Other.
       */
      options?: readonly string[];
      /**
       * A short chip beside the question (`Approach`, 12 characters at most).
       */
      header?: string;
      /**
       * Allow several options; the answer comes back comma-joined.
       */
      multiSelect?: boolean;
  };

  /**
   * The input of `attribution.text`: one text the engine asks the model to
   * write into a commit or a pull request, at the moment it is composed.
   *
   * Composed for the Bash description, the commit skills, a PR's body, the
   * pre-ship mandate and the commit gate's deny: the same event at each.
   */
  export type AttributionTextInput = {
      /**
       * Which text (`commit`, `pr`, `exemption`, `remedy`); the key a matcher
       * narrows on.
       */
      kind: AttributionTextKind;
      /**
       * As the engine composed it, the settings applied.
       */
      text: string;
  };

  /**
   * Which git text `attribution.text` carries: the commit trailer, the PR
   * footer, the mandate's or the commit gate's sentence naming the exemption.
   */
  export type AttributionTextKind = 'commit' | 'pr' | 'exemption' | 'remedy';

  /**
   * What an `attribution.text` hook returns: the text the model reads in
   * that place.
   */
  export type AttributionTextResult = {
      text: string;
  };

  /**
   * What `$.audio.play` plays: a URL the engine fetches, or the bytes.
   */
  export type AudioClip = {
      /**
       * A file of the calling plugin's own, relative to the plugin's
       * directory (`fx/open.wav`); no `.`, no leading slash.
       *
       * The engine resolves and loads it: in a page, the plugin's served
       * copy; in the CLI, the file on disk.
       */
      asset: string;
      url?: undefined;
      base64?: undefined;
      mime?: undefined;
  } | {
      /**
       * The clip's URL; the engine fetches it (never the plugin).
       */
      url: string;
      asset?: undefined;
      base64?: undefined;
      mime?: undefined;
  } | {
      /**
       * The clip's bytes, base64.
       */
      base64: string;
      /**
       * What the bytes are (`audio/mpeg`, `audio/wav`).
       */
      mime: string;
      asset?: undefined;
      url?: undefined;
  };

  /**
   * The props of `Box`: the layout, margin, padding and border props of Ink's Box
   * a tree may set (render-site/ RENDER_PROPS).
   */
  export type BoxProps = {
      flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
      flexGrow?: number;
      flexShrink?: number;
      flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
      alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
      alignSelf?: 'flex-start' | 'center' | 'flex-end' | 'auto';
      justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
      gap?: number;
      columnGap?: number;
      rowGap?: number;
      width?: number | string;
      height?: number | string;
      minWidth?: number | string;
      minHeight?: number | string;
      margin?: number;
      marginX?: number;
      marginY?: number;
      marginTop?: number;
      marginBottom?: number;
      marginLeft?: number;
      marginRight?: number;
      padding?: number;
      paddingX?: number;
      paddingY?: number;
      paddingTop?: number;
      paddingBottom?: number;
      paddingLeft?: number;
      paddingRight?: number;
      borderStyle?: string;
      borderColor?: string;
      borderDimColor?: boolean;
      backgroundColor?: string;
      overflow?: 'visible' | 'hidden';
      display?: 'flex' | 'none';
  };

  /**
   * One variant per built-in tool; with none in the table (a plugin author's
   * project before `/plugin-types` ran), one loose variant over every name.
   */
  export type BuiltinToolCallInput = [BuiltinToolName] extends [never] ? BuiltinToolCallInputFallback : {
      [N in BuiltinToolName]: ToolInputOf<N, BuiltinToolInputs[N]>;
  }[BuiltinToolName];

  /**
   * The built-in branch's answer when no built-in tool is declared: every
   * name, its args unconstrained.
   */
  type BuiltinToolCallInputFallback = {
      /**
       * The name of the tool being called (`Bash`); comparing it narrows `e` once
       * the table has entries. Reserved: a rewrite of it is ignored by core.
       */
      tool: string;
      /**
       * The tool_use block's id: the same at every event of the call and in
       * `$.ui.notice`. Reserved: a rewrite of it is ignored by core.
       */
      tool_use_id: string;
      [argument: string]: unknown;
  };

  /**
   * The arguments of each built-in tool by name, for declaration merging;
   * empty until a declaration file adds entries, then `e.tool === "Bash"`
   * narrows `e` to Bash's arguments.
   *
   * `/plugin-types` writes this build's set beneath the engine's declarations
   * (claude-code.d.ts), from each tool's input schema.
   *
   * @example
   * interface BuiltinToolInputs { Bash: { command: string; timeout?: number } }
   */
  export interface BuiltinToolInputs {
  }

  /**
   * The names of the built-in tools (tool-inputs/).
   */
  export type BuiltinToolName = keyof BuiltinToolInputs & string;

  /**
   * Options of `$.model.classify`.
   */
  export type ClassifyOptions = {
      /**
       * An alias (`haiku`) or a full model id; default the engine's small fast
       * model.
       */
      model?: string;
  };

  /**
   * The plugin's identity (`plugin`) and the nouns core contributes to `$` as
   * the innermost step of the `engine.create` fold.
   *
   * A plugin's finished `$` (EngineInterface) has every core noun an outer
   * step did not withhold, and every noun the plugins' steps added.
   */
  export interface CoreEngineInterface {
      /**
       * This plugin, as loaded: its manifest name and its directory.
       */
      plugin: {
          /**
           * From plugin.json; debug-log and `$.ui.log` lines carry it.
           */
          name: string;
          /**
           * The plugin's directory (the one holding plugin.json), absolute.
           */
          root: string;
      };
      /**
       * Display: a line under an open dialog, a redraw request, a transcript line.
       */
      ui: {
          /**
           * Shows `text` as one line under the dialog open for `tool_use_id`, or
           * removes the line when `text` is undefined.
           *
           * Core removes the line when the call resolves. A call that is not open
           * is refused, as is another plugin's `$.tool.call` run.
           *
           * @param tool_use_id the call whose open dialog gets the line
           * @param text the line to show; undefined removes it
           * @example
           * $.ui.notice(e.tool_use_id, "checked by my-plugin"); return next(e)
           */
          notice: (tool_use_id: string, text: string | undefined) => void;
          /**
           * Re-runs an event whose results the engine caches: `ui.render` draws
           * every instance again; the other three drop the engine's cached answers.
           *
           * A render hook whose state changed (a countdown) calls this for a redraw,
           * at most ten a second (calls sooner fold into one); a `prompt.section` or
           * `prompt.context` hook whose inputs changed calls it: dropped next turn.
           *
           * @param event `ui.render`, `prompt.section`, `prompt.context` or
           *              `tool.describe`
           */
          invalidate: (event: InvalidatableEventName) => void;
          /**
           * The elements of the surface `e` is drawn on (Elements[e.surface]): a
           * frozen table of constructors, usable as JSX tags.
           *
           * A hook that has narrowed `e.surface` gets that surface's table, an
           * unnarrowed one the union. Runs the `ui.resolve` event (the other plugins'
           * hooks, this plugin's skipped, then core).
           *
           * @param e this hook's own `ui.render` argument
           * @returns the surface's frozen element table (`Elements[e.surface]`),
           *          usable as JSX tags, once `ui.resolve` settles
           * @example
           * const t = await $.ui.resolve(e); return <t.Box>{await next(e)}</t.Box>
           */
          resolve: <E extends RenderInput>(e: E) => Promise<Elements[E['surface']]>;
          /**
           * Appends one line to the transcript, drawn like a system notice (dim;
           * not sent to the model), and records it in the debug log.
           *
           * The line is a row of its own at the surface's next frame, wherever the
           * transcript is then; lines keep the order they were logged in. A `-p` or
           * SDK run has no transcript: its host receives the line as `ui_log`.
           *
           * @param text the line's text
           * @example
           * $.ui.log(`prompt from ${e.origin.kind}: ${e.text.length} chars`)
           */
          log: (text: string) => void;
          /**
           * Asks the user `question` in the engine's own AskUserQuestion dialog and
           * resolves to the label they chose, or the text typed under "Other".
           *
           * Another plugin's `ui.render` hook on `AskUserQuestion` draws it (this
           * plugin's own is skipped). A multi-select answer comes back
           * comma-joined. Rejects when the dialog is dismissed.
           *
           * @param question the question, ending in a question mark
           * @param options 2-4 option labels, or `{ options, header, multiSelect }`
           * @returns the label chosen, the text typed under "Other", or the
           *          chosen labels comma-joined
           * @example
           * const mood = await $.ui.ask("How careful?", ["Bold", "Careful"])
           */
          ask: (question: string, options?: readonly string[] | AskProps) => Promise<string>;
          /**
           * Shows `text` on the notification bar under the prompt for a few
           * seconds, the way the engine's own "context left" notice appears.
           *
           * It leaves the transcript and the model untouched.
           *
           * @param text the line to show
           * @param options `timeoutMs`: how long it stays (default 4000)
           * @example
           * $.ui.toast(`turn took ${Math.round(e.durationMs / 1000)} s`)
           */
          toast: (text: string, options?: ToastOptions) => void;
          /**
           * Pins `text` as this plugin's status line under the prompt, beside the
           * engine's own pinned notices, until the next call replaces it.
           *
           * One per plugin; `undefined` removes it.
           *
           * @param text the line to keep on screen; undefined clears it
           * @example
           * $.ui.status("thinking..."); return next(e)
           */
          status: (text: string | undefined) => void;
      };
      /**
       * Completions through the session's own client and credentials.
       */
      model: {
          /**
           * Runs one text completion through the session's own API client and
           * resolves to the reply's text.
           *
           * No tools, no history, no system prompt beyond the CLI's identity block
           * and `request.system`.
           *
           * @param request the model (an alias such as `haiku`, or a full id,
           *   resolved like a `--model` value), the prompt, and a token cap
           * @returns the reply's text
           * @example
           * const reply = await $.model.complete({ model: "haiku", prompt: "Hi." })
           */
          complete: (request: ModelCompleteRequest) => Promise<string>;
          /**
           * Runs one tool-less completion over the session's OWN transcript, sharing
           * the main thread's prompt cache; the reply's text and the fork's usage.
           *
           * Not `complete`: sharing the cache prefix means the model and system
           * prompt are the session's, read from its last turn's cache-safe snapshot,
           * and tools are denied. Null on a cold snapshot or an API error.
           *
           * @param request the one user message the fork answers
           * @returns the reply's text with the fork's usage, or null on a cold
           *          snapshot or an API error
           * @example
           * const reply = await $.model.fork({ prompt: "One line to learn?" })
           * if (reply !== null) $.ui.log(`${reply.usage.output_tokens} tokens`)
           */
          fork: (request: ModelForkRequest) => Promise<ModelForkReply | null>;
          /**
           * Picks one of `labels` for `text` with one completion over
           * `$.model.complete` and a fixed classifier prompt.
           *
           * `text` is data; the model answers with a label alone. Resolves to
           * `undefined` when its answer named none.
           *
           * @param text what to classify
           * @param labels the labels to choose from (2 or more)
           * @param options `model`: an alias or id; default the engine's small
           *   fast model
           * @returns the label the model named, or undefined when it named none
           * @example
           * const kind = await $.model.classify(e.text, ["bug", "feature"])
           */
          classify: (text: string, labels: readonly string[], options?: ClassifyOptions) => Promise<string | undefined>;
      };
      /**
       * Sound: clip playback and platform speech.
       */
      audio: {
          /**
           * Plays one audio clip, starting now; clips are not queued, so two calls
           * play together (a bed under speech).
           *
           * `{ asset }` is the plugin's own file, loaded by the engine (in a page
           * decoded once and cached; in the CLI through `afplay`). Resolves when
           * playback ends; rejects, naming the cause, when the clip cannot play.
           *
           * @param clip the plugin's own file (`{ asset }`), a URL the engine
           *   fetches, or the bytes as base64 with their MIME type
           * @param options `shouldLoop`, `gain`, and an AbortSignal that stops the
           *   clip
           */
          play: (clip: AudioClip, options?: PlayOptions) => Promise<void>;
          /**
           * Speaks `text` with the platform's own synthesizer: the page's
           * `speechSynthesis` in the browser build, `say` on macOS. Plain text.
           *
           * Utterances are queued among themselves; clips are not. Resolves when
           * the utterance has ended; rejects, naming the cause, when there is no
           * synthesizer, the voice is not installed, or the utterance failed.
           *
           * @param text what to say, as plain text
           * @param options `voice`: the system voice's exact name (`Samantha`);
           *   absent, the synthesizer's default
           * @returns nothing, once the utterance has ended
           */
          speak: (text: string, options?: SpeakOptions) => Promise<SpeakResult>;
      };
      /**
       * The engine's connected MCP servers.
       */
      mcp: {
          /**
           * Calls `tool` on one of the engine's connected MCP servers with the
           * engine's own connection and credentials.
           *
           * A `cached` server is dialed on first use. Resolves to the tool's result
           * as MCP returns it: `content` blocks and `isError`. No permission prompt:
           * the plugin's call, seen by the hooks above it, is the grant.
           *
           * @param server the server's name as /mcp lists it (`claude.ai Gmail`;
           *   the tool-name spelling `claude_ai_Gmail` is accepted too)
           * @param tool the tool's name on that server (`create_draft`)
           * @param args the tool's arguments; none when absent
           * @returns the tool's result as MCP returns it: `content` blocks and
           *          `isError`
           * @example
           * const { content } = await $.mcp.call("claude.ai Gmail", "create_draft")
           */
          call: (server: string, tool: string, args?: Record<string, unknown>) => Promise<McpToolResult>;
      };
      /**
       * The running session, read as plain data.
       */
      session: {
          /**
           * Returns the transcript so far, one entry per user or assistant
           * message; progress rows, `$.ui.log` lines and notices are not messages.
           *
           * A long transcript answers its newest 4096 entries.
           *
           * @example
           * const last = (await $.session.messages()).at(-1)
           */
          messages: () => Promise<SessionMessage[]>;
          /**
           * Returns the directory the session runs in, absolute.
           */
          cwd: () => Promise<string>;
          /**
           * Returns the main loop's model, as `/model` shows it.
           */
          model: () => Promise<string>;
          /**
           * Returns how many prompts the user has sent this session (user turns in
           * the transcript).
           */
          turnCount: () => Promise<number>;
          /**
           * Returns the session's id (the transcript file's name).
           */
          id: () => Promise<string>;
          /**
           * Returns the git repository the session runs in, read from the working
           * copy on each call; null when the directory is not inside one.
           *
           * @example
           * const repo = await $.session.repo(); const publicRepo = !repo?.internal
           */
          repo: () => Promise<SessionRepo | null>;
          /**
           * Returns where the session draws: `terminal` under the REPL, `desktop`
           * under the Code session renderer; null where nothing draws.
           *
           * Nothing draws in a plain -p run or an SDK host without the renderer.
           * The one session read that never rejects: null is also its answer where
           * no session is bound at all.
           *
           * @example
           * return (await $.session.surface()) === "desktop" ? { text: "" } : next(e)
           */
          surface: () => Promise<RenderSurface | null>;
      };
      /**
       * The running model turn: ending it.
       */
      turn: {
          /**
           * Cancels the running model turn: the one whose id `turn.start` handed
           * this plugin, its running tools stopped, no interruption marker.
           *
           * The event `turn.abort`, seen by the hooks above; the prompt this
           * plugin submits next is the context. Rejects, naming both ids, when
           * `turnId` is not the running turn's; a hook may end its own turn.
           *
           * @param input `turnId`: the id `turn.start` carried
           * @example
           * on("turn.start", ($, e, next) => { held = e.turnId; return next(e) })
           */
          abort: (input: OpEventOf['turn.abort']) => Promise<void>;
      };
      /**
       * Submitting a prompt: the model sees it as a user turn; the engine knows
       * it is the plugin's.
       */
      prompt: {
          /**
           * Submits a prompt: the event `prompt.submit`, the same call the engine
           * makes for a typed prompt; `input.text` runs when the session is idle.
           *
           * It goes through every other plugin's hook (this plugin's own is
           * skipped) with `e.origin` `{ kind: 'plugin', name }`, the name the
           * model reads it under unless a hook leaves it out of its answer.
           *
           * @example
           * void $.prompt.submit({ text: "List the TODOs you just mentioned." })
           */
          submit: EventCalls['prompt']['submit'];
      };
      /**
       * The tools the model has in this session, and running one.
       */
      tool: {
          /**
           * Returns the tools the model can call now, built-in and MCP alike, in
           * the order the model sees them.
           *
           * @example
           * const names = (await $.tool.list()).map(t => t.name)
           */
          list: () => Promise<ToolInfo[]>;
          /**
           * Calls a tool: the event `tool.call`, the same call the engine makes for
           * the model's tool calls, under a `tool_use_id` of its own.
           *
           * It runs through the other plugins' hooks (this plugin's own skipped),
           * the permission check and its dialog, then the tool. Rejects when no
           * tool has that name or the call is aborted.
           *
           * @example
           * const { text } = await $.tool.call({ tool: "Read", file_path: "a.md" })
           */
          call: EventCalls['tool']['call'];
          /**
           * Adds a tool the model can call, as `mcp__<plugin>__<name>` on an
           * in-process MCP server the engine connects for this plugin.
           *
           * The model sees it from the next prompt on; permissions and `tool.call`
           * apply. Answer its calls in a `tool.call` hook matched on the full name; a
           * call no hook answers fails saying so. Registering again replaces.
           *
           * @param tool `name`, `description` (what the model reads), `inputSchema`
           *             (a JSON schema object; default `{ type: "object" }`)
           * @returns `{ tool }`, the registered tool's full name
           *          `mcp__<plugin>__<name>`
           * @example
           * await $.tool.register({ name: "weather", description: "Weather." })
           */
          register: (tool: ToolSpec) => Promise<OpValueOf['tool.register']>;
      };
      /**
       * Subagents.
       */
      agent: {
          /**
           * Spawns a subagent: the event `agent.spawn`, the same call the engine
           * makes when the Agent tool starts one; the engine fills the rest.
           *
           * It runs through the Agent tool under this call's origin for its life:
           * the other plugins' hooks see its calls and this plugin's do not, so it
           * is seen through what this resolves to, `{ model, text }` or `{ deny }`.
           *
           * @example
           * const { text } = await $.agent.spawn({ prompt: "Summarize README.md." })
           */
          spawn: EventCalls['agent']['spawn'];
          /**
           * Returns the session's subagents so far, the ones the model spawned and
           * the ones plugins did alike.
           */
          list: () => Promise<AgentInfo[]>;
      };
      /**
       * The files under the session's working directory (it follows the
       * session's `cd`); anything outside rejects. Text only (UTF-8).
       *
       * A read (`readFile`, `stat`, `listDir`, `exists`) also takes an absolute
       * path under the system's temp directory (`os.tmpdir()`, `/tmp`); a write
       * does not.
       */
      fs: {
          /**
           * Reads a file and returns its text. Rejects when missing.
           *
           * @param path relative to the working directory, or absolute inside it or
           *   the temp directory
           * @returns the file's text
           * @example
           * const readme = await $.fs.readFile("README.md")
           */
          readFile: (path: string) => Promise<string>;
          /**
           * Writes `text` to a file under the working directory, creating it and
           * its directories as needed; the temp directory is not written.
           *
           * @param path the file's path
           * @param text the whole new content
           */
          writeFile: (path: string, text: string) => Promise<void>;
          /**
           * Lists a directory: `{ name, kind, size }` per entry.
           *
           * @param path the directory's path; absent, the working directory
           * @returns the entries, `{ name, kind, size }` each
           */
          listDir: (path?: string) => Promise<FsEntry[]>;
          /**
           * Returns whether the path exists.
           */
          exists: (path: string) => Promise<boolean>;
          /**
           * Returns `{ kind, size, mtimeMs }` of the path. Rejects when missing.
           */
          stat: (path: string) => Promise<FsStat>;
          /**
           * Reads the named instruction files in every directory above the
           * session's original working directory, the way the engine reads CLAUDE.md.
           *
           * Root first, each `{ dir, name, content }` that exists, the content
           * with its `@include`s after it; with `of`, on down to that file's
           * directory, as the engine reads a nested CLAUDE.md when a file is read.
           *
           * @param request `names`, relative `.md` file names (no `..`) looked for
           * in each directory; `of`, a file under the working directory, or rejects
           * @returns the files found, root first
           * @example
           * const found = await $.fs.ancestors({ names: ["AGENTS.md"] })
           * const stack = await $.fs.ancestors({ names: ["AGENTS.md"], of: path })
           */
          ancestors: (request: FsAncestorsRequest) => Promise<readonly FsAncestor[]>;
      };
      /**
       * This plugin's own key-value store, kept between sessions and hot
       * reloads; values are JSON data.
       *
       * On the page localStorage under the plugin's name; in the CLI a JSON file
       * under ~/.claude/plugins/store/.
       */
      store: {
          /**
           * Returns the value under `key`, or `undefined` when unset.
           *
           * @example
           * const count = Number((await $.store.get("count")) ?? 0) + 1
           */
          get: (key: string) => Promise<unknown>;
          /**
           * Sets `key` to `value`, which must be JSON data.
           */
          set: (key: string, value: unknown) => Promise<void>;
          /**
           * Removes `key` from the store.
           */
          delete: (key: string) => Promise<void>;
          /**
           * Returns every key set, in insertion order.
           */
          keys: () => Promise<string[]>;
      };
      /**
       * Timers, run where the plugin's environment lives (no host round trip).
       *
       * A timer's callback is the plugin's own function, and a hot reload of the
       * plugin drops its pending timers with the old environment.
       */
      clock: {
          /**
           * Returns milliseconds since the epoch, now.
           */
          now: () => number;
          /**
           * Resolves after `ms` milliseconds; rejects at once when `signal` aborts.
           *
           * @param ms how long, in milliseconds
           * @param options `signal`: ends the wait early with a rejection (pass
           *   `next.signal` so a hook's wait ends with its dispatch)
           * @example
           * await $.clock.sleep(500, { signal: next.signal })
           */
          sleep: (ms: number, options?: SleepOptions) => Promise<void>;
          /**
           * Calls `fn` once after `ms` milliseconds; `cancel()` before then stops it.
           */
          after: TimerCall;
          /**
           * Calls `fn` every `ms` milliseconds until `cancel()`.
           *
           * @example
           * const tick = $.clock.every(1000, () => $.ui.status(`${$.clock.now()}`))
           */
          every: TimerCall;
      };
      /**
       * The network, through the host.
       */
      http: {
          /**
           * Fetches `url` through the host (never the plugin's own network) and
           * resolves `{ status, ok, headers, text }` once the body is read.
           *
           * https only. On a page the document's CSP decides what is reachable
           * (the artifact allows its own origin only); the CLI reaches the network.
           *
           * @param url the URL (https, or same-origin on a page)
           * @param init `{ method, headers, body }` (body a string)
           * @returns `{ status, ok, headers, text }` once the body is read
           * @example
           * const { ok, text } = await $.http.fetch("https://example.com/status")
           */
          fetch: (url: string, init?: HttpInit) => Promise<HttpResponse>;
      };
  }

  /**
   * The props of `div`, `span` and `b`: one `style`, a CSS declaration string (no
   * url(), expression() or @import; render-site/ styleProblem).
   */
  export type DomProps = {
      style?: string;
  };

  /**
   * The `children` field every element constructor's props carry, appended
   * beside its own props type: a list, or one child.
   *
   * JSX types a lone child as the child itself, not a list of one:
   * `<t.Text dimColor>done</t.Text>` passes the string.
   */
  export type ElementChildren = {
      children?: RenderNode | readonly RenderNode[];
  };

  /**
   * An element as `$.ui.resolve(e)` hands it out: a constructor from props to
   * the frozen plain-data element, `children` among the props as JSX passes.
   *
   * `<t.Box gap={1}>...</t.Box>` compiles to `h(t.Box, { gap: 1 }, ...children)`
   * and `h` calls a function tag with its props (render-jsx/), so the table's
   * constructors are JSX tags as they are.
   */
  export type ElementConstructor<P> = (props: P & ElementChildren) => RenderElement;

  /**
   * Every element name of every surface: what a table handed out is completed to
   * (an omitted one draws a fragment; see `ui.resolve`).
   */
  export type ElementName = {
      [P in RenderSurface]: keyof Elements[P];
  }[RenderSurface];

  /**
   * The element constructors each surface draws, by `e.surface`: what
   * `$.ui.resolve(e)` resolves to, and what a `ui.resolve` hook passes on.
   *
   * The desktop table carries `Svg`, which the terminal's does not. A hook
   * that narrows `e.surface` gets that surface's table; an unnarrowed `e` gets
   * the union, where only the shared five type-check.
   */
  export type Elements = {
      terminal: {
          Box: ElementConstructor<BoxProps>;
          Text: ElementConstructor<TextProps>;
          div: ElementConstructor<DomProps>;
          span: ElementConstructor<DomProps>;
          b: ElementConstructor<DomProps>;
      };
      desktop: {
          div: ElementConstructor<DomProps>;
          span: ElementConstructor<DomProps>;
          b: ElementConstructor<DomProps>;
          Box: ElementConstructor<BoxProps>;
          Text: ElementConstructor<TextProps>;
          Svg: ElementConstructor<SvgProps>;
      };
  };

  /**
   * The table `ui.resolve` answers for an argument of surface `P`.
   */
  export type ElementTable<P extends RenderSurface = RenderSurface> = Elements[P];

  /**
   * The input of `engine.create` (interface-ops/, hooks-host/
   * buildInterfaces): the fold that builds `$`, once per load, core innermost.
   *
   * A hook is written in post-order: `const built = await next(e)` is `$` as
   * built so far; `return { ...built, voice: { say } }` adds this plugin's noun.
   * See EngineEventOf's `engine.create` for what a step may and may not do.
   */
  export type EngineCreateInput = {
      /**
       * In list order, first is outermost (managed plugins first, so an org
       * plugin's withholding wins).
       */
      plugins: readonly string[];
  };

  /**
   * What an `engine.create` hook returns: `$` as built so far with this
   * plugin's nouns added, less any it withheld.
   *
   * Every declared noun is optional here. Between hooks it crosses the chain
   * as interface descriptors; a hook sees objects (EngineInterfaceBuilt).
   */
  export type EngineCreateResult = Partial<EngineInterface> & {
      readonly [noun: string]: unknown;
  };

  /**
   * The events the engine raises at its call sites, and `engine.create`.
   *
   * At every one, a hook that fails (throws, overruns its budget, answers a
   * wrong shape) is skipped: the hooks beneath and core run in its place, or
   * its last `next` result stands; the failure is reported, naming it.
   */
  export type EngineEventOf = {
      /**
       * The settings hook kept as an event for the settings hooks; a new plugin
       * hooks `tool.call`. Return `next(e)`, a rewrite, or a decision.
       */
      PreToolUse: ToolCallInput;
      /**
       * Fires when the engine is about to run a tool. `next(e)` runs the hooks
       * beneath, then core (the permission prompt, the tool itself).
       *
       * Return `{ deny: reason }` to refuse or `{ result }` to answer yourself; a
       * hook that returns while its `next` is pending aborts what runs beneath.
       * The managed-settings hooks run first: their deny is the call's result.
       */
      'tool.call': ToolCallInput;
      /**
       * Fires when the engine is about to draw a component: once per props
       * change and once per `$.ui.invalidate("ui.render")`, never per frame.
       *
       * `next(e)` resolves to the drawing; return it, a tree wrapping it, or a
       * tree of your own, or rewrite `props`. A tree that does not validate
       * draws the engine's own component with the original props.
       */
      'ui.render': RenderInput;
      /**
       * Fires when a render hook calls `$.ui.resolve(e)` for the elements of the
       * surface it draws on; `e` is that hook's `ui.render` argument.
       *
       * `next(e)` resolves to the surface's table (Elements). Return it, a table
       * with an element restyled for every plugin beneath, or one with a key
       * left out: the caller then gets a fragment under that name.
       */
      'ui.resolve': RenderInput;
      /**
       * Fires when a `Button` a render hook drew is pressed on a surface; `e` is
       * `{ plugin, element, component, surface }`, `element` the button's `key`.
       *
       * `next(e)` runs the hooks beneath, then core: the element's own `onPress`
       * closure, in its plugin's environment, resolving to `{ element }`. Return
       * `next(e)` to let the press through, or `{ element }` to take it.
       */
      'ui.press': UiPressInput;
      /**
       * Fires when the engine offers an agent type to the model, in the agent
       * listing and again at dispatch; `next(e)` resolves to `{ offered: true }`.
       *
       * Return `{ offered: false }` to keep the type out of the listing and
       * refuse its dispatch. A hook that fails passes it through.
       *
       * @example
       * on("agent.offer", { agent: "advisor" }, () => ({ offered: false }))
       */
      'agent.offer': AgentOfferInput;
      /**
       * Fires when the Agent tool is about to start a subagent, everything
       * decided and its model not yet resolved.
       *
       * `next(e)` resolves to `{ model }`. Return it, `next({ ...e, model })`,
       * `{ model }` of your own (an alias resolves like the tool's parameter), or
       * `{ deny: reason }`.
       */
      'agent.spawn': AgentSpawnInput;
      /**
       * Fires when a prompt is submitted, before the turn starts. `next(e)` runs
       * the hooks beneath and the UserPromptSubmit settings hooks.
       *
       * Rewrite with `next({ ...e, text })` (the user message on screen follows)
       * or stop it with `{ drop: reason }`; a broken plugin never blocks a prompt.
       * A prompt typed while a turn ran fires at Enter, with that turn's id.
       */
      'prompt.submit': PromptSubmitInput;
      /**
       * Fires once per named section of the system prompt, when the engine
       * assembles it; `next(e)` resolves to `{ text }` as core computed it.
       *
       * Sections are cached by name for the session until
       * `$.ui.invalidate("prompt.section")`: an unstable answer spends the
       * model's prompt cache on every call. A hook that fails passes it through.
       *
       * @example
       * on("prompt.section", { name: "memory" }, () => ({ text: null }))
       */
      'prompt.section': PromptSectionInput;
      /**
       * Fires once per conversation, when the engine computes the context blocks
       * its first user message carries; `next(e)` resolves to `{ blocks }`.
       *
       * Append, drop, reorder or rewrite with `next({ ...e, blocks })`; the
       * engine renders what comes back, in order, until
       * `$.ui.invalidate("prompt.context")` or a re-read (compaction, `/clear`).
       *
       * @example
       * on("prompt.context", () => ({ blocks: [] }))
       */
      'prompt.context': PromptContextInput;
      /**
       * Fires once per tool, when the engine first renders the tool's schema for
       * the model in a session; `next(e)` resolves to `{ description }`.
       *
       * Rendered schemas are cached for the session until
       * `$.ui.invalidate("tool.describe")`: an unstable answer spends the model's
       * prompt cache on every call. A hook that fails passes it through.
       *
       * @example
       * on("tool.describe", { tool: "Bash" }, () => ({ description: "Shell." }))
       */
      'tool.describe': ToolDescribeInput;
      /**
       * Fires when the engine expands a skill's prompt for the model (`/name`,
       * the Skill tool, a preload); `next(e)` resolves to `{ text }` as computed.
       *
       * Return `{ text }` with the text the model reads instead. A hook that
       * fails passes it through.
       *
       * @example
       * on("skill.prompt", { skill: "commit" }, () => ({ text: "A haiku." }))
       */
      'skill.prompt': SkillPromptInput;
      /**
       * Fires when the engine composes a git text the model is to write (`kind`:
       * `commit`, `pr`, `exemption`, `remedy`); `next(e)` resolves to `{ text }`.
       *
       * Return `{ text }` with the text the model reads instead. A hook that
       * fails passes it through.
       *
       * @example
       * on("attribution.text", { kind: "commit" }, () => ({ text: "" }))
       */
      'attribution.text': AttributionTextInput;
      /**
       * Fires once per process, when the session is ready: `$` built, every hooks
       * module loaded, no prompt taken yet; `next(e)` resolves to `{ cwd }`.
       *
       * Observe: a different return changes nothing. The engine awaits the hooks
       * before the first prompt, so a `$.tool.register` awaited here is listed by
       * turn one. A `--resume`d process raises it too; `/clear` does not.
       *
       * @example
       * on("session.start", ($, e, next) => $.tool.register(t).then(() => next(e)))
       */
      'session.start': SessionStartInput;
      /**
       * Fires when a model turn begins, before its first model call; `next(e)`
       * resolves to `{ turnId }`. Observe: a different return changes nothing.
       */
      'turn.start': TurnStartInput;
      /**
       * Fires when one model response inside a turn is whole: at its first tool
       * result or at the turn's end. Observe: a different return changes nothing.
       *
       * Every intermediate response of the turn passes here; the last one is
       * followed by `turn.complete`.
       */
      'turn.step': TurnStepInput;
      /**
       * Fires when a model turn has ended, at the point its duration is reported;
       * `next(e)` resolves to `{ text }`, the answer. `e.reason` says why.
       *
       * Return `{ text }` with a different text to show it beneath the answer (a
       * synopsis, a TL;DR line); the transcript's record is never rewritten. A
       * hook that fails leaves the answer as it was.
       */
      'turn.complete': TurnCompleteInput;
      /**
       * Runs while `$` is being built, once per load or reload of this plugin
       * and before any other hook of it; `next(e)` resolves to `$` built so far.
       *
       * A step may ADD nouns and WITHHOLD nouns (leave one out, or return without
       * `next`); it may NOT REPLACE one another step added: the step fails, named
       * with both plugins. A step that fails unloads its plugin; `$` is rebuilt.
       */
      'engine.create': EngineCreateInput;
  };

  /**
   * `$`, the first parameter of every hook. Frozen; core's interface plus
   * every noun the plugins' `engine.create` steps added.
   *
   * Flat, `<noun>.<event>`; it does not carry `on`, since registration happens
   * before `$` exists. An interface so a plugin types the noun it provides by
   * declaration merging, the way a jQuery plugin types `$.fn`.
   *
   * @example
   * declare module "claude-code" { interface EngineInterface { voice: Voice } }
   */
  export interface EngineInterface extends CoreEngineInterface {
  }

  /**
   * What `next(e)` resolves to at `engine.create`: `$` as the steps beneath
   * built it, typed as `$` is, open to nouns no declaration names yet.
   *
   * A withheld noun is on it as a stub (a step inside withheld it, or the
   * last fold did and this is a reload), and the host refuses an op on one a
   * step outside withholds later; a typed module bootstraps at load on it.
   */
  export type EngineInterfaceBuilt = EngineInterface & {
      readonly [noun: string]: unknown;
  };

  /**
   * The engine's events' results.
   */
  export type EngineResultOf = {
      PreToolUse: PreToolUseResult;
      /**
       * `{ result, context? }`, `{ deny }`, or core's `{ ref, result }`.
       */
      'tool.call': ToolCallResult;
      /**
       * The tree to draw; `{ type: "engine", ref }` is core's own drawing.
       */
      'ui.render': RenderElement;
      /**
       * The surface's element table (Elements[e.surface]): constructors from props
       * to a RenderElement.
       */
      'ui.resolve': ElementTable;
      /**
       * `{ element }`: the element whose handler the press reached.
       */
      'ui.press': UiPressResult;
      /**
       * `{ offered }`.
       */
      'agent.offer': AgentOfferResult;
      /**
       * `{ model }` or `{ deny }`.
       */
      'agent.spawn': AgentSpawnResult;
      /**
       * `{ text, context? }` or `{ drop }`.
       */
      'prompt.submit': PromptSubmitResult;
      /**
       * `{ text }` (null leaves the section out).
       */
      'prompt.section': PromptSectionResult;
      /**
       * `{ blocks }` (a block left out is not sent).
       */
      'prompt.context': PromptContextResult;
      /**
       * `{ description }`.
       */
      'tool.describe': ToolDescribeResult;
      /**
       * `{ text }`.
       */
      'skill.prompt': SkillPromptResult;
      /**
       * `{ text }`.
       */
      'attribution.text': AttributionTextResult;
      /**
       * `{ cwd }`.
       */
      'session.start': SessionStartResult;
      /**
       * `{ turnId }`.
       */
      'turn.start': TurnStartResult;
      /**
       * `{ turnId, index }`.
       */
      'turn.step': TurnStepResult;
      /**
       * `{ text }`.
       */
      'turn.complete': TurnCompleteResult;
      /**
       * `$` as built so far, with this plugin's interface added and any it
       * withheld left out; `next(e)` resolves to EngineInterfaceBuilt.
       */
      'engine.create': EngineCreateResult;
  };

  /**
   * The events as calls on `$`, one signature each: `$.<noun>.<event>(input)`
   * takes the event's input and resolves to its result, from either side.
   *
   * The engine raises an event so (`$.tool.call(input)` in the tool runner); a
   * plugin's call reaches the same event with its own hooks skipped. `input`
   * may leave out what the engine fills (`tool_use_id`, `origin`, the parent).
   */
  export type EventCalls = {
      tool: {
          call: (input: ToolCallArgs) => Promise<ToolCallResult>;
          describe: (input: ToolDescribeInput) => Promise<ToolDescribeResult>;
      };
      prompt: {
          submit: (input: PromptSubmitArgs) => Promise<PromptSubmitResult>;
          section: (input: PromptSectionInput) => Promise<PromptSectionResult>;
          context: (input: PromptContextInput) => Promise<PromptContextResult>;
      };
      skill: {
          prompt: (input: SkillPromptInput) => Promise<SkillPromptResult>;
      };
      attribution: {
          text: (input: AttributionTextInput) => Promise<AttributionTextResult>;
      };
      agent: {
          offer: (input: AgentOfferInput) => Promise<AgentOfferResult>;
          spawn: (input: AgentSpawnArgs) => Promise<AgentSpawnResult>;
      };
      session: {
          start: (input: SessionStartInput) => Promise<SessionStartResult>;
      };
      turn: {
          start: (input: TurnStartInput) => Promise<TurnStartResult>;
          step: (input: TurnStepInput) => Promise<TurnStepResult>;
          complete: (input: TurnCompleteInput) => Promise<TurnCompleteResult>;
      };
      ui: {
          render: <C extends RenderComponent>(input: RenderInput<C>) => Promise<RenderElement>;
          resolve: <E extends RenderInput>(e: E) => Promise<Elements[E['surface']]>;
      };
  };

  /**
   * The name of an event: a key of EventOf.
   */
  export type EventName = keyof EventOf;

  /**
   * The argument of each event, by event name: what a hook receives as `e`
   * and what the call on `$` takes. Plain data, frozen to every depth.
   *
   * The events the engine raises (EngineEventOf) and the calls on `$` the host
   * serves (OpEventOf: a plugin's `$.fs.writeFile(...)` is a dispatch the hooks
   * above it see) make one table.
   */
  export type EventOf = EngineEventOf & OpEventOf;

  /**
   * The result of event `N`: what its hooks return and what their `next(e)`
   * resolves to.
   */
  export type EventResult<N extends EventName = EventName> = ResultOf[N];

  /**
   * The hook signature of each event, `($, e, next)`, as one mapped type over
   * EventOf.
   *
   * With one handler type per event, `Events[E]` for a generic E would be a
   * union; as one mapped type it stays a single function type and activate.ts
   * calls it without a cast (TS 4.6 correlated unions).
   *
   * @param $ the engine interface, frozen, the same object at every invocation;
   *   at `engine.create` the empty table, since `$` exists after the fold
   * @param e the event's argument, frozen to every depth (`e.command = "ls"`
   *   throws and fails the hook); a rewrite is a copy passed to `next`
   * @param next the rest of the chain; a chain a hook raises through `$` runs
   *   every other registered hook and skips this one (hooks-host/ HookOrigin)
   */
  export type Events = {
      [E in keyof EventOf]: ($: E extends 'engine.create' ? NoEngineInterface : EngineInterface, e: Args<E>, next: Next<E>) => EventResult<E> | Promise<EventResult<E>>;
  };

  /**
   * One file `$.fs.ancestors` found: the directory it stands in, the name it
   * was asked for by, and its text as the engine's memory loader reads it.
   */
  export type FsAncestor = {
      /**
       * The directory the file stands in, absolute.
       */
      dir: string;
      /**
       * The spelling the caller asked for it by.
       */
      name: string;
      /**
       * The file's text, with what its `@include`s bring after it.
       */
      content: string;
  };

  /**
   * The argument of `$.fs.ancestors`: the file names to look for in each
   * directory, and the file under the working directory to walk down to.
   */
  export type FsAncestorsRequest = {
      /**
       * Relative `.md` file names, each looked for in every directory.
       */
      names: readonly string[];
      /**
       * A path under the working directory: the walk goes on down to its
       * directory. Absent, the walk ends at the working directory.
       */
      of?: string;
  };

  /**
   * One entry of `$.fs.listDir`.
   */
  export type FsEntry = {
      /**
       * The entry's name (no directory part).
       */
      name: string;
      /**
       * `file`, `dir`, or `other`.
       */
      kind: 'file' | 'dir' | 'other';
      /**
       * Bytes, for a file.
       */
      size: number;
  };

  /**
   * What `$.fs.stat` resolves with.
   */
  export type FsStat = {
      /**
       * `file`, `dir`, or `other`.
       */
      kind: 'file' | 'dir' | 'other';
      /**
       * Bytes, for a file.
       */
      size: number;
      /**
       * Last modification, milliseconds since the epoch.
       */
      mtimeMs: number;
  };

  /**
   * One hook, `($, e, next)`, on event `E`.
   */
  export type Hook<E extends EventName = EventName> = Events[E];

  /**
   * The hook type per registrable name: each event's (Events) and `*`'s
   * (AnyEventHook), as one conditional type over the name.
   *
   * One type, so the two-argument `on` stays ONE generic signature: as an
   * overload set the language service offers no tool-name completions inside
   * `e.tool === "`; as an index into a table TS intersects every argument.
   */
  export type HookFor<E extends EventName | '*'> = E extends '*' ? AnyEventHook : Events[E & EventName];

  /**
   * What a hooks module exports: `register`, and nothing the loader reads
   * besides.
   */
  export type HooksModule = {
      register: Register;
  };

  /**
   * Options of `$.http.fetch`.
   */
  export type HttpInit = {
      /**
       * `GET` (default), `POST`, ...
       */
      method?: string;
      /**
       * Request headers.
       */
      headers?: Record<string, string>;
      /**
       * The request body, as text.
       */
      body?: string;
  };

  /**
   * What `$.http.fetch` resolves with.
   */
  export type HttpResponse = {
      /**
       * The HTTP status code.
       */
      status: number;
      /**
       * True for a 2xx status.
       */
      ok: boolean;
      /**
       * Response headers, lower-cased names.
       */
      headers: Record<string, string>;
      /**
       * The body, as text.
       */
      text: string;
  };

  /**
   * The keys of object pattern `P` that object member `E` cannot satisfy, `D`
   * levels down; `never` when there is none, which is what keeps the member.
   *
   * A key `E` does not have (an open record has every string key), or one
   * whose value `P` narrows to nothing.
   */
  type ImpossibleKeys<E, P, D extends readonly unknown[]> = {
      [K in keyof P]-?: K extends keyof E ? [NarrowedValue<Exclude<E[K], undefined>, P[K], D>] extends [never] ? K : never : K;
  }[keyof P];

  /**
   * What `$.ui.invalidate` takes: a render event, or one of the three events
   * whose answers the engine caches for the session.
   */
  export type InvalidatableEventName = RenderEventName | 'prompt.section' | 'prompt.context' | 'tool.describe';

  /**
   * Whether tag key `K` selects members of `I`: it does when each member gives
   * it ONE literal (`component: "ToolUse"` on the ToolUse variant).
   *
   * A key that is the same union on every member is a filter at runtime; it
   * is left out of the selection so that it cannot defeat the narrowing the
   * other keys give.
   */
  type IsDiscriminant<I, K> = I extends unknown ? K extends KnownKeys<I> ? IsSingleLiteral<I[K]> : true : never;

  /**
   * Whether `V` is made of literals only: `"a" | "b"` is, `string` is not.
   */
  type IsLiteralValued<V> = string extends V ? false : number extends V ? false : boolean extends V ? false : [V] extends [string | number | boolean] ? true : false;

  /**
   * Whether `V` is exactly one string, number or boolean literal.
   */
  type IsSingleLiteral<V> = [V] extends [string | number | boolean] ? IsUnion<V> extends true ? false : true : false;

  /**
   * Whether `T` is a union of two or more members.
   */
  type IsUnion<T, U = T> = T extends unknown ? [U] extends [T] ? false : true : never;

  /**
   * What `next` takes in a matched hook: the variants of `e` the matcher can
   * match (KeptMembers), as declared, so a rewrite of a pinned field passes.
   */
  type KeptEvent<E extends EventName | '*', M> = MatchedNames<E, M> extends infer N extends EventName ? N extends unknown ? KeptMembers<Args<N>, M> : never : never;

  /**
   * The members of the argument union `E` matcher `P` can match, as declared;
   * what `next` takes, so a rewrite may change a field the matcher pinned.
   *
   * A member is dropped when `P` names a key it lacks, or gives a key, at any
   * depth, a value none of that key's values can equal (ImpossibleKeys).
   */
  type KeptMembers<E, P> = E extends unknown ? [ImpossibleKeys<E, P, []>] extends [never] ? E : never : never;

  /**
   * The declared keys of `T`, the string and number index signatures left out.
   */
  type KnownKeys<T> = keyof {
      [K in keyof T as string extends K ? never : number extends K ? never : K]: 0;
  };

  /**
   * What a matcher value selects by: itself, or `unknown` for a RegExp, which
   * selects nothing.
   */
  type Literal<X> = X extends RegExp ? unknown : X;

  /**
   * The argument a matched hook receives: `e` narrowed by `M` (Narrowed), per
   * event the registration covers.
   */
  export type MatchedEvent<E extends EventName | '*', M> = MatchedNames<E, M> extends infer N extends EventName ? N extends unknown ? Narrowed<Args<N>, M> : never : never;

  /**
   * The hook `on(event, matcher, hook)` takes: `($, e, next)` with `e`
   * narrowed by the matcher (MatchedEvent), and a tagged result the same way.
   *
   * `next` takes the variants the matcher keeps, as declared (KeptEvent), so
   * `next(e)` passes and so does a rewrite of a pinned field; `next.is` names
   * the events the registration covers and narrows as the matcher does.
   */
  export type MatchedHook<E extends EventName | '*', M> = ($: EngineInterface, e: MatchedEvent<E, M>, next: Next<MatchedNames<E, M>, KeptEvent<E, M>, MatchedResult<E, M>, {
      [K in MatchedNames<E, M>]: Narrowed<Args<K>, M>;
  }>) => MatchedResult<E, M> | Promise<MatchedResult<E, M>>;

  /**
   * The events a matched registration on `E` covers: `E` itself, or for `*`
   * every event whose input has each key the matcher names.
   */
  type MatchedNames<E, M = never> = E extends '*' ? {
      [N in EventName]: [M] extends [never] ? N : keyof M extends AnyKeyOf<Args<N>> ? N : never;
  }[EventName] : E;

  /**
   * What a matched hook returns: the event's result, narrowed by `M` where the
   * result is a union tagged by the matcher's tag keys.
   */
  export type MatchedResult<E extends EventName | '*', M> = MatchedNames<E, M> extends infer N extends EventName ? N extends unknown ? Select<EventResult<N>, Selection<Args<N>, M>> : never : never;

  /**
   * What `on(event, matcher, hook)` takes for an argument of type `I`: the
   * shape of the `e` the hook wants, a partial of it at any depth.
   *
   * One partial per variant of `I`, so a literal on the discriminant
   * (`component: 'ToolGroup'`) has the keys beside it (`props`) checked
   * against that variant, and a misspelt nested key is a type error.
   */
  export type Matcher<I, All = I> = I extends unknown ? {
      readonly [K in KnownKeys<I>]?: MatcherValue<I[K], MatcherValueOf<All, K>>;
  } & (string extends keyof I ? OpenMatcher<I, All> : unknown) : never;

  /**
   * Any matcher at all, for a field typed `unknown` (a tool's input, a
   * result's output): the kinds the engine accepts, unchecked there.
   */
  type MatcherData = string | number | boolean | null | RegExp | readonly MatcherData[] | {
      readonly [key: string]: MatcherData;
  };

  /**
   * The declared keys of every variant of `I` (index signatures aside).
   */
  type MatcherKeys<I> = I extends unknown ? KnownKeys<I> : never;

  /**
   * What matches one value of type `V`: the value (or a RegExp, for a
   * string); for an object, a matcher of it; for `unknown`, any matcher.
   *
   * For an array, what matches one ELEMENT of it, since a pattern against an
   * array value holds when some element matches.
   */
  type MatcherOne<V> = unknown extends V ? MatcherData : V extends readonly (infer Item)[] ? MatcherOne<Item> : V extends string ? V | RegExp : V extends number | boolean | null ? V : V extends object ? Matcher<V> : V extends undefined ? never : unknown;

  /**
   * What a matcher gives a key whose value is `V` on this variant and `Across`
   * over every variant: one MatcherOne, or an array of them matched as one-of.
   *
   * The one-of is typed over every variant, so `{ tool: ['Bash', 'Read'] }`
   * types on the Bash variant; with a nested pattern beside it, the pattern is
   * checked against a variant the one-of names, not against each of them.
   */
  type MatcherValue<V, Across = V> = MatcherOne<V> | readonly MatcherOne<Across>[];

  /**
   * The type of key `K` across the variants of `I` that declare it.
   */
  type MatcherValueOf<I, K> = I extends unknown ? K extends KnownKeys<I> ? I[K] : never : never;

  /**
   * One block of an MCP result: `type` and the fields that kind of block carries.
   */
  export type McpContentBlock = {
      /**
       * The block's kind: `text`, `image`, `audio`, `resource`, `resource_link`.
       */
      type: string;
      /**
       * Set on a `text` block.
       */
      text?: string;
      /**
       * Set on a `resource_link` (or embedded `resource`) block.
       */
      uri?: string;
      /**
       * Declared by an image, audio or resource block.
       */
      mimeType?: string;
      [field: string]: unknown;
  };

  /**
   * The MCP branch: one variant per declared tool when McpToolInputs has
   * entries, else one loose variant over every `mcp__*` name.
   */
  export type McpToolCallInput = [keyof McpToolInputs] extends [never] ? McpToolCallInputFallback : {
      [N in keyof McpToolInputs & string]: ToolInputOf<N, McpToolInputs[N] & Record<string, unknown>>;
  }[keyof McpToolInputs & string];

  /**
   * The MCP branch's answer when no MCP tool is declared: every `mcp__*`
   * name, its args unconstrained.
   */
  type McpToolCallInputFallback = {
      /**
       * The name of the tool being called (`mcp__<server>__<tool>`); comparing
       * it narrows `e`. Reserved: a rewrite of it is ignored by core.
       */
      tool: McpToolName;
      /**
       * The tool_use block's id: the same at every event of the call and in
       * `$.ui.notice`. Reserved: a rewrite of it is ignored by core.
       */
      tool_use_id: string;
      [argument: string]: unknown;
  };

  /**
   * The inputs of the MCP tools this project knows, keyed by full tool name,
   * for declaration merging; empty by default, then every MCP tool is loose.
   *
   * A `.d.ts` in the plugin author's project (written by `/plugin-types <dir>`
   * from the connected servers' JSON Schemas, or by hand) adds entries under
   * `declare module "claude-code"`; `e.tool === <name>` then narrows to them.
   *
   * @example
   * interface McpToolInputs { "mcp__my_server__send": { to: string } }
   */
  export interface McpToolInputs {
  }

  /**
   * The name of an MCP tool as the engine spells it: `mcp__<server>__<tool>`.
   */
  export type McpToolName = `mcp__${string}__${string}`;

  /**
   * An MCP tools/call result as the SDK returns it, plain data.
   */
  export type McpToolResult = {
      /**
       * The result's content blocks, in order (text, image, resource,
       * resource_link, ...).
       */
      content: McpContentBlock[];
      /**
       * True when the server reported the call as failed; the blocks then describe
       * the error.
       */
      isError: boolean;
      /**
       * The server's structured result, when its tool declares an output schema.
       */
      structuredContent?: unknown;
  };

  /**
   * What `$.model.complete` takes.
   */
  export type ModelCompleteRequest = {
      /**
       * An alias (`haiku`) or a full model id; resolved and allowlist-checked like
       * a `--model` value.
       */
      model: string;
      /**
       * The one user message; the reply's text comes back.
       */
      prompt: string;
      /**
       * Precedes the completion as its system prompt, after the CLI's identity
       * block. Default none.
       */
      system?: string;
      /**
       * The reply's token cap. Default 256.
       */
      maxTokens?: number;
  };

  /**
   * What `$.model.fork` resolves to when the fork answered: the reply's text
   * and what the fork cost.
   */
  export type ModelForkReply = {
      /**
       * The non-error replies' text, joined by newlines.
       */
      text: string;
      /**
       * The fork's token counts, so a plugin can account for what it spent.
       */
      usage: ModelForkUsage;
  };

  /**
   * What `$.model.fork` takes.
   */
  export type ModelForkRequest = {
      /**
       * The one user message, appended to the session's own transcript.
       *
       * The reply's text and usage come back, or null on an API error or a cold
       * transcript.
       */
      prompt: string;
  };

  /**
   * What one fork cost, as the API counted it: the four token counts of the
   * fork's completions summed.
   */
  export type ModelForkUsage = {
      input_tokens: number;
      output_tokens: number;
      cache_read_input_tokens: number;
      cache_creation_input_tokens: number;
  };

  /**
   * How many object or array levels a matcher narrows `e` through, counted as
   * a tuple's length: the runtime's MATCH_DEPTH_LIMIT, which refuses deeper.
   *
   * Past it a field keeps its declared type; nothing becomes `any`.
   */
  type NarrowDepth = 8;

  /**
   * `e` in a matched hook: the members of the argument union `E` matcher `P`
   * can match, each with the keys `P` names narrowed to what a match implies.
   *
   * A scalar narrows to the literal, a one-of to what its alternatives give,
   * an object key recursively, an array some element of which must match to
   * a non-empty tuple; other keys, `unknown` and RegExp-matched fields keep.
   */
  export type Narrowed<E, P> = E extends unknown ? NarrowedMember<E, P, []> : never;

  /**
   * A value of declared type `V` under a one-of, folded over the tuple into
   * `Found`: the union of what each alternative narrows `V` to (NarrowedByOne).
   *
   * An alternative that cannot match adds nothing, so a one-of none of whose
   * alternatives can is `never`; a one-of typed as a plain array rather than
   * a tuple narrows by the union of its elements at once.
   */
  type NarrowedByAny<V, Alternatives extends readonly unknown[], D extends readonly unknown[], Found = never> = Alternatives extends readonly [infer First, ...infer Rest] ? NarrowedByAny<V, Rest, D, Found | NarrowedByOne<V, First, D>> : Alternatives extends readonly [] ? Found : Found | NarrowedByOne<V, Alternatives[number], D>;

  /**
   * A value of declared type `V` under one matcher node `Q` that is not a
   * one-of, member of `V` by member; a member that cannot match is `never`.
   *
   * An array some element of which must match becomes NonEmpty; a RegExp
   * keeps the member; an object pattern recurses into an object member, one
   * level down; a scalar keeps a member as narrow, and replaces a wider one.
   */
  type NarrowedByOne<V, Q, D extends readonly unknown[]> = V extends readonly (infer Item)[] ? [NarrowedValue<Item, Q, [...D, unknown]>] extends [never] ? never : NonEmpty<V, Item> : Q extends RegExp ? V : Q extends object ? V extends object ? NarrowedMember<V, Q, [...D, unknown]> : never : V extends Q ? V : Q extends V ? Q : never;

  /**
   * One object member `E` under object pattern `P`, `D` levels down: `never`
   * when a key of `P` is impossible on it (ImpossibleKeys), else `E` narrowed.
   *
   * Each key `P` names is narrowed (NarrowedValue); every other key, and each
   * key's optionality, stays as declared.
   */
  type NarrowedMember<E, P, D extends readonly unknown[]> = [
  ImpossibleKeys<E, P, D>
  ] extends [never] ? {
      [K in keyof E]: K extends keyof P ? NarrowedValue<E[K], P[K], D> : E[K];
  } : never;

  /**
   * A value of declared type `V` where the matcher gives `Q`, `D` levels
   * down: NarrowedByAny under a one-of (an array), NarrowedByOne otherwise.
   *
   * As declared once `D` reaches NarrowDepth, or for a field typed `unknown`
   * (a tool's input), which no pattern narrows.
   */
  type NarrowedValue<V, Q, D extends readonly unknown[]> = D['length'] extends NarrowDepth ? V : unknown extends V ? V : Q extends readonly unknown[] ? NarrowedByAny<V, Q, D> : NarrowedByOne<V, Q, D>;

  /**
   * The rest of the chain, as one hook receives it: made once per dispatch per
   * hook, frozen; `next(e)` resolves to the downstream result.
   *
   * Each call runs the hooks below again; core is the last, and below it `next`
   * rejects. Called with no argument it rejects, naming the hook. A hook that
   * returns without calling it ends the chain; returning nothing is a failure.
   *
   * @template S what `next.is(name, e)` narrows `e` to, per event: the event's
   *   argument, or, under a matcher, that argument narrowed by it (MatchedHook)
   */
  export type Next<N extends EventName = EventName, E = Args<N>, O = NextResult<N>, S extends {
      [K in N]?: unknown;
  } = {
      [K in N]: Args<K>;
  }> = {
      (e: E): Promise<O>;
      /**
       * Aborts when the call this dispatch belongs to is abandoned: the user
       * interrupted, a hook above settled first, or this hook ran out of budget.
       *
       * Anything the hook started (timers, requests) should stop on it. It is an
       * AbortSignal of the plugin's own environment, driven by the chain's.
       */
      readonly signal: AbortSignal;
      /**
       * Whether this dispatch is the event named `name`, as a type predicate on
       * `e`: in a `*` hook `if (next.is("tool.call", e))` narrows `e`.
       *
       * Under a matcher the narrowing includes it. `name` is one of the events
       * this hook covers (`N`); a name outside them is a compile error.
       */
      readonly is: <M extends N>(name: M, e: unknown) => e is S[M];
      /**
       * The name of this dispatch's event, as a value, for a `*` hook to log or
       * switch on.
       */
      readonly event: N;
      /**
       * Who raised this dispatch: the plugin whose hook made the `$` call, or
       * `"engine"` (a call site, the host's own fold).
       *
       * Set by the host alone, from the environment the call came from (its own
       * MessagePort); nothing a plugin writes into `e` reaches it. Every hook of
       * one dispatch sees the same origin, whatever event the caller was hooking.
       */
      readonly origin: string;
  };

  /**
   * What `next(e)` resolves to for event `N`: the event's result, except at
   * `engine.create`, where the steps beneath return `$` as built so far.
   *
   * A withheld noun is on that `$` as a stub, so the built table is typed
   * whole where what a hook returns (EngineCreateResult) is partial.
   */
  export type NextResult<N extends EventName> = N extends 'engine.create' ? EngineInterfaceBuilt : EventResult<N>;

  /**
   * The argument of a call on `$` that takes nothing (`$.session.cwd()`): an
   * object with no keys.
   */
  type NoArgs = Record<never, never>;

  /**
   * The calls on `$` whose argument is exactly NoArgs (`session.cwd`); their
   * overloads come last in StarOverloads.
   */
  type NoArgsEvent = {
      [N in OpEventName]: OpEventOf[N] extends NoArgs ? NoArgs extends OpEventOf[N] ? N : never : never;
  }[OpEventName];

  /**
   * What an `engine.create` hook receives as `$`: nothing. Every property
   * reads as `never`, so `$.model` inside the hook is a compile error.
   */
  export type NoEngineInterface = {
      readonly [noun: string]: never;
  };

  /**
   * Array type `V`, of element `Item`, once some element of it is known to
   * match: a tuple of at least one `Item`, readonly when `V` is.
   *
   * So `e` still passes wherever the declared array is taken; a `V` that is
   * already a non-empty tuple is kept as it is.
   */
  type NonEmpty<V, Item> = V extends readonly [unknown, ...unknown[]] ? V : V extends Item[] ? [Item, ...Item[]] : readonly [Item, ...Item[]];

  /**
   * Registers `hook` on the event named `event` (one plain hook per event per
   * plugin; `*` is every event), or, with a matcher, for the inputs it matches.
   *
   * Registrations of one plugin nest in registration order, first outermost;
   * registering an event or `*` twice throws. A matched registration is
   * `next(e)` on an input its matcher rules out, applied by the host first.
   */
  export type On = {
      <E extends EventName | '*'>(event: E, hook: HookFor<E>): void;
      <E extends EventName | '*', const M extends Matcher<Args<MatchedNames<E>>>>(event: E, matcher: M, hook: MatchedHook<E, M>): void;
  };

  /**
   * The keys a variant with a string index signature (an MCP tool's input)
   * takes beyond its own: another variant's key as typed there; others free.
   *
   * So a misspelt value for a key some variant declares (`command: 5`) is
   * refused on every variant, not admitted by the open one.
   */
  type OpenMatcher<I, All> = {
      readonly [K in Exclude<MatcherKeys<All>, KnownKeys<I>>]?: MatcherValue<MatcherValueOf<All, K>>;
  } & Readonly<Record<string, unknown>>;

  /**
   * The name of a call on `$` the host serves, as an event.
   */
  export type OpEventName = keyof OpEventOf;

  /**
   * The calls on `$` the host serves, as events: `e` is the call's argument as
   * it crosses to the host, and every one is hookable by name and by `on("*")`.
   *
   * A hook above the caller passes it on, rewrites it, refuses it with
   * `{ deny }` or answers with `{ value }`; core is the host's implementation.
   * The caller's own hooks are skipped, and `next.origin` names the caller.
   */
  export type OpEventOf = {
      /**
       * The argument of `$.model.complete(request)`.
       */
      'model.complete': ModelCompleteRequest;
      /**
       * The argument of `$.model.classify(text, labels, options)`.
       */
      'model.classify': {
          text: string;
          labels: readonly string[];
          options?: ClassifyOptions;
      };
      /**
       * The argument of `$.model.fork(request)`.
       */
      'model.fork': ModelForkRequest;
      /**
       * The clip and how to play it (`shouldLoop`, `gain`); the signal does not
       * cross.
       */
      'audio.play': {
          clip: AudioClip;
          shouldLoop: boolean;
          gain?: number;
      };
      /**
       * The argument of `$.audio.speak(text, { voice })`.
       */
      'audio.speak': SpeakRequest;
      /**
       * The argument of `$.mcp.call(server, tool, args)`.
       */
      'mcp.call': {
          server: string;
          tool: string;
          args: Record<string, unknown>;
      };
      /**
       * The argument of `$.session.cwd()`.
       */
      'session.cwd': NoArgs;
      /**
       * The argument of `$.session.model()`.
       */
      'session.model': NoArgs;
      /**
       * The argument of `$.session.turnCount()`.
       */
      'session.turnCount': NoArgs;
      /**
       * The argument of `$.session.id()`.
       */
      'session.id': NoArgs;
      /**
       * The argument of `$.session.messages()`.
       */
      'session.messages': NoArgs;
      /**
       * The argument of `$.session.repo()`.
       */
      'session.repo': NoArgs;
      /**
       * The argument of `$.session.surface()`.
       */
      'session.surface': NoArgs;
      /**
       * The argument of `$.turn.abort({ turnId })`.
       */
      'turn.abort': {
          turnId: string;
      };
      /**
       * The argument of `$.tool.list()`.
       */
      'tool.list': NoArgs;
      /**
       * The argument of `$.tool.register(spec)`.
       */
      'tool.register': {
          name: string;
          description: string;
          inputSchema: Record<string, unknown>;
      };
      /**
       * The argument of `$.agent.list()`.
       */
      'agent.list': NoArgs;
      /**
       * The argument of `$.ui.toast(text, { timeoutMs })`.
       */
      'ui.toast': {
          text: string;
          timeoutMs?: number;
      };
      /**
       * The argument of `$.ui.status(text)`; `text` undefined clears the line.
       */
      'ui.status': {
          text: string | undefined;
      };
      /**
       * The argument of `$.ui.log(text)`.
       */
      'ui.log': {
          text: string;
      };
      /**
       * The argument of `$.ui.notice(toolUseId, text)`.
       */
      'ui.notice': {
          toolUseId: string;
          text: string | undefined;
      };
      /**
       * The argument of `$.ui.invalidate(event)`.
       */
      'ui.invalidate': {
          event: InvalidatableEventName;
      };
      /**
       * The argument of `$.fs.readFile(path)`.
       */
      'fs.readFile': {
          path: string;
      };
      /**
       * The argument of `$.fs.writeFile(path, text)`.
       */
      'fs.writeFile': {
          path: string;
          text: string;
      };
      /**
       * The argument of `$.fs.listDir(path)`.
       */
      'fs.listDir': {
          path: string;
      };
      /**
       * The argument of `$.fs.exists(path)`.
       */
      'fs.exists': {
          path: string;
      };
      /**
       * The argument of `$.fs.stat(path)`.
       */
      'fs.stat': {
          path: string;
      };
      /**
       * The argument of `$.fs.ancestors({ names, of })`.
       */
      'fs.ancestors': FsAncestorsRequest;
      /**
       * The argument of `$.store.get(key)`.
       */
      'store.get': {
          key: string;
      };
      /**
       * The argument of `$.store.set(key, value)`.
       */
      'store.set': {
          key: string;
          value: unknown;
      };
      /**
       * The argument of `$.store.delete(key)`.
       */
      'store.delete': {
          key: string;
      };
      /**
       * The argument of `$.store.keys()`.
       */
      'store.keys': NoArgs;
      /**
       * The argument of `$.http.fetch(url, init)`.
       */
      'http.fetch': {
          url: string;
          init?: HttpInit;
      };
  };

  /**
   * The result of a call on `$` as its event's hooks see it: `{ value }` (the
   * call's answer) or `{ deny }`.
   */
  export type OpEventResult<N extends OpEventName = OpEventName> = {
      value: OpValueOf[N];
      deny?: undefined;
  } | {
      deny: string;
      value?: undefined;
  };

  /**
   * What each call on `$` answers (the `value` of its event's result), by event
   * name.
   */
  export type OpValueOf = {
      'model.complete': string;
      'model.classify': string | undefined;
      'model.fork': ModelForkReply | null;
      'audio.play': void;
      'audio.speak': SpeakResult;
      'mcp.call': McpToolResult;
      'session.cwd': string;
      'session.model': string;
      'session.turnCount': number;
      'session.id': string;
      'session.messages': SessionMessage[];
      'session.repo': SessionRepo | null;
      'session.surface': RenderSurface | null;
      'turn.abort': void;
      'tool.list': ToolInfo[];
      'tool.register': {
          tool: string;
      };
      'agent.list': AgentInfo[];
      'ui.toast': void;
      'ui.status': void;
      'ui.log': void;
      'ui.notice': void;
      'ui.invalidate': void;
      'fs.readFile': string;
      'fs.writeFile': void;
      'fs.listDir': FsEntry[];
      'fs.exists': boolean;
      'fs.stat': FsStat;
      'fs.ancestors': readonly FsAncestor[];
      'store.get': unknown;
      'store.set': void;
      'store.delete': void;
      'store.keys': string[];
      'http.fetch': HttpResponse;
  };

  /**
   * One call signature per event in `Names`, intersected into an overload set.
   */
  type Overloads<Names extends EventName> = UnionToIntersection<{
      [N in Names]: (e: Args<N>) => Promise<NextResult<N>>;
  }[Names]>;

  /**
   * How `$.audio.play` plays a clip: looped until `signal` aborts, or once.
   *
   * A loop needs the signal that ends it; a single play takes one as an option.
   */
  export type PlayOptions = {
      /**
       * Repeat the clip until `signal` aborts (the promise then resolves).
       */
      shouldLoop: true;
      /**
       * Linear gain, 0.4; default 1.
       */
      gain?: number;
      /**
       * Stops the clip: playback ends at once and the promise resolves.
       *
       * A page ramps the gain down over ~30 ms to avoid a click; from a
       * worker the abort crosses the boundary as a frame.
       */
      signal: AbortSignal;
  } | {
      /**
       * Play once.
       */
      shouldLoop?: false;
      /**
       * Linear gain, 0.4; default 1.
       */
      gain?: number;
      /**
       * Stops the clip early, as above.
       */
      signal?: AbortSignal;
  };

  /**
   * A plugin's options as `register(on, options)` receives them: the values of
   * the fields its manifest's `userConfig` declares, defaults filled in.
   *
   * Stored in settings.json `pluginConfigs[<plugin>].options` (sensitive ones
   * in secure storage), validated against the declared `type` before the module
   * loads; a required field with no value fails the load, naming the field. A
   * `--plugin-dir` plugin's key is `<name>@inline`, its name from plugin.json.
   */
  export type PluginOptions = Readonly<Record<string, string | number | boolean | readonly string[]>>;

  /**
   * The decision of a `PreToolUse` result: `allow`, `ask`, `deny`, or none.
   */
  export type PreToolUseDecision = {
      /**
       * Lets the call run without a permission prompt (the managed-settings
       * hooks ran first; a deny from them ended the chain above).
       */
      allow: true;
      ask?: undefined;
      deny?: undefined;
  } | {
      /**
       * Asks the user before the call runs; the text is shown as the reason.
       */
      ask: string;
      allow?: undefined;
      deny?: undefined;
  } | {
      /**
       * Refuses the call; the model receives the text as the reason.
       */
      deny: string;
      allow?: undefined;
      ask?: undefined;
  } | {
      allow?: undefined;
      ask?: undefined;
      deny?: undefined;
  };

  /**
   * What a `PreToolUse` hook returns: one of `allow`, `ask`, `deny`, or none
   * of them, which passes the call on to the normal permission flow.
   */
  export type PreToolUseResult = PreToolUseDecision & {
      /**
       * Replaces the tool's arguments; validated against the tool's schema before
       * the tool runs.
       */
      updatedInput?: Record<string, unknown>;
      /**
       * Extra context handed to the model with the call, one entry per note.
       */
      additionalContext?: string[];
  };

  /**
   * A pasted or attached non-text item of a prompt; its kind, never its bytes.
   */
  export type PromptAttachment = {
      /**
       * The item's kind.
       */
      type: 'image' | 'audio' | 'document';
      /**
       * The item's MIME type (`image/png`), when known.
       */
      mediaType?: string;
      /**
       * The pasted file's name, when it had one.
       */
      filename?: string;
  };

  /**
   * One block of the context the first user message carries: a name the
   * engine keys it by and the text under it.
   */
  export type PromptContextBlock = {
      /**
       * The key the block renders under (`# name`): `claudeMd`, `userEmail`,
       * `attachedProject`, `currentDate`, or a plugin's own.
       *
       * The field a matcher narrows on; unique among one context's blocks.
       */
      name: string;
      /**
       * The block's text; `claudeMd`'s is the instruction files framed as the
       * engine frames them, empty when it announces none.
       */
      text: string;
  };

  /**
   * The context blocks of a conversation's first user message, in the order
   * the engine renders them: what `prompt.context` takes and answers alike.
   */
  export type PromptContextBlocks = {
      /**
       * From core: `claudeMd` (when instruction files are loaded), `userEmail`,
       * `attachedProject`, `currentDate`, each only when present.
       */
      blocks: readonly PromptContextBlock[];
  };

  /**
   * The input of `prompt.context`: the context blocks the engine prepends to
   * a conversation's first user message, at the moment it computes them.
   */
  export type PromptContextInput = PromptContextBlocks;

  /**
   * What a `prompt.context` hook returns: the blocks the conversation
   * carries, in order; one left out is not sent.
   */
  export type PromptContextResult = PromptContextBlocks;

  /**
   * Where a `prompt.submit` submission came from, as the engine knows it at
   * the site it was queued from; a closed set, never a text prefix.
   *
   * A hooks module reads `e.origin.kind` to tell the user's own Enter from a
   * notification, a peer session, a schedule or another plugin. `next(e)`
   * passes it on as received; an answer may leave it out; no hook sets one.
   */
  export type PromptOrigin = {
      /**
       * The user's own gesture at the terminal, as the engine stamped it
       * (never presumed from an unstamped command).
       *
       * Enter at the prompt, typed or queued, or a click on a transcript
       * link; a channel the engine cannot attest (a same-user socket) is
       * never stamped, and arrives as `unclassified`.
       */
      kind: 'composer';
  } | {
      /**
       * The user's message through the Remote Control bridge (a phone or
       * web client).
       */
      kind: 'bridge';
  } | {
      /**
       * The SDK host's own turn (`claude -p`, the Agent SDK), not typed at
       * a terminal.
       */
      kind: 'sdk';
  } | {
      /**
       * A background task's notification, dequeued when the session went
       * idle.
       */
      kind: 'task-notification';
  } | {
      /**
       * A scheduled task, routine or /loop firing its stored prompt.
       */
      kind: 'scheduled-trigger';
  } | {
      /**
       * Another Claude session's message ("Another Claude session sent a
       * message").
       */
      kind: 'peer';
  } | {
      /**
       * A coordinator co-member's SendMessage delivery, model-authored and
       * framed as a notification.
       */
      kind: 'peer-send-message';
  } | {
      /**
       * A delivery a coordinator session composed for one of its threads.
       */
      kind: 'projects-relay';
  } | {
      /**
       * A message from a channel an MCP server relays (Slack, Telegram).
       */
      kind: 'channel';
      /**
       * The channel server's name.
       */
      server: string;
  } | {
      /**
       * The coordinator session's hand-off to a worker.
       */
      kind: 'coordinator';
  } | {
      /**
       * A background observer agent's report to the agent it observes.
       */
      kind: 'observer';
  } | {
      /**
       * An activity digest delivered to an observer agent.
       */
      kind: 'observer-activity';
  } | {
      /**
       * A programmatic follow-up to a user's UI action (an ultraplan
       * implement), user-initiated but not typed this turn.
       */
      kind: 'auto-continuation';
  } | {
      /**
       * A turn with no provenance the engine can name: one the ingress
       * could not classify, or a command queued with no stamp at all.
       *
       * An idle notice or a delivery receipt the engine queued isMeta with
       * no stamp is one too; the engine frames that shape as a non-user
       * source.
       */
      kind: 'unclassified';
  } | {
      /**
       * The session's owner pinging it from Slack.
       */
      kind: 'slack-ping';
  } | {
      /**
       * A plugin's `$.prompt.submit`; the model reads the prompt under the
       * plugin's name unless a hook leaves the origin out of its answer.
       */
      kind: 'plugin';
      /**
       * The submitting plugin's name.
       */
      name: string;
  };

  /**
   * The input of `prompt.section`: one named section of the system prompt, at
   * the moment the engine assembles it.
   */
  export type PromptSectionInput = {
      /**
       * As the engine names the section (`env_info_simple`, `memory`, ...); the
       * key a matcher narrows on.
       */
      name: string;
      /**
       * The section's text as core computed it, or null when core omits it.
       */
      text: string | null;
  };

  /**
   * What a `prompt.section` hook returns: the text the prompt carries for that
   * section, or null to leave it out.
   */
  export type PromptSectionResult = {
      text: string | null;
  };

  /**
   * `prompt.submit`'s input as a plugin's call takes it: `origin`, `turnId`
   * and `wait` are the engine's to set.
   *
   * `origin` is the calling plugin's name; `turnId` is the turn a prompt typed
   * mid-turn ran over; `wait` is false, as a plugin's prompt runs once idle.
   */
  export type PromptSubmitArgs = Omit<PromptSubmitInput, 'origin' | 'turnId' | 'wait'>;

  /**
   * The input of `prompt.submit` (prompt-submit/): the prompt as typed, after
   * the input became a user message and before the turn starts.
   */
  export type PromptSubmitInput = {
      /**
       * The prompt's text as it will reach the model (pastes already expanded).
       */
      text: string;
      /**
       * Present only when the submission carried images or other non-text items.
       */
      attachments?: readonly PromptAttachment[];
      /**
       * The id of the model turn that was running when the user typed the prompt
       * (`turn.start`'s `turnId`): the prompt was submitted over that turn.
       *
       * Absent for a prompt typed while the session was idle, and for a prompt a
       * plugin submitted (`$.prompt.submit`), which runs once the session is idle.
       */
      turnId?: string;
      /**
       * Whether the user asked the prompt to wait its turn (`chat:queueSubmit`,
       * `ctrl+x enter` by default): true for that submission, false otherwise.
       *
       * The engine queues every prompt typed mid-turn either way; the flag is
       * for hooks, so one that cancels the running turn on a plain Enter can
       * leave a waiting prompt alone. False for a prompt a plugin submitted.
       */
      wait: boolean;
      /**
       * Where the submission came from (PromptOrigin), set by the engine where
       * it was queued: the user's Enter, a notification, a peer, a plugin.
       *
       * `next(e)` passes it on as received; a hook that wants the prompt to
       * proceed as the user's own answers `{ text }` without it. No hook may
       * set one.
       */
      origin: PromptOrigin;
  };

  /**
   * What a `prompt.submit` hook returns and what `next(e)` resolves to: the
   * prompt that proceeds, `{ text, context?, origin? }`, or `{ drop: reason }`.
   */
  export type PromptSubmitResult = {
      /**
       * The prompt the turn proceeds with; from core, the text as the chain
       * left it.
       */
      text: string;
      /**
       * What the model reads beside the prompt and the user never sees: each
       * entry one block, attached after the prompt as typed. From core, none.
       *
       * A hook adds to the context its `next` gave it (`{ ...r, context:
       * [...(r.context ?? []), mine] }`); it may not leave an entry out. The
       * context is capped whole as a text is (PROMPT_TEXT_MAX), no entry empty.
       */
      context?: readonly string[];
      /**
       * Where the prompt proceeds from: from core, `e.origin` as received;
       * absent, the prompt is the user's own (no plugin's name on it).
       *
       * A hook may put back the origin it received (`{ ...r, origin:
       * e.origin }`) over a hook below that left it out; it may not set
       * another.
       */
      origin?: PromptOrigin;
      drop?: undefined;
  } | {
      /**
       * Stops the turn before the model runs: the prompt is not sent and the
       * text is shown to the user as the reason.
       */
      drop: string;
      text?: undefined;
      context?: undefined;
      origin?: undefined;
  };

  /**
   * The hooks module's entry: `export function register(on, options)`. `on`
   * registers hooks; `options` is the plugin's configuration (PluginOptions).
   *
   * The options are fixed for this activation: a change to them reloads the
   * plugin and `register` runs again with the new object. Hooks close over it.
   *
   * @example
   * on("tool.call", ($, e, next) => e.tool === "Bash" ? { deny: "no" } : next(e))
   */
  export type Register = (on: On, options: PluginOptions) => void | Promise<void>;

  /**
   * How a site instance asks for its `ui.render` answer: the version it is
   * on, whether a static frame is drawing, and whose submit it serves.
   */
  export type RenderAnswerOptions = {
      version: number;
      staticFrame: boolean;
      submittedBy?: string;
  };

  /**
   * Everything `ui.render` can draw: one name per component that has a render
   * site (render-site/); a matcher narrows on it.
   *
   * The permission dialog is drawn by the engine alone, since its answer
   * authorises an action; a plugin adds context with `$.ui.notice`.
   */
  export type RenderComponent = 'AskUserQuestion' | 'UserMessage' | 'AssistantMessage' | 'ToolUse' | 'ToolResult' | 'ToolGroup' | 'Spinner' | 'TurnDuration' | 'InfoNotice' | 'SessionMode' | 'PromptHint' | 'AbovePrompt';

  /**
   * What a render hook returns, and what `next(e)` resolves to: a plain-data
   * tree of elements, strings allowed as children of Text and Box.
   *
   * Props are an allowlisted subset of Ink's Box/Text props (render-site/
   * RENDER_PROPS); a tree with any other prop fails validation as a whole and
   * the engine's own component is drawn with the original props.
   */
  export type RenderElement = {
      /**
       * `Box` (layout), `Text` (a styled string), or `div`, `span`, `b` (the
       * DOM vocabulary); each surface draws all five natively.
       *
       * The terminal draws the DOM three as Box and Text, reading a `style`
       * string's color, bold, italic and underline; a desktop surface draws
       * Box and Text as a flex div and a styled span.
       */
      type: 'Box' | 'Text' | 'div' | 'span' | 'b';
      /**
       * Layout, margin, padding and border props on Box; color and style
       * props on Text; on div/span/b only `style`, a CSS declaration string.
       *
       * The string may not hold url(), expression() or @import; an `on*`
       * handler, as any prop outside the allowlist, fails the whole tree.
       */
      props?: Record<string, string | number | boolean>;
      /**
       * In order: elements, and strings inside Text (or inside Box, where core
       * wraps each in a Text). Engine nodes may not sit inside Text.
       */
      children?: RenderNode[];
  } | {
      /**
       * A button: the surface draws it as a real button and a click on it
       * raises `ui.press` with `e = { plugin, element, component, surface }`.
       *
       * The `onPress` closure a hook wrote stays in the plugin's own
       * environment under `press.handle`; the host holds the handle for the
       * lifetime of the drawing. A leaf: no children.
       */
      type: 'Button';
      props: {
          /**
           * The element's address: what `e.element` carries and what a matcher
           * names (`{ element: "explain" }`).
           */
          key: string;
          /**
           * The text drawn on the button.
           */
          label: string;
          /**
           * A digit (`"1"`) that presses it from the keyboard where the site
           * honours one. Letters are refused.
           *
           * A bare digit typed into an empty composer, the way a survey is
           * answered; with text in the composer the digit types.
           */
          hotkey?: string;
          /**
           * Drawn without chrome: the hotkey in the accent color, a colon,
           * then the label (`1: Yes`), as a survey's row reads.
           *
           * In JSX the label may be the one string child
           * (`<Button hotkey="1" plain onPress={...}>Yes</Button>`); the key
           * defaults to the label.
           */
          plain?: true;
      };
      /**
       * Where the handler lives: the plugin whose hook drew the element, and
       * the handle its environment keeps the `onPress` closure under.
       *
       * The runtime stamps the plugin as the tree leaves that hook.
       */
      press: {
          plugin: string;
          handle: number;
      };
  } | {
      /**
       * A vector drawing, the desktop surface's alone: the SVG markup is the
       * element's data, drawn in an isolated box, never as part of the page.
       *
       * A leaf: hooks above wrap or replace it whole, nothing reaches inside;
       * a press other plugins should see goes on an enclosing Button. On a
       * surface whose table lacks it the tree is refused (validateTree).
       */
      type: 'Svg';
      props: SvgProps;
      children?: undefined;
  } | {
      /**
       * The component core draws itself, with the props held under `ref`.
       */
      type: 'engine';
      /**
       * Which drawing: the number core answered from `next(e)`, under which
       * it holds the props it received; 0 draws the original props.
       */
      ref: number;
  };

  /**
   * The render event: `ui.render`, one event for every component that has a
   * render site.
   */
  export type RenderEventName = 'ui.render';

  /**
   * The input of `ui.render`: a union discriminated by `component`, one member
   * per RenderComponent and per RenderSurface.
   */
  export type RenderInput<C extends RenderComponent = RenderComponent, P extends RenderSurface = RenderSurface> = C extends RenderComponent ? P extends RenderSurface ? RenderInputOf<C, P> : never : never;

  /**
   * One `ui.render` input, for a component narrowed to one surface.
   */
  export type RenderInputOf<C extends RenderComponent, P extends RenderSurface> = {
      /**
       * Where the component is drawn; one literal per member, so
       * `if (e.surface === "terminal")` narrows `e` and `$.ui.resolve(e)`.
       */
      surface: P;
      /**
       * Which component this instance is; the key a matcher narrows on.
       */
      component: C;
      /**
       * The instance: the tool_use_id for a dialog or tool row, the message id
       * for a message, the agent id for a spinner.
       *
       * Two drawings of one component are two instances.
       */
      requestId: string;
      /**
       * The size of what the surface draws into, in character cells: on the
       * terminal, the interactive screen's size, where a change of width re-draws
       * every hooked site once the resize settles (a hook that sized its tree to
       * `columns` runs again); on a DOM surface, what the page reported. Absent
       * where no surface has measured. Part of the envelope: a rewrite keeps it.
       */
      viewport?: RenderViewport;
      /**
       * The component's plain-data props.
       */
      props: RenderPropsOf[C];
  };

  /**
   * A node of a render tree: an element, or a string (text).
   */
  export type RenderNode = RenderElement | string;

  /**
   * The plain-data props of each renderable component, as `ui.render` sees
   * them under `e.props`; a hook rewrites them with `next({ ...e, props })`.
   *
   * A rewrite is validated by the component and an invalid one draws the
   * original. This table is the plugin-facing render contract: the terminal
   * and the Code session renderer draw these components from these props.
   */
  export type RenderPropsOf = {
      /**
       * The dialog the AskUserQuestion tool opens.
       */
      AskUserQuestion: {
          /**
           * The name of the tool whose call opened the dialog (`AskUserQuestion`).
           */
          toolName: string;
          /**
           * The tool's `questions` input, as the dialog will draw them; a rewrite
           * must still fit the tool's schema or the original is drawn.
           */
          questions: unknown[];
          /**
           * The call's `metadata.source` (who asked; `remember` for /remember) when
           * the model gave one. Analytics only; never drawn.
           */
          metadataSource?: string;
      };
      /**
       * The user's own prompt in the transcript (the `> ...` row); a rewrite is
       * drawn there and nowhere else (the stored message is untouched).
       */
      UserMessage: {
          /**
           * The prompt's text, as the row draws it.
           */
          text: string;
          /**
           * Where the stored message came from, as `prompt.submit` named it
           * (PromptOrigin): the composer's, a peer's, a notification's, a plugin's.
           *
           * Read-only: a rewrite carries it on as received; one that changes or
           * drops it is refused and the engine draws its own row.
           */
          origin: PromptOrigin;
      };
      /**
       * One text block of an assistant reply in the transcript; a rewrite
       * changes the drawing and leaves the stored message alone (ctrl+o).
       */
      AssistantMessage: {
          /**
           * The block's text, markdown, as the transcript will draw it.
           */
          text: string;
          /**
           * True on the block that draws the bullet opening a reply.
           */
          firstOfReply: boolean;
      };
      /**
       * A tool call's row in the transcript (`Bash(ls -la)` and its result); the
       * call was decided by `tool.call`, so a rewrite here changes the row alone.
       */
      ToolUse: {
          /**
           * The tool's name as the row draws it (`Bash`, `Read`, a plugin's tool).
           */
          toolName: string;
          /**
           * The call's input, as the model sent it.
           */
          input: unknown;
          /**
           * True while the call is still running.
           */
          running: boolean;
          /**
           * True when the call ended in an error (a refusal at the dialog is one).
           */
          errored: boolean;
          /**
           * True when an abort ended the call: the user's Esc or a plugin's
           * `$.turn.abort` cut it while it ran, or dropped it before it ran.
           *
           * The row draws `Interrupted` for it, as the transcript marker does.
           */
          interrupted: boolean;
          /**
           * The stored result once the call has resolved (`{ stdout, stderr, ... }`
           * for Bash); undefined while it runs.
           *
           * For a call that errored, was refused or an abort cut, it is the text
           * the model read (an `interrupted` call: the abort's own). An expanded
           * group's rows draw it inline; a standalone row's is its own `ToolResult`.
           */
          output?: unknown;
      };
      /**
       * The result block drawn under a standalone tool row in the transcript,
       * which the tool's own result renderer draws from `output`.
       *
       * A rewrite of `output` is checked against the tool's output schema (one
       * that does not fit draws nothing; one the renderer cannot read hits the
       * row's error boundary). The stored result is untouched.
       */
      ToolResult: {
          /**
           * The tool the result belongs to (`Bash`, `Read`, a plugin's tool).
           * Read-only.
           */
          toolName: string;
          /**
           * The tool's own result object (`{ stdout, stderr, interrupted, ... }` for
           * Bash), the same one `ToolUse.output` carries; a rewrite is drawn.
           */
          output: unknown;
          /**
           * True when the call ended in an error, which draws the error text and not
           * `output`. Read-only.
           */
          errored: boolean;
      };
      /**
       * A run of tool calls the transcript folds into one count line (`Read 3
       * files, ran 2 shell commands`): reads, searches, listings.
       *
       * A hook that sets `expanded` unfolds the group where it is, and each row
       * it unfolds into is a `ToolUse` drawing a `ToolUse` hook then sees.
       */
      ToolGroup: {
          /**
           * In the order the model made them.
           */
          calls: ReadonlyArray<ToolGroupCall>;
          /**
           * True while the group is the live one: a call in it may still be
           * running and the model's next call may join it.
           */
          active: boolean;
          /**
           * Whether each call draws as its own `ToolUse` row (true under
           * `--verbose` and in the ctrl+o transcript) or the group draws one line.
           *
           * The one prop of the three a rewrite changes on the screen.
           */
          expanded: boolean;
      };
      /**
       * The line that animates while a turn runs (`Sauteing... (12s, 300
       * tokens)`). Terminal only: the Code session renderer draws its own.
       */
      Spinner: {
          /**
           * Animated by the line (`Sauteing`), as sampled for this turn.
           */
          word: string;
          /**
           * The text drawn instead of the word while a state overrides it, else null.
           */
          message: string | null;
          /**
           * What the turn is doing.
           */
          mode: 'requesting' | 'responding' | 'thinking' | 'tool-input' | 'tool-use';
      };
      /**
       * The line that closes a turn in the transcript (`Baked for 3s`).
       * Terminal only: the Code session renderer draws its own footer.
       */
      TurnDuration: {
          /**
           * The past-tense word the line drew (`Baked`), as sampled for this line.
           */
          word: string;
          /**
           * The turn's duration in milliseconds, as the line formats it (`3s`,
           * `1m 4s`).
           */
          durationMs: number;
      };
      /**
       * One dim status line under the logo (the model source, an experiment
       * enrollment, a settings hint), with a trailing `/command`. Terminal only.
       */
      InfoNotice: {
          /**
           * The notice's text, flattened to one string.
           */
          text: string;
          /**
           * The slash command appended after the text, or null when the notice has
           * none.
           */
          command: string | null;
      };
      /**
       * The dim mode labels at the right of the prompt footer (`focus`, `memory
       * paused`), joined by ` & `. One instance; terminal only.
       *
       * A hook adds a mode by rewriting `modes`, removes one by filtering, or
       * draws its own tree.
       */
      SessionMode: {
          /**
           * The labels the footer shows, in order; empty when there are none.
           */
          modes: readonly string[];
      };
      /**
       * The dim hint line under the prompt (`? for shortcuts`, `esc to
       * interrupt`, the pills beside them). One instance; terminal only.
       *
       * A hook rewrites `hint` and the rewrite is drawn in the line's place, or
       * draws its own tree; `isDraft` and `isWorking` say what the line is for.
       */
      PromptHint: {
          /**
           * True while the prompt holds typed text. Read-only.
           */
          isDraft: boolean;
          /**
           * True while a model turn is running. Read-only.
           */
          isWorking: boolean;
          /**
           * The line's text as the engine draws it; one string, so a rewrite
           * replaces the line.
           *
           * Read from the drawn line the way the screen reader reads it, one space
           * between parts.
           */
          hint: string;
      };
      /**
       * The band directly above the prompt input, where the surveys draw; the
       * engine draws nothing of its own here.
       *
       * A hook draws a tree, or passes. One instance; terminal only.
       */
      AbovePrompt: {
          /**
           * True while a survey holds the band; a hook yields to it. Read-only.
           */
          hasSurvey: boolean;
          /**
           * True while a model turn is running. Read-only.
           */
          isWorking: boolean;
      };
  };

  /**
   * What a `ui.render` hook returns and what `next(e)` resolves to: a
   * RenderElement tree, the same for every component.
   */
  export type RenderResultOf = {
      [C in RenderComponent]: RenderElement;
  };

  /**
   * Where a render event's component is drawn: `terminal` is Ink, which draws
   * the hook's whole tree; `desktop` is a surface that draws its own DOM.
   *
   * The desktop surface (the Code session renderer) draws with the props the
   * hook handed core and draws the tree as DOM where it has a slot for it. The
   * two surfaces share one dispatch per draw: `surface` names who asked first.
   */
  export type RenderSurface = 'terminal' | 'desktop';

  /**
   * The size of what a surface draws into, in character cells of the
   * surface's monospace metric: on the terminal, the screen's columns and
   * rows; on a DOM surface, the pane's width and height divided by the
   * advance and line height of its code font. A pixel-sized companion
   * arrives with the first element that lays out in pixels; until then
   * every element on every surface is cell-based, and so is this.
   */
  export type RenderViewport = {
      /**
       * Cells across. A tree wider than this wraps or truncates, as its Text
       * props say.
       */
      columns: number;
      /**
       * Cells down the whole surface, not the room left for this component.
       * Informational: a change of height alone re-draws nothing and keys no
       * new evaluation, so a hook reads it as of the last width or props change.
       */
      rows: number;
  };

  /**
   * What each event's hook returns, and what its `next(e)` resolves to, by event
   * name.
   */
  export type ResultOf = EngineResultOf & {
      [N in OpEventName]: OpEventResult<N>;
  };

  /**
   * The members of `T` assignable to `S`; all of `T` when none is.
   */
  type Select<T, S> = [Extract<T, S>] extends [never] ? T : Extract<T, S>;

  /**
   * The literal each tag key of `I` is held to by matcher `M`: one-of arrays
   * flattened, RegExps widened to `unknown`.
   */
  type Selection<I, M> = {
      [K in keyof M & TagKeys<I>]: Literal<M[K] extends readonly (infer One)[] ? One : M[K]>;
  };

  /**
   * One message of the transcript as `$.session.messages()` returns it.
   */
  export type SessionMessage = {
      /**
       * Who wrote it.
       */
      role: 'user' | 'assistant';
      /**
       * Its text blocks joined; '' when it has none.
       */
      text: string;
      /**
       * The tool_use blocks of an assistant message: `{ id, name, input }`.
       */
      toolUses: ToolUseSummary[];
      /**
       * The tool_result blocks of a user message: `{ id, text, isError }`.
       */
      toolResults?: ToolResultSummary[];
  };

  /**
   * What `$.session.repo()` answers: the repository's root and its origin remote,
   * when the session is in one.
   */
  export type SessionRepo = {
      /**
       * The repository's root, absolute: the main working tree's for a worktree.
       */
      root: string;
      /**
       * The `origin` remote's URL as git has it (push URL preferred), or null when
       * the repository has none.
       */
      remote: string | null;
      /**
       * Whether the remote is one of the repositories this build treats as its
       * own; false in a build that has none or when the remote is unrecognized.
       *
       * The engine matches the build's own list of repositories with its
       * hardened remote parser. A plugin reads this to behave differently in a
       * public repository; which repositories are the build's is its to say.
       */
      internal: boolean;
      /**
       * The repository the allowlist matched, as `owner/name`; null when
       * `internal` is false.
       *
       * A working copy without a remote that the engine still recognises is
       * named by its own checkout configuration; a remote's name is its path.
       */
      name: string | null;
  };

  /**
   * The input of `session.start`: the session the process starts with, read the
   * way `$.session` reads it at that moment.
   */
  export type SessionStartInput = {
      /**
       * The directory the session runs in, absolute (`$.session.cwd()`).
       */
      cwd: string;
      /**
       * Where the session draws (`$.session.surface()`): `terminal` under the
       * REPL; null for a `-p` run or the SDK, which draw nowhere at start.
       */
      surface: RenderSurface | null;
      /**
       * Whether a person is at the prompt: true under the REPL, false for a `-p`
       * run or the SDK.
       */
      interactive: boolean;
  };

  /**
   * What a `session.start` hook returns and what `next(e)` resolves to:
   * `{ cwd }`, echoed by core; a hook's own value does not change the session.
   */
  export type SessionStartResult = {
      cwd: string;
  };

  /**
   * The input of `skill.prompt`: one skill's prompt, at the moment the engine
   * expanded it for the model.
   *
   * Typed as `/name`, called through the Skill tool, or preloaded into a
   * subagent: the same event at each.
   */
  export type SkillPromptInput = {
      /**
       * Which skill (`commit`); the key a matcher narrows on.
       */
      skill: string;
      /**
       * The prompt's text as the skill computed it (its text blocks, joined).
       */
      text: string;
  };

  /**
   * What a `skill.prompt` hook returns: the text the model reads for that
   * skill.
   */
  export type SkillPromptResult = {
      text: string;
  };

  /**
   * Options of `$.clock.sleep`.
   */
  export type SleepOptions = {
      /**
       * Aborting it rejects the sleep at once.
       */
      signal?: AbortSignal;
  };

  /**
   * Options of `$.audio.speak`.
   */
  export type SpeakOptions = {
      /**
       * The system voice's exact name as the platform lists it (`Samantha`, or the
       * name of a voice you installed). Absent: the synthesizer's default voice.
       */
      voice?: string;
  };

  /**
   * `$.audio.speak` as it crosses the worker boundary (protocol/ OpRequest).
   */
  type SpeakRequest = SpeakOptions & {
      /**
       * What to say, as plain text, of at most UI_TEXT_MAX characters.
       */
      text: string;
  };

  /**
   * What `$.audio.speak` resolves with once the utterance has ended.
   */
  export type SpeakResult = {
      /**
       * Which synthesizer spoke: `system`, the platform's own (speechSynthesis in a
       * page, `say` on macOS).
       */
      via: 'system';
  };

  /**
   * `next` in a `*` hook: the set of events is open at runtime, so `e` is
   * `unknown` until `next.is(name, e)` narrows it to an event this plugin knows.
   *
   * The callable is an overload per known event (StarOverloads), then
   * `(e: unknown) => Promise<unknown>` last: `next(e)` with `e` still unknown
   * resolves to `unknown`.
   */
  export type StarNext = StarOverloads & {
      (e: unknown): Promise<unknown>;
      readonly signal: AbortSignal;
      readonly is: <M extends EventName>(name: M, e: unknown) => e is Args<M>;
      readonly event: EventName;
      readonly origin: string;
  };

  /**
   * One call signature per event `*` fans out to (every event but the settings
   * hooks' `PreToolUse`), intersected: an overload set from EventOf and ResultOf.
   *
   * `turn.abort` comes after the rest: every turn event's argument carries a
   * `turnId`, so its overload would take theirs. The NoArgs events come last:
   * an object of any shape is assignable to NoArgs.
   */
  type StarOverloads = Overloads<Exclude<EventName, 'PreToolUse' | 'turn.abort' | NoArgsEvent>> & Overloads<'turn.abort'> & Overloads<NoArgsEvent>;

  /**
   * The props of `Svg`, the desktop surface's vector leaf: the markup is the
   * element's data, as a string is a Text's, drawn in an isolated box.
   *
   * A leaf: no children. The surface never lets the markup reach the page
   * (render-site/ svgProblem bounds it; the desktop draws it as an image, or in
   * a sandboxed frame when `interactive`).
   */
  export type SvgProps = {
      /**
       * The SVG document, `<svg ...>...</svg>`, at most MAX_SVG_SOURCE_CHARS.
       */
      source: string;
      /**
       * What the drawing says, for a reader that cannot see it; required, since
       * a surface without the element draws nothing else of it.
       */
      alt: string;
      /**
       * CSS pixels; absent, the box takes the markup's own width up to the slot.
       */
      width?: number;
      /**
       * CSS pixels; absent, the markup's own height at the drawn width.
       */
      height?: number;
      /**
       * `true` draws the SVG in a script-less sandboxed frame so hover, CSS
       * `:hover`, SMIL animation and `<title>` tooltips work; absent, an image.
       *
       * It never enables script or event-handler attributes (the frame has no
       * allow-scripts and the scrub strips them); presses that other plugins
       * should observe go on an enclosing element.
       */
      interactive?: boolean;
  };

  /**
   * The keys of `I` a matcher may select variants by: literal-valued in every
   * variant, and one literal per variant (IsDiscriminant).
   */
  type TagKeys<I> = {
      [K in MatcherKeys<I>]: IsLiteralValued<MatcherValueOf<I, K>> extends true ? IsDiscriminant<I, K> extends true ? K : never : never;
  }[MatcherKeys<I>];

  /**
   * The props of `Text`: the color and style props of Ink's Text a tree may set
   * (render-site/ RENDER_PROPS). Colors are a theme key or a raw color.
   */
  export type TextProps = {
      color?: string;
      backgroundColor?: string;
      dimColor?: boolean;
      bold?: boolean;
      italic?: boolean;
      underline?: boolean;
      strikethrough?: boolean;
      inverse?: boolean;
      wrap?: 'wrap' | 'end' | 'middle' | 'truncate' | 'truncate-start' | 'truncate-middle' | 'truncate-end';
  };

  /**
   * A pending timer from `$.clock.after` / `$.clock.every`.
   */
  export type Timer = {
      /**
       * Stops it; a stopped timer never fires again.
       */
      cancel: () => void;
  };

  /**
   * A timer on `$.clock` (`after`, `every`): `fn` runs after `ms` milliseconds,
   * once or until `cancel()`.
   */
  export type TimerCall = (ms: number, fn: () => void) => Timer;

  /**
   * Options of `$.ui.toast`.
   */
  export type ToastOptions = {
      /**
       * How long the line stays, in milliseconds; default 4000.
       */
      timeoutMs?: number;
  };

  /**
   * `tool.call`'s input as the call takes it: `tool_use_id` may ride along (a
   * hook passing its event's input on) and is dropped; the run gets its own.
   */
  export type ToolCallArgs = ToolCallInput extends infer I ? I extends ToolCallInput ? Omit<I, 'tool_use_id'> & ToolCallReserved<I['tool']> : never : never;

  /**
   * The input of the two tool events: the tool, the id of this call, and the
   * tool's arguments spread beside them (`e.command` for Bash).
   *
   * A union discriminated by `tool`: after `if (e.tool === "Bash")`, `e.command`
   * is a string and a rewrite is checked against Bash's schema. `tool` and
   * `tool_use_id` are reserved: a rewrite of either is ignored by core.
   */
  export type ToolCallInput = BuiltinToolCallInput | McpToolCallInput;

  /**
   * The keys `tool.call`'s input carries beside the tool's own arguments, none
   * of which the tool sees (tool-event/ toolArgsOf strips them).
   *
   * `consent` is the person's own words for the press that raised the call
   * (`The user pressed "1: Yes" on ...`): the run's context carries it as a human
   * turn, which the permission path reads as the user's request.
   */
  export type ToolCallReserved<T> = {
      tool: T;
      tool_use_id?: string;
      consent?: string;
  };

  /**
   * What a `tool.call` hook returns and what `next(e)` and `$.tool.call(input)`
   * resolve to: the tool's result (`{ result, context? }`) or `{ deny }`.
   *
   * From core the result is `{ ref, result, text, isError }`, `ref` naming the
   * messages core produced.
   */
  export type ToolCallResult = {
      /**
       * Refuses the call: the model receives the text as an error result.
       * Absent when the call was answered.
       */
      deny: string;
      result?: undefined;
      context?: undefined;
      ref?: undefined;
      text?: undefined;
      isError?: undefined;
  } | {
      /**
       * The tool's output: from core the tool's structured record of the
       * call, plain data; from a hook, its own answer. Absent on a deny.
       *
       * Core validates a hook's answer against the tool's output schema when
       * it has one, maps it for the model with the tool's own mapper, and
       * records it in the transcript as the tool's result.
       */
      result: unknown;
      /**
       * What the model reads after the tool's result and the user never
       * sees. From core, none.
       *
       * One newline-joined reminder, as a PostToolUse hook's additional
       * context is, after the managed tier's review of it; none on a plugin's
       * own `$.tool.call`. Kept whole from `next`; capped (PROMPT_TEXT_MAX).
       */
      context?: readonly string[];
      /**
       * Set by core on what `next(e)` resolves to: names the messages core
       * produced for the call (they stay on the host side).
       *
       * A hook that returns the object it got makes core use them verbatim.
       * Absent on a hook's own `{ result }` and on a deny.
       */
      ref?: number;
      /**
       * Set by core: the result as the model reads it (text blocks joined).
       * Absent on a hook's own `{ result }`.
       */
      text?: string;
      /**
       * Set by core, present only when the tool reported an error. Absent on
       * a hook's own `{ result }`.
       */
      isError?: true;
      deny?: undefined;
  };

  /**
   * The input of `tool.describe`: one tool's description, at the moment the
   * engine first renders the tool's schema for the model.
   */
  export type ToolDescribeInput = {
      /**
       * As the model sees the name (`Bash`, `mcp__server__tool`); the key a
       * matcher narrows on.
       */
      tool: string;
      /**
       * The tool's description as it computed it.
       */
      description: string;
  };

  /**
   * What a `tool.describe` hook returns: the description the model sees for that
   * tool.
   */
  export type ToolDescribeResult = {
      description: string;
  };

  /**
   * `{ tool, tool_use_id, ...args }` as one flat object type, generic over
   * the tool name and its parsed arguments.
   */
  type ToolEnvelope<Name, Arguments> = {
      /**
       * The name of the tool being called (`Bash`, `mcp__<server>__<tool>`);
       * comparing it narrows `e`. Reserved: a rewrite of it is ignored by core.
       */
      tool: Name;
      /**
       * The tool_use block's id: the same at every event of the call and in
       * `$.ui.notice`. Reserved: a rewrite of it is ignored by core.
       */
      tool_use_id: string;
  } & Arguments;

  /**
   * One tool call of a ToolGroup, as `ui.render` sees it under `calls`.
   */
  export type ToolGroupCall = {
      /**
       * The tool's name (`Bash`, `Read`, `Grep`, ...).
       */
      toolName: string;
      /**
       * The call's input, as the model sent it.
       */
      input: unknown;
      /**
       * True while the call is still running.
       */
      running: boolean;
      /**
       * True when the call ended in an error.
       */
      errored: boolean;
      /**
       * True when an abort ended the call, as on `ToolUse`.
       */
      interrupted: boolean;
      /**
       * As on `ToolUse`; undefined while the call runs.
       */
      output?: unknown;
  };

  /**
   * One tool as `$.tool.list()` returns it.
   */
  export type ToolInfo = {
      /**
       * What the model calls it by.
       */
      name: string;
      /**
       * What it does, in the tool's own words (its description; a first sentence at
       * most for MCP tools without one).
       */
      description: string;
      /**
       * True for an MCP server's tool.
       */
      mcp: boolean;
  };

  /**
   * `{ tool, tool_use_id, ...args }` as one flat object type.
   *
   * The docs of `tool` and `tool_use_id` live on the `keyof` operand: a mapped
   * type takes its properties' docs from there.
   */
  export type ToolInputOf<Name extends string, Arguments> = {
      [K in keyof ToolEnvelope<Name, Arguments>]: ToolEnvelope<Name, Arguments>[K];
  };

  /**
   * One tool_result block of a user message.
   */
  export type ToolResultSummary = {
      id: string;
      text: string;
      isError: boolean;
  };

  /**
   * What `$.tool.register` takes.
   */
  export type ToolSpec = {
      /**
       * The tool's short name (letters, digits, `_`, `-`; up to 64); the model
       * calls it as `mcp__<plugin>__<name>`.
       */
      name: string;
      /**
       * What the tool does, for the model.
       */
      description: string;
      /**
       * A JSON schema object for the input (`{ type: "object", properties,
       * required }`); default `{ type: "object" }`.
       */
      inputSchema?: Record<string, unknown>;
  };

  /**
   * One tool_use block of an assistant message.
   */
  export type ToolUseSummary = {
      id: string;
      name: string;
      input: Record<string, unknown>;
  };

  /**
   * What every `turn.complete` carries whatever its reason: the answer, the
   * duration, the interrupt flag and the turn's id.
   */
  type TurnCompleteFields = {
      /**
       * The assistant's final visible text this turn ("" if none, e.g.
       * thinking-only).
       */
      answer: string;
      /**
       * Wall-clock length of the turn in milliseconds.
       */
      durationMs: number;
      /**
       * True when the turn ended by interruption (`reason === 'aborted'`).
       */
      aborted: boolean;
      /**
       * The turn's id, the same one its `turn.start` and every `turn.step` carried.
       */
      turnId: string;
  };

  /**
   * The input of `turn.complete`: the assistant's final message of a turn, at
   * the moment the turn ends (where the turn's duration is reported).
   *
   * `reason` says why it ended; `refusal` exists on a refusal alone.
   */
  export type TurnCompleteInput = TurnCompleteFields & (TurnCompleteRefused | TurnCompleteUnrefused);

  /**
   * Why a turn ended: the model answered, the user interrupted it, the model
   * refused with no fallback model to retry on, or an API error ended it.
   */
  export type TurnCompleteReason = 'answer' | 'aborted' | 'refusal' | 'error';

  /**
   * The end of a turn the model refused with no fallback model to retry on:
   * what the API said of the refusal rides along.
   */
  type TurnCompleteRefused = {
      reason: 'refusal';
      refusal: TurnRefusal;
  };

  /**
   * What a `turn.complete` hook returns and what `next(e)` resolves to:
   * `{ text }`; a text other than the answer's is shown beneath it.
   */
  export type TurnCompleteResult = {
      text: string;
  };

  /**
   * The end of a turn that was not a refusal: answered, interrupted, or dead
   * on an API error (retries exhausted, the context limit), nothing more.
   */
  type TurnCompleteUnrefused = {
      reason: Exclude<TurnCompleteReason, 'refusal'>;
  };

  /**
   * What the API said about a refusal that ended a turn: the classifier's
   * category and its explanation, each null when the API sent none.
   */
  export type TurnRefusal = {
      category: string | null;
      explanation: string | null;
  };

  /**
   * The input of `turn.start`: the prompt a model turn begins with, after
   * `prompt.submit` settled the text and the UserPromptSubmit settings hooks ran.
   */
  export type TurnStartInput = {
      /**
       * The user's text as the turn proceeds with it ("" for a turn started without
       * a typed prompt, e.g. a continuation).
       */
      text: string;
      /**
       * The turn's id, minted here; the same one every `turn.step` and the
       * `turn.complete` of this turn carry.
       */
      turnId: string;
  };

  /**
   * What a `turn.start` hook returns and what `next(e)` resolves to:
   * `{ turnId }`, echoed by core; a hook's own value does not change the turn.
   */
  export type TurnStartResult = {
      turnId: string;
  };

  /**
   * The input of `turn.step`: one model response inside a turn, once its
   * blocks are all in: at its first tool result, or at the turn's end.
   */
  export type TurnStepInput = {
      /**
       * The turn this step belongs to (`turn.start`'s id).
       */
      turnId: string;
      /**
       * The step's position in the turn, from 0.
       */
      index: number;
      /**
       * The visible text of this response ("" when it only called tools or only
       * thought).
       */
      answer: string;
      /**
       * The tool calls this response made, in order; empty for a text-only step.
       */
      toolUses: readonly TurnStepToolUse[];
      /**
       * Why the model stopped.
       */
      stopReason: 'end_turn' | 'max_tokens' | 'stop_sequence' | 'tool_use' | 'pause_turn' | 'compaction' | 'refusal' | 'model_context_window_exceeded';
  };

  /**
   * What a `turn.step` hook returns and what `next(e)` resolves to:
   * `{ turnId, index }`, echoed by core; a hook's value does not change it.
   */
  export type TurnStepResult = {
      turnId: string;
      index: number;
  };

  /**
   * One tool call the model asked for in a step: the tool's name and its
   * arguments.
   */
  export type TurnStepToolUse = {
      /**
       * The tool's name (`Read`, `Bash`, `mcp__server__tool`).
       */
      name: string;
      /**
       * The arguments the model gave it, as the tool schema shapes them.
       */
      input: unknown;
  };

  /**
   * The argument of `ui.press`: a press on a `Button` a render hook drew.
   * Flat and frozen like every event's.
   *
   * Another plugin addresses one button by matcher:
   * `on("ui.press", { plugin: "explainer", element: "explain" }, ...)`.
   */
  export type UiPressInput = {
      /**
       * Whose `ui.render` hook drew the element.
       */
      plugin: string;
      /**
       * The `key` the hook gave its `Button`: its address, what a matcher names.
       */
      element: string;
      /**
       * The render component the element was drawn in (`ToolUse`,
       * `AssistantMessage`, ...).
       */
      component: RenderComponent;
      /**
       * Where the press came from, one literal per member, so
       * `if (e.surface === "terminal")` narrows `e`.
       */
      surface: RenderSurface;
  };

  /**
   * What a `ui.press` hook returns and what `next(e)` resolves to.
   *
   * Beneath every hook, core runs the element's `onPress` closure in its
   * plugin's environment with `e` as the chain left it, and answers
   * `{ element }`.
   */
  export type UiPressResult = {
      /**
       * Which handler the press reached, by its Button's `key`.
       */
      element: string;
  };

  /**
   * The intersection of a union's members (`A | B` to `A & B`), by inferring
   * one parameter type from the contravariant positions.
   */
  type UnionToIntersection<U> = (U extends unknown ? (member: U) => void : never) extends (member: infer I) => void ? I : never;

  /**
   * The globals of a hooks module's environment: these and no others (no DOM,
   * no Node).
   */
  global {
    /**
     * The JSX factory (classic runtime, `@jsx h`; the engine prepends the
     * pragma): a plain-data element from a string tag or a component.
     */
    const h: (
      tag: string | ((props: never) => RenderNode | null | undefined),
      props: Record<string, unknown> | null | undefined,
      ...children: unknown[]
    ) => RenderNode | null | undefined

    /**
     * `<>...</>`: a column Box around the children.
     */
    const Fragment: (props: { children?: RenderNode[] }) => RenderElement

    /**
     * `<Box>`: layout (an allowlisted subset of Ink's Box props).
     */
    const Box: 'Box'

    /**
     * `<Text>`: a styled string (an allowlisted subset of Ink's Text props).
     */
    const Text: 'Text'

    /**
     * `<Button key="explain" label="Explain" onPress={() => ...} />`: a real
     * button; a press raises `ui.press` with `e.element` the key.
     */
    const Button: 'Button'

    namespace JSX {
      type Element = RenderElement
      type Children = RenderNode | readonly RenderNode[]
      type ElementType =
        | keyof IntrinsicElements
        | ((props: never) => RenderNode | null | undefined)
      interface IntrinsicElements {
        Box: BoxProps & { children?: Children }
        box: BoxProps & { children?: Children }
        Text: TextProps & { children?: Children }
        text: TextProps & { children?: Children }
        div: DomProps & { children?: Children }
        span: DomProps & { children?: Children }
        b: DomProps & { children?: Children }
        /** The desktop surface's alone; refused where the table lacks it. */
        Svg: SvgProps
        Button: {
          /** The element's address: `e.element` at `ui.press`. */
          key?: string
          /** The text drawn on the button; or the one string child. */
          label?: string
          /** A digit that presses it from the keyboard where honoured. */
          hotkey?: string
          /** Drawn without chrome: `1: Yes`, as a survey's row reads. */
          plain?: true
          onPress: () => void
          children?: string
        }
      }
      interface ElementChildrenAttribute {
        children: unknown
      }
      interface IntrinsicAttributes {
        key?: string
      }
    }

    interface AbortSignal {
      readonly aborted: boolean
      readonly reason: unknown
      throwIfAborted(): void
      addEventListener(
        type: 'abort',
        listener: () => void,
        options?: { once?: boolean },
      ): void
      removeEventListener(type: 'abort', listener: () => void): void
    }
    var AbortSignal: {
      prototype: AbortSignal
      abort(reason?: unknown): AbortSignal
      timeout(milliseconds: number): AbortSignal
      any(signals: AbortSignal[]): AbortSignal
    }
    interface AbortController {
      readonly signal: AbortSignal
      abort(reason?: unknown): void
    }
    var AbortController: {
      prototype: AbortController
      new (): AbortController
    }
    interface TextEncoder {
      readonly encoding: string
      encode(input?: string): Uint8Array
    }
    var TextEncoder: { prototype: TextEncoder; new (): TextEncoder }
    interface TextDecoder {
      readonly encoding: string
      decode(input?: ArrayBufferView | ArrayBuffer): string
    }
    var TextDecoder: { prototype: TextDecoder; new (label?: string): TextDecoder }
    interface URLSearchParams {
      append(name: string, value: string): void
      delete(name: string): void
      get(name: string): string | null
      getAll(name: string): string[]
      has(name: string): boolean
      set(name: string, value: string): void
      toString(): string
      forEach(callback: (value: string, key: string) => void): void
    }
    var URLSearchParams: {
      prototype: URLSearchParams
      new (init?: string | Record<string, string> | string[][]): URLSearchParams
    }
    interface URL {
      hash: string
      host: string
      hostname: string
      href: string
      readonly origin: string
      password: string
      pathname: string
      port: string
      protocol: string
      search: string
      readonly searchParams: URLSearchParams
      username: string
      toString(): string
      toJSON(): string
    }
    var URL: {
      prototype: URL
      new (url: string, base?: string | URL): URL
      canParse(url: string, base?: string): boolean
    }
    function atob(data: string): string
    function btoa(data: string): string
    function structuredClone<T>(value: T): T
    var crypto: {
      readonly subtle: {
        digest(
          algorithm: string | { name: string },
          data: ArrayBufferView | ArrayBuffer,
        ): Promise<ArrayBuffer>
      }
      randomUUID(): string
      getRandomValues<T extends ArrayBufferView>(array: T): T
    }
    var performance: { now(): number }
  }
}
