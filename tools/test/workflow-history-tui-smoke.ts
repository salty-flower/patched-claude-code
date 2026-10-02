#!/usr/bin/env bun
import { mkdirSync, mkdtempSync, realpathSync, rmSync } from "node:fs"
import { join, resolve } from "node:path"
import { Terminal } from "@xterm/headless"
import { valid } from "semver"
import { createCommand, runCli } from "../lib/cli"
import { EventConditions } from "./helpers/event-conditions"
import { recordOracleCheck } from "./helpers/oracle-evidence"
import { normalizeTuiOutput, shellEnvironment, shellQuote } from "./helpers/pty"
import { emptyPrompt, submitPtyText } from "./helpers/pty-input"
import {
  APPROVAL_ANSWER,
  APPROVAL_DONE,
  APPROVAL_QUESTION,
  ASK_ID,
  conversationText,
  GIT_COMMANDS,
  hasToolResult,
  INITIAL_PROMPT,
  POST_START_DONE,
  POST_START_PROMPT,
  requestBody,
  STATUS_PROMPT,
  startWorkflowHistoryStub,
  TASK_ONE,
  TASK_THREE,
  WORKFLOW_DONE,
  WORKFLOW_RUNNING,
} from "./helpers/workflow-history-stub"

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message)
}

function screenText(terminal: Terminal): string {
  const buffer = terminal.buffer.active
  return Array.from(
    { length: terminal.rows },
    (_, row) => buffer.getLine(buffer.viewportY + row)?.translateToString(true) ?? "",
  ).join("\n")
}

type CapturedSelection = {
  snapshot: string
  requestedTurns: number
  availableTurns: number
  effectiveTurns: number
  omittedByCount: number
  omittedBySize: number
  interactions: {
    kind: string
    source: { snapshotIndex: number; messageUUID?: string; assistantUUID?: string; toolUseID?: string }
    human: { text?: string; answers?: Record<string, string> }
    assistantContext?: { questions?: { question?: string; options?: { label?: string }[] }[] }
  }[]
}

function capturedSelection(text: string): CapturedSelection {
  const json = text.match(/(?:^|\n) {2}\{[\s\S]*?\n {2}\}/)?.[0]
  assert(json, "actual worker payload does not contain selected-history JSON")
  const value: unknown = JSON.parse(json)
  assert(typeof value === "object" && value !== null && "interactions" in value, "selected-history JSON is invalid")
  return value as CapturedSelection
}

type QuestionDialogInput = {
  screen(): string
  hasAnswerReceipt(): boolean
  key(value: string): Promise<void>
  waitFor(predicate: () => boolean, description: string): Promise<void>
  notify(): void
  scheduleRetry(callback: () => void): () => void
  snapshot(label: string): void
}

function selectedDialogOption(screen: string, label: string): boolean {
  return screen.split("\n").some((line) => {
    const option = line.replaceAll("\u00a0", " ").match(/^\s*❯\s+\d+\.\s+(.+?)\s*$/)?.[1]
    return option === label
  })
}

async function pressDialogKey(
  input: QuestionDialogInput,
  key: string,
  ready: () => boolean,
  acknowledged: () => boolean,
  description: string,
): Promise<void> {
  for (let attempt = 0; attempt < 3; attempt++) {
    await input.waitFor(
      () => input.hasAnswerReceipt() || acknowledged() || ready(),
      `${description}: control not ready`,
    )
    if (input.hasAnswerReceipt() || acknowledged()) return
    if (!ready()) continue
    await input.key(key)
    let retryDue = false
    const cancelRetry = input.scheduleRetry(() => {
      retryDue = true
      input.notify()
    })
    try {
      await input.waitFor(
        () => input.hasAnswerReceipt() || acknowledged() || retryDue,
        `${description}: key was not acknowledged`,
      )
    } finally {
      cancelRetry()
    }
    if (input.hasAnswerReceipt() || acknowledged()) return
  }
  throw new Error(`${description}: dialog did not acknowledge input after 3 attempts`)
}

