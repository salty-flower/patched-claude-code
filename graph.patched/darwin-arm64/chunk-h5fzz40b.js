// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Nwn}from"./chunk-g4zaymy2.js";import{vi}from"./chunk-edcjkt12.js";function Mcn(e){if(e)vi.terminalFocusGainedAt=Date.now();vi.terminalFocus=e?"focused":"blurred",Nwn(e),vi.terminalFocusChanged.emit()}function eee(){return vi.terminalFocus!=="blurred"}function cN(){return vi.terminalFocus}function hqn(){return vi.terminalFocusGainedAt}function CK(e){return vi.terminalFocusChanged.subscribe(e)}
export{Mcn,eee,cN,hqn,CK};
