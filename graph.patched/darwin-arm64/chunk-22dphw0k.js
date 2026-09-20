// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{per}from"./chunk-sgamszzq.js";import{yi}from"./chunk-6kxckh9d.js";function CCn(e){if(e)yi.terminalFocusGainedAt=Date.now();if(!e&&yi.terminalFocus==="blurred")return;yi.terminalFocus=e?"focused":"blurred",per(e),yi.terminalFocusChanged.emit()}function Fae(){return yi.terminalFocus!=="blurred"}function GD(){return yi.terminalFocus}function Scr(){return yi.terminalFocusGainedAt}function gq(e){return yi.terminalFocusChanged.subscribe(e)}
export{CCn,Fae,GD,Scr,gq};
