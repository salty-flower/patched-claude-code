# Ultracode Opus 4.6 Max Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans.

**Goal:** Allow ultracode on Opus 4.6 by using max effort when xhigh is unavailable.
**Architecture:** Add one version-scoped bundle patch for v2.1.197. Keep xhigh behavior for models that support xhigh; fall back to max only when the active model supports max effort.
**Tech Stack:** TOML patch metadata, AST transforms, `just verify`, patch-test harness.

## Global Constraints

- Patch target: `2.1.197 <2.1.198`.
- Reference anchor: `reference/v2.1.88/sources/src/utils/effort.ts`.
- Behavior: ultracode keeps dynamic workflow orchestration; only the effort level changes.
- Other models: xhigh-capable models keep xhigh; max-capable non-xhigh models use max.

### Task 1: Ultracode Effort Fallback Patch

**Files:**

- Create: `patches/ultracode-opus46-max.toml`

**Interfaces:**

- Consumes: target bundle symbols `kG`, `uHe`, `Tqe`, `Cs`, `G6o`, `J9`, `Sqe`, `Mne`.
- Produces: patched bundle where ultracode effective effort is `xhigh` when supported, otherwise `max` when supported.

- [x] **Step 1:** Add AST patch entries for startup settings, `/effort ultracode`, model picker state update, flag-settings state update, and settings reporting.
- [x] **Step 2:** Run `just verify 2.1.197`.
- [x] **Step 3:** Run `just patch-test 2.1.197`.
- [x] **Step 4:** Run local API-stub smoke checks for Opus 4.6 max and xhigh-capable model preservation; rendered PTY smoke was blocked by host `openpty` restrictions.
- [x] **Step 5:** Commit with `patches:` message.

### Task 2: Ultracode Effort Menu Compatibility

**Files:**

- Modify: `patches/ultracode-opus46-max.toml`

**Interfaces:**

- Consumes: target bundle symbols `ib`, `kG`, `uHe`, `Tqe`, `pTe`, `Cs`, `Arc`, `Hrc`, `KQm`.
- Produces: `/effort` help, argument hints, and interactive slider that expose `ultracode` when the active model can use either xhigh or max.

- [x] **Step 1:** Add AST patch entries for help text, valid options, typed argument parsing, slider geometry, confirmation effort preview, and argument hints.
- [x] **Step 2:** Run `just verify 2.1.197`.
- [x] **Step 3:** Run `just patch-test 2.1.197`.
- [x] **Step 4:** Run local smoke checks for Opus 4.6 and an xhigh-capable model where possible; rendered PTY smoke was blocked by host `openpty` restrictions.
- [x] **Step 5:** Commit with `patches:` message.
