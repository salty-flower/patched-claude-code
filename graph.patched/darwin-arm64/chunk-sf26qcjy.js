// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{G,z}from"./chunk-sgamszzq.js";import{a}from"./chunk-wkhfcbsj.js";import{AsyncLocalStorage as t}from"async_hooks";class Gdn{#o=!1;#s=!1;get backgroundTasksDisabled(){return this.#o}get unsandboxedCommandsDisabled(){return this.#s}disableBackgroundTasks(){this.#o=!0}disableUnsandboxedCommands(){this.#s=!0}}var r=new G(()=>new Gdn);function p5(){return o.getStore()??r.of(z().host)}var o=new t;function OMr(s,e){return o.run(s,e)}function xc(){return p5().backgroundTasksDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS}var BUt="Background tasks are disabled in this session.";
export{Gdn,p5,OMr,xc,BUt};
