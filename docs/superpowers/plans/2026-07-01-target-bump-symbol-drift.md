# Target Bump Symbol Drift Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or inline execution in this session.

**Goal:** Make target Claude Code bumps faster and safer by turning stale minified-symbol drift into an explicit documented and tested failure mode.
**Architecture:** Keep durable rules in `AGENTS.md` and `docs/rules/Patch-Format.md`; keep the operational bump checklist in `docs/guides/Bumping-Target.md`; add a focused Bun test for open-ended version-specific patch variants.
**Tech Stack:** Markdown docs, Bun test, TOML patch metadata.

## Global Constraints

- Do not modify `reference/v2.1.88/`.
- Keep docs policy-first and concise.
- Preserve current patch format semantics.
- Commit after verification.

### Task 1: Document The Symbol-Drift Protocol

**Files:**

- Modify: `AGENTS.md`
- Modify: `docs/guides/Bumping-Target.md`
- Modify: `docs/rules/Patch-Format.md`

**Interfaces:**

- Consumes: current patch metadata fields: `applies_to`, `rationale`, `locator_kind`, `replacement`, `[[patches.tests]]`.
- Produces: agent-facing bump protocol and patch metadata requirements.

- [ ] **Step 1:** Add an AGENTS hard rule that target bumps must follow the symbol-drift protocol.
- [ ] **Step 2:** Replace the loose bump drift bullets with locator, replacement-symbol, and TUI verification checks.
- [ ] **Step 3:** Add Patch-Format field rules for version-specific minified variants and stale-symbol negative tests.
- [ ] **Step 4:** Review docs for duplication and line-level ambiguity.

### Task 2: Add A Metadata Guard Test

**Files:**

- Modify: `tools/test/patch-metadata.test.ts`

**Interfaces:**

- Consumes: `loadPatchEntriesFromDirectory()` and patch entries from `patches/*.toml`.
- Produces: a Bun test that fails when a version-specific minified-symbol variant remains open-ended across later target versions without an explicit bounded `applies_to`.

- [ ] **Step 1:** Add a semver-aware test that scans patch rationales for `This is the X minified-symbol variant` or `X ... variant`.
- [ ] **Step 2:** Require those entries to have an upper bound in `applies_to`.
- [ ] **Step 3:** Run targeted Bun test.

### Task 3: Verify And Commit

**Files:**

- Verify: docs and tools tests.

**Interfaces:**

- Consumes: repo verification commands.
- Produces: committed change.

- [ ] **Step 1:** Run `cd tools && TARGET_VERSION=2.1.186 bun test test/patch-metadata.test.ts`.
- [ ] **Step 2:** Run `just typecheck`.
- [ ] **Step 3:** Run `git diff --check`.
- [ ] **Step 4:** Commit with a docs/repo surface message.
