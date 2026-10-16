// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ejo}from"./chunk-eqmywwjn.js";import{la}from"./chunk-e4k7fw9d.js";function qKr(e){if(e)la.terminalFocusGainedAt=Date.now();if(!e&&la.terminalFocus==="blurred")return;la.terminalFocus=e?"focused":"blurred",ejo(e),la.terminalFocusChanged.emit()}function i0e(){return la.terminalFocus!=="blurred"}function DQ(){return la.terminalFocus}function e3o(){return la.terminalFocusGainedAt}function wAe(e){return la.terminalFocusChanged.subscribe(e)}
export{qKr,i0e,DQ,e3o,wAe};
