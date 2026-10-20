// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{f3o}from"./chunk-kpqr86hf.js";import{Pa}from"./chunk-dzwmdka5.js";function y8r(e){if(e)Pa.terminalFocusGainedAt=Date.now();if(!e&&Pa.terminalFocus==="blurred")return;Pa.terminalFocus=e?"focused":"blurred",f3o(e),Pa.terminalFocusChanged.emit()}function sNe(){return Pa.terminalFocus!=="blurred"}function LQ(){return Pa.terminalFocus}function Kes(){return Pa.terminalFocusGainedAt}function ZAe(e){return Pa.terminalFocusChanged.subscribe(e)}
export{y8r,sNe,LQ,Kes,ZAe};
