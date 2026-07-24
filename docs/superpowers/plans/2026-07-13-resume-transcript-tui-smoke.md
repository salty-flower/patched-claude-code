# Resume Transcript TUI Smoke Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans

**Goal:** Add a deterministic rendered-bundle TUI check for the minimal resume transcript that exposed the `!355` render crash.
**Architecture:** Store the minimized transcript as a JSONL fixture under `tools/test/fixtures`. Add a Bun script that copies the fixture into a temporary Claude config directory, resumes it through the rendered bundle in a PTY, submits one prompt, interrupts the busy render path, and fails on render crashes.
**Tech Stack:** Bun, TypeScript, local HTTP Claude API stub, `script` PTY runner, `just`.

## Global Constraints

- Do not contact non-localhost network endpoints.
- Do not add static string guards for this bug.
- Keep the fixture minimal and free of large transcript content.
- The check must run against `staging/<version>/cli.patched.js`.

### Task 1: Resume Transcript Fixture and Smoke Script

**Files:**

- Create: `tools/test/fixtures/resume-transcripts/away-summary-only.jsonl`
- Create: `tools/test/resume-transcript-tui-smoke.ts`
- Modify: `justfile`

**Interfaces:**

- Consumes: `startClaudeApiStub` from `tools/test/helpers/claude-api-stub.ts`.
- Produces: resume coverage within `just api-stub-smoke <version>`.

- [x] **Step 1:** Add the one-line minimized `away_summary` JSONL fixture.
- [x] **Step 2:** Add a Bun CLI accepting `--bundle`, `--fixture`, `--prompt`, and `--timeout-seconds`.
- [x] **Step 3:** The CLI creates a temp `HOME`/`CLAUDE_CONFIG_DIR`, installs the fixture under the encoded project directory, starts a local stub to prevent real network calls if the prompt reaches the API path, resumes the session in a PTY, submits the prompt, interrupts, and asserts no render crash.
- [x] **Step 4:** Include the replay check in the consolidated `api-stub-smoke` matrix.
- [x] **Step 5:** Verify with `bun run --cwd tools typecheck`, targeted smoke, and `just verify 2.1.206`.