export async function answerWorkflowApproval(input: QuestionDialogInput): Promise<void> {
  const questionReady = (label: string): boolean => {
    const screen = input.screen()
    return (
      screen.includes(APPROVAL_QUESTION) && screen.includes("Enter to select") && selectedDialogOption(screen, label)
    )
  }
  const reviewReady = (): boolean => {
    const screen = input.screen()
    return (
      screen.includes("Review your answers") &&
      screen.includes("Ready to submit your answers?") &&
      selectedDialogOption(screen, "Submit answers")
    )
  }
  await input.waitFor(() => input.hasAnswerReceipt() || questionReady(APPROVAL_ANSWER), "approval dialog missing")
  if (input.hasAnswerReceipt()) return
  // A focus round trip acknowledges the live dialog, not question text left in the transcript.
  await pressDialogKey(
    input,
    "\x1b[B",
    () => questionReady(APPROVAL_ANSWER),
    () => questionReady("Do not approve"),
    "question focus did not move down",
  )
  await pressDialogKey(
    input,
    "\x1b[A",
    () => questionReady("Do not approve"),
    () => questionReady(APPROVAL_ANSWER),
    "question focus did not return to approval",
  )
  if (input.hasAnswerReceipt()) return
  input.snapshot("genuine AskUserQuestion approval")
  await pressDialogKey(
    input,
    "\x1b[13u",
    () => questionReady(APPROVAL_ANSWER),
    reviewReady,
    "question selection did not advance to submission",
  )
  if (input.hasAnswerReceipt()) return
  input.snapshot("review selected approval before submission")
  await pressDialogKey(
    input,
    "\x1b[13u",
    reviewReady,
    () => input.hasAnswerReceipt(),
    "human approval was not submitted",
  )
}

async function fixtureCommand(cmd: string[], cwd: string, env: Record<string, string>): Promise<string> {
  const proc = Bun.spawn({ cmd, cwd, env, stdout: "pipe", stderr: "pipe" })
  const [code, stdout, stderr] = await Promise.all([
    proc.exited,
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
  ])
  assert(code === 0, `fixture command failed: ${cmd.join(" ")}\n${stdout}\n${stderr}`)
  return stdout.trim()
}

async function prepareGitFixture(root: string, env: Record<string, string>) {
  const cwd = join(root, "repository")
  const remote = join(root, "remote.git")
  mkdirSync(cwd)
  const git = (...args: string[]) => fixtureCommand(["git", ...args], cwd, env)
  await git("init", "--bare", "--initial-branch=main", remote)
  await git("init", "--initial-branch=main")
  await git("config", "user.name", "Workflow fixture")
  await git("config", "user.email", "fixture@example.invalid")
  await Promise.all([
    Bun.write(join(cwd, "local.txt"), "original\n"),
    Bun.write(join(cwd, "upstream.txt"), "old upstream\n"),
    Bun.write(
      join(cwd, "verify.test.ts"),
      [
        'import { expect, test } from "bun:test"',
        'test("approved local change is rebased onto the updated upstream", async () => {',
        '  expect(await Bun.file("local.txt").text()).toBe("approved update\\n")',
        '  expect(await Bun.file("upstream.txt").text()).toBe("fresh upstream\\n")',
        "})",
      ].join("\n"),
    ),
  ])
  await git("add", ".")
  await git("commit", "-m", "fixture: base")
  await git("remote", "add", "origin", remote)
  await git("push", "-u", "origin", "main")
  await git("checkout", "-b", "fixture-change")
  await Bun.write(join(cwd, "local.txt"), "approved update\n")
  await git("commit", "-am", "fixture: approved local change")
  const originalHead = await git("rev-parse", "HEAD")
  await git("checkout", "main")
  await Bun.write(join(cwd, "upstream.txt"), "fresh upstream\n")
  await git("commit", "-am", "fixture: independent upstream change")
  const upstreamHead = await git("rev-parse", "HEAD")
  await git("push", "origin", "main")
  await git("checkout", "fixture-change")
  return { cwd, remote, originalHead, upstreamHead, git }
}

