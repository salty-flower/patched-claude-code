// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{bKr}from"./chunk-a7cah040.js";import{la}from"./chunk-tb35fv23.js";function ksr(e){if(e)la.terminalFocusGainedAt=Date.now();if(!e&&la.terminalFocus==="blurred")return;la.terminalFocus=e?"focused":"blurred",bKr(e),la.terminalFocusChanged.emit()}function fwe(){return la.terminalFocus!=="blurred"}function Y3(){return la.terminalFocus}function Cto(){return la.terminalFocusGainedAt}function Vpe(e){return la.terminalFocusChanged.subscribe(e)}
export{ksr,fwe,Y3,Cto,Vpe};
