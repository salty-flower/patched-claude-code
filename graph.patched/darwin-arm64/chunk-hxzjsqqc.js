// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{LLr}from"./chunk-s8xs8s76.js";import{Mi}from"./chunk-bk74jg90.js";function d8n(e){if(e)Mi.terminalFocusGainedAt=Date.now();if(!e&&Mi.terminalFocus==="blurred")return;Mi.terminalFocus=e?"focused":"blurred",LLr(e),Mi.terminalFocusChanged.emit()}function oye(){return Mi.terminalFocus!=="blurred"}function zF(){return Mi.terminalFocus}function AGr(){return Mi.terminalFocusGainedAt}function xX(e){return Mi.terminalFocusChanged.subscribe(e)}
export{d8n,oye,zF,AGr,xX};
