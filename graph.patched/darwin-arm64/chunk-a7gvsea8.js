// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{mxo}from"./chunk-4bw62nzm.js";import{ba}from"./chunk-f50epshw.js";function sNr(e){if(e)ba.terminalFocusGainedAt=Date.now();if(!e&&ba.terminalFocus==="blurred")return;ba.terminalFocus=e?"focused":"blurred",mxo(e),ba.terminalFocusChanged.emit()}function KIe(){return ba.terminalFocus!=="blurred"}function oX(){return ba.terminalFocus}function J$o(){return ba.terminalFocusGainedAt}function REe(e){return ba.terminalFocusChanged.subscribe(e)}
export{sNr,KIe,oX,J$o,REe};
