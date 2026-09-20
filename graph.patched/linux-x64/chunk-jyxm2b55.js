// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{G,W}from"./chunk-txfrkyzp.js";import{a}from"./chunk-q2vrcqny.js";import{AsyncLocalStorage as t}from"async_hooks";class Adn{#o=!1;#s=!1;get backgroundTasksDisabled(){return this.#o}get unsandboxedCommandsDisabled(){return this.#s}disableBackgroundTasks(){this.#o=!0}disableUnsandboxedCommands(){this.#s=!0}}var r=new G(()=>new Adn);function s8(){return o.getStore()??r.of(W().host)}var o=new t;function JDr(s,e){return o.run(s,e)}function xc(){return s8().backgroundTasksDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS}var kUt="Background tasks are disabled in this session.";
export{Adn,s8,JDr,xc,kUt};
