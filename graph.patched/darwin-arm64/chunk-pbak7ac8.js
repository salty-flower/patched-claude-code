// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{swo}from"./chunk-vd0a9d2s.js";import{sa}from"./chunk-p9h7qqe3.js";function iIr(e){if(e)sa.terminalFocusGainedAt=Date.now();if(!e&&sa.terminalFocus==="blurred")return;sa.terminalFocus=e?"focused":"blurred",swo(e),sa.terminalFocusChanged.emit()}function gxe(){return sa.terminalFocus!=="blurred"}function R8(){return sa.terminalFocus}function zIo(){return sa.terminalFocusGainedAt}function ube(e){return sa.terminalFocusChanged.subscribe(e)}
export{iIr,gxe,R8,zIo,ube};
