// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{d0n}from"./chunk-38213y7h.js";import{fi}from"./chunk-mgbg06ny.js";function rgn(e){if(e)fi.terminalFocusGainedAt=Date.now();fi.terminalFocus=e?"focused":"blurred",d0n(e),fi.terminalFocusChanged.emit()}function bne(){return fi.terminalFocus!=="blurred"}function DF(){return fi.terminalFocus}function RYn(){return fi.terminalFocusGainedAt}function UX(e){return fi.terminalFocusChanged.subscribe(e)}
export{rgn,bne,DF,RYn,UX};