async function main(): Promise<number> {
  const options = createCommand("workflow-history-tui-smoke")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code bundle")
    .requiredOption("--version <semver>", "target Claude Code version")
    .option("--timeout-seconds <seconds>", "whole-session safety watchdog", Number, 120)
    .option("--keep-artifacts", "retain isolated request and terminal captures after success")
    .parse(process.argv.slice(2), { from: "user" })
    .opts<{ bundle: string; version: string; timeoutSeconds: number; keepArtifacts?: boolean }>()
  assert(valid(options.version), "--version must be an explicit semver")
  if (options.version !== "2.1.285") {
    console.log(`skip: workflow history PTY requires target 2.1.285 (got ${options.version})`)
    return 0
  }
  assert(
    Number.isSafeInteger(options.timeoutSeconds) && options.timeoutSeconds > 0,
    "timeout must be a positive integer",
  )
  const bundle = resolve(options.bundle)
  assert(await Bun.file(bundle).exists(), `bundle missing: ${bundle}`)
  const fixture = await startWorkflowHistoryStub()
  const home = realpathSync(mkdtempSync("/tmp/workflow-tui-"))
  try {
    const configDir = join(home, ".claude")
    mkdirSync(configDir)
    await Bun.write(
      join(configDir, "settings.json"),
      JSON.stringify({
        enableWorkflows: true,
        permissions: {
          allow: [
            "Workflow",
            "Bash(git fetch origin)",
            "Bash(git rebase origin/main)",
            "Bash(bun test ./verify.test.ts)",
            "Bash(git push origin HEAD:main)",
          ],
        },
      }),
    )
    // Whitelist shell necessities: no host provider, proxy, credential, or Claude configuration reaches the child.
    const environment = {
      PATH: process.env.PATH ?? "/usr/bin:/bin",
      LANG: "en_US.UTF-8",
      HOME: home,
      TMPDIR: home,
      XDG_CONFIG_HOME: join(home, ".config"),
      GIT_CONFIG_NOSYSTEM: "1",
      GIT_CONFIG_GLOBAL: join(home, "empty-git-config"),
      CLAUDE_CONFIG_DIR: configDir,
      ANTHROPIC_API_KEY: "stub-api-key",
      ANTHROPIC_BASE_URL: fixture.stub.baseUrl,
      CLAUDE_API_STUB_BASE_URL: fixture.stub.baseUrl,
      CLAUDE_CODE_WORKFLOWS: "1",
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
      CLAUDE_CODE_SKIP_ONBOARDING: "1",
      CLAUDE_CODE_WORKFLOW_PREFIX_STAGGER_MS: "0",
      DISABLE_GROWTHBOOK: "1",
      FORCE_COLOR: "0",
      TERM: "xterm-256color",
    }
    const gitFixture = await prepareGitFixture(home, environment)
    await Bun.write(
      join(configDir, ".claude.json"),
      JSON.stringify({
        customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
        hasCompletedOnboarding: true,
        projects: { [gitFixture.cwd]: { hasTrustDialogAccepted: true } },
        theme: "dark",
      }),
    )
    const preloads = [
      resolve(import.meta.dir, "..", "..", "runtime", "bun-ant-cell-segmenter.ts"),
      resolve(import.meta.dir, "helpers", "redirect-first-party-api-to-stub.ts"),
    ]
    const timeoutPath = Bun.which("timeout")
    assert(timeoutPath, "timeout executable missing")
    const command = `stty cols 120 rows 40; exec ${shellQuote(timeoutPath)} --kill-after=3s ${options.timeoutSeconds}s env ${shellEnvironment(environment)} ${shellQuote(process.execPath)} ${preloads.map((path) => `--preload ${shellQuote(path)}`).join(" ")} ${shellQuote(bundle)} --model opus --permission-mode default`
    const scriptCommand =
      process.platform === "darwin"
        ? `script -q -e /dev/null bash -c ${shellQuote(command)}`
        : `script -q -e -c ${shellQuote(command)} /dev/null`
    const proc = Bun.spawn({
      // Darwin script requires a real pipe, while Bun's stdin pipe is a socket.
      cmd: ["bash", "-c", `${scriptCommand} < <(cat)`],
      cwd: gitFixture.cwd,
      env: environment,
      detached: process.platform === "darwin",
      stdin: "pipe",
      stdout: "pipe",
      stderr: "pipe",
    })
    const terminal = new Terminal({ allowProposedApi: true, cols: 120, rows: 40, scrollback: 500 })
    const events = new EventConditions()
    let transcript = ""
    let screen = ""
    let lastInteractiveScreen = ""
    let exited = false
    let inputEnded = false
    let passed = false
    let exitOffset: number | undefined
    const snapshots: { label: string; screen: string }[] = []
    function endInput(): void {
      if (inputEnded) return
      inputEnded = true
      proc.stdin.end()
    }
    function killGroup(): void {
      try {
        if (process.platform === "darwin") process.kill(-proc.pid, "SIGKILL")
        else proc.kill("SIGKILL")
      } catch {
        proc.kill("SIGKILL")
      }
    }
    const watchdog = setTimeout(
      () => {
        events.fail(new Error("whole-session watchdog expired"))
        endInput()
        killGroup()
      },
      (options.timeoutSeconds + 4) * 1000,
    )
    const unsubscribe = fixture.stub.onRequest(() => queueMicrotask(() => events.notify()))
    void proc.exited.then((code) => {
      exited = true
      clearTimeout(watchdog)
      events.fail(new Error(`PTY exited ${code}`))
    })
    const output = (async () => {
      const decoder = new TextDecoder()
      for await (const chunk of proc.stdout) {
        transcript += decoder.decode(chunk, { stream: true })
        if (exitOffset !== undefined && transcript.includes("\x1b[?1049l", exitOffset)) endInput()
        await new Promise<void>((done) => terminal.write(chunk, done))
        screen = screenText(terminal)
        if (screen.includes("❯")) lastInteractiveScreen = screen
        if (/TypeError|ReferenceError|React error #\d+|Invalid tool parameters/.test(screen)) {
          events.fail(new Error(`render or tool validation failure: ${screen}`))
        } else events.notify()
      }
      transcript += decoder.decode()
    })().catch((error: unknown) => events.fail(error instanceof Error ? error : new Error(String(error))))
    let stderrText = ""
    const errors = (async () => {
      const decoder = new TextDecoder()
      for await (const chunk of proc.stderr) stderrText += decoder.decode(chunk, { stream: true })
      stderrText += decoder.decode()
      return stderrText
    })()
    const waitFor = (predicate: () => boolean, description: string) =>
      events.waitFor(() => {
        assert(fixture.errors.length === 0, fixture.errors.join("\n"))
        return predicate()
      }, description)
    const key = async (value: string): Promise<void> => {
      proc.stdin.write(value)
      await proc.stdin.flush()
    }
    const inputLine = (): string => {
      const buffer = terminal.buffer.active
      return (buffer.getLine(buffer.baseY + buffer.cursorY)?.translateToString(true) ?? "").replaceAll("\u00a0", " ")
    }
    const idle = (): boolean => emptyPrompt(inputLine()) && !/esc to interrupt/i.test(screen)
    const submit = async (text: string): Promise<void> => {
      await waitFor(idle, `input not idle before ${text}`)
      await submitPtyText({ line: inputLine, key, waitFor }, text)
    }
    const snapshot = (label: string): void => {
      snapshots.push({ label, screen })
      if (process.env.TUI_SMOKE_SHOW_OUTPUT === "1") console.log(`screen: ${label}\n${screen}`)
    }
    try {
      await waitFor(() => screen.includes("Claude Code") && idle(), "startup prompt missing")
      await submit(INITIAL_PROMPT)
      await answerWorkflowApproval({
        screen: () => screen,
        hasAnswerReceipt: () => fixture.parentRequests.some((request) => hasToolResult(request, ASK_ID)),
        key,
        waitFor,
        notify: () => events.notify(),
        scheduleRetry: (callback) => {
          // Native AskUserQuestion rejects answers within 150ms of reveal.
          // Retry only after 250ms while the same intended control remains selected;
          // a changed UI or actual tool-result receipt acknowledges the key immediately.
          const timer = setTimeout(callback, 250)
          return () => clearTimeout(timer)
        },
        snapshot,
      })
      await waitFor(() => screen.includes(APPROVAL_DONE) && idle(), "human approval was not submitted")
      assert(
        fixture.parentRequests.some(
          (request) => hasToolResult(request, ASK_ID) && conversationText(request).includes(APPROVAL_ANSWER),
        ),
        "real UI approval did not reach the parent API request",
      )
      await submit(STATUS_PROMPT)
      await waitFor(
        () => fixture.workers.has(1) && screen.includes(WORKFLOW_RUNNING) && idle(),
        "workflow did not launch its first worker and return to the parent",
      )
      snapshot("workflow running with first worker held")
      await submit(POST_START_PROMPT)
      await waitFor(() => screen.includes(POST_START_DONE) && idle(), "post-start message did not reach parent")
      fixture.releaseFirstWorker()
      await waitFor(() => fixture.workers.has(3), "later workflow worker missing")
      await waitFor(() => screen.includes(WORKFLOW_DONE) && idle(), "workflow completion did not render")
      snapshot("workflow completed")

      assert(fixture.errors.length === 0, fixture.errors.join("\n"))
      const oneRequest = fixture.workers.get(1)
      const threeRequest = fixture.workers.get(3)
      assert(oneRequest && threeRequest, "both worker requests must be captured")
      const one = conversationText(oneRequest)
      const three = conversationText(threeRequest)
      assert(
        one.includes(TASK_ONE) && three.includes(TASK_THREE),
        "delegated assignments missing from actual worker payloads",
      )
      assert(one.includes(STATUS_PROMPT) && three.includes(STATUS_PROMPT), "current human status missing")
      assert(
        !one.includes(APPROVAL_QUESTION) && !one.includes(APPROVAL_ANSWER),
        "N=1 did not atomically omit older Q&A",
      )
      assert(three.includes(INITIAL_PROMPT), "N=3 missing the initial genuine human request")
      assert(three.includes(APPROVAL_QUESTION) && three.includes(APPROVAL_ANSWER), "N=3 missing genuine paired Q&A")
      const short = capturedSelection(one)
      const full = capturedSelection(three)
      assert(short.snapshot === "workflow-start" && full.snapshot === "workflow-start", "snapshot boundary missing")
      assert(short.requestedTurns === 1 && full.requestedTurns === 3, "per-agent history configuration did not apply")
      assert(short.availableTurns === 3 && full.availableTurns === 3, "snapshot interaction count is incorrect")
      assert(short.effectiveTurns === 1 && full.effectiveTurns === 3, "effective history count is incorrect")
      assert(short.omittedByCount === 2 && full.omittedByCount === 0, "count-based omissions are not truthful")
      assert(short.omittedBySize === 0 && full.omittedBySize === 0, "unexpected fixture size omission")
      assert(
        short.interactions.length === 1 && short.interactions[0]?.human.text === STATUS_PROMPT,
        "N=1 suffix is incorrect",
      )
      const [initial, exchange, status] = full.interactions
      assert(
        initial?.kind === "human-message" && initial.human.text === INITIAL_PROMPT,
        "initial human attribution missing",
      )
      assert(exchange?.kind === "question-answer", "completed Q&A is not an atomic interaction")
      assert(
        status?.kind === "human-message" && status.human.text === STATUS_PROMPT,
        "latest human attribution missing",
      )
      assert(
        initial.source.snapshotIndex < exchange.source.snapshotIndex &&
          exchange.source.snapshotIndex < status.source.snapshotIndex,
        "selected native history is not chronological",
      )
      assert(exchange.source.toolUseID === ASK_ID, "Q&A lost its original tool-call link")
      assert(
        exchange.source.messageUUID && exchange.source.assistantUUID,
        "Q&A lost native response/question source IDs",
      )
      assert(exchange.assistantContext?.questions?.[0]?.question === APPROVAL_QUESTION, "original question missing")
      assert(
        exchange.assistantContext.questions[0]?.options?.[0]?.label === APPROVAL_ANSWER,
        "original question options missing",
      )
      assert(
        exchange.human.answers?.[APPROVAL_QUESTION] === APPROVAL_ANSWER,
        "selected answer lost its human attribution",
      )
      for (const text of [one, three]) {
        assert(!text.includes(POST_START_PROMPT), "later human message leaked into frozen workflow snapshot")
        assert(!/only user voice|carries no user authority/.test(text), "old exclusive-authority framing remains")
        assert(/selected.*histor|histor.*selected/i.test(text), "selected history framing missing")
        assert(/parent.agent|agent.authored|delegated assignment/i.test(text), "delegated task attribution missing")
      }
      assert(/assistant.authored|assistant question/i.test(three), "assistant question attribution missing")
      const descriptions = fixture.parentRequests
        .flatMap((request) => requestBody(request).tools ?? [])
        .map((tool) => tool.description ?? "")
        .join("\n")
      assert(/userHistoryTurns/.test(descriptions), "parent did not receive history configuration")
      assert(
        /advisory/i.test(descriptions) && /approval/i.test(descriptions),
        "parent did not receive advisory preflight",
      )
      assert(
        /\b8\b/.test(descriptions) && /\b64\b/.test(descriptions),
        "parent history configuration lacks default or bounds",
      )

      assert(
        JSON.stringify(fixture.actionResults.map((result) => result.command)) === JSON.stringify(GIT_COMMANDS),
        "worker did not complete rebase, verification, and push in the required order",
      )
      assert(
        /1 pass/.test(fixture.actionResults[1]?.result ?? ""),
        "worker did not run the actual fixture verification",
      )
      const finalHead = await gitFixture.git("rev-parse", "HEAD")
      const finalParent = await gitFixture.git("rev-parse", "HEAD^")
      const remoteHead = await gitFixture.git("--git-dir", gitFixture.remote, "rev-parse", "refs/heads/main")
      assert(
        finalHead !== gitFixture.originalHead && finalParent === gitFixture.upstreamHead,
        "worker did not rebase onto updated main",
      )
      assert(remoteHead === finalHead, "local remote did not receive the rebased branch")
      assert(
        (await gitFixture.git("status", "--porcelain")) === "",
        "fixture repository has unexpected uncommitted changes",
      )

      exitOffset = transcript.length
      await submit("/exit")
      const code = await proc.exited
      endInput()
      await output
      const stderr = await errors
      const normalized = normalizeTuiOutput(`${transcript}\n${stderr}`)
      assert(code === 0, `PTY exited ${code}`)
      assert(
        !/TypeError|ReferenceError|React error #\d+|Invalid tool parameters/.test(normalized),
        "render failure in transcript",
      )
      assert(normalized.includes("/exit"), "local /exit interaction missing")
      const platform =
        process.platform === "darwin" && process.arch === "arm64"
          ? "darwin-arm64"
          : process.platform === "linux" && process.arch === "x64"
            ? "linux-x64"
            : undefined
      if (platform) {
        recordOracleCheck({
          oracleIds: ["workflow-history/bounded-human-history", "workflow-history/advisory-preflight"],
          platform,
          evidenceClass: "runtime",
          check: "workflow-history-tui-smoke.ts: real Q&A, bounded windows, frozen snapshot and advisory preflight",
          outcome: "passed",
        })
      }
      passed = true
      console.log(
        "ok: rendered AskUserQuestion approval reaches N=3 worker; N=1 omits it; later worker keeps launch snapshot",
      )
      console.log(
        "ok: actual parent receives advisory preflight/configuration; actual workers receive attributed selected history and assignments",
      )
      console.log(
        "ok: worker actually rebased, passed local verification, and fast-forward pushed to the isolated bare remote",
      )
      console.log(
        "scope: deterministic stub responses test runtime transport, rendering, and action wiring, not model interpretation",
      )
      return 0
    } catch (error) {
      console.error(error instanceof Error ? error.message : String(error))
      console.error(`workflow PTY diagnostics retained at ${home}`)
      return 1
    } finally {
      fixture.releaseFirstWorker()
      unsubscribe()
      clearTimeout(watchdog)
      if (!exited) {
        proc.kill("SIGTERM")
        await Promise.race([proc.exited, Bun.sleep(1000)])
      }
      endInput()
      if (!exited) killGroup()
      await Promise.race([Promise.all([proc.exited, output, errors]), Bun.sleep(2000)])
      if (!passed || options.keepArtifacts) {
        await Promise.all([
          Bun.write(join(home, "screen.txt"), lastInteractiveScreen || screen),
          Bun.write(join(home, "screens.json"), JSON.stringify(snapshots, null, 2)),
          Bun.write(join(home, "tui.txt"), normalizeTuiOutput(transcript)),
          Bun.write(join(home, "tui.raw.txt"), transcript),
          Bun.write(join(home, "stderr.txt"), stderrText),
          Bun.write(
            join(home, "requests.json"),
            JSON.stringify(
              fixture.stub.requests.map(({ order, path, jsonBody }) => ({ order, path, body: jsonBody })),
              null,
              2,
            ),
          ),
        ])
      }
      if (!passed) {
        console.error(`workflow PTY current screen after cleanup:\n${screen}`)
        console.error(`workflow PTY last interactive screen:\n${lastInteractiveScreen}`)
        console.error(`workflow PTY raw transcript (JSON escaped):\n${JSON.stringify(transcript)}`)
        console.error(`workflow PTY stderr:\n${stderrText}`)
      }
      terminal.dispose()
      if (passed && !options.keepArtifacts) rmSync(home, { recursive: true, force: true })
      if (passed && options.keepArtifacts) console.log(`workflow PTY artifacts retained at ${home}`)
    }
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error))
    console.error(`workflow fixture setup diagnostics retained at ${home}`)
    return 1
  } finally {
    fixture.stub.stop()
  }
}

if (import.meta.main) await runCli(main)
