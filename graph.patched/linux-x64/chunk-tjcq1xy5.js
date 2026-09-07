// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{G,U}from"./chunk-bj7g1p32.js";import{a}from"./chunk-td8fcebs.js";class o{#o=!1;#s=!1;get backgroundTasksDisabled(){return this.#o}get unsandboxedCommandsDisabled(){return this.#s}disableBackgroundTasks(){this.#o=!0}disableUnsandboxedCommands(){this.#s=!0}}var s=new G(()=>new o);function h8(){return s.of(U().host)}function kl(){return h8().backgroundTasksDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS}var ewt="Background tasks are disabled in this session.";
export{h8,kl,ewt};
