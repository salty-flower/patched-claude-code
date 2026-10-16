// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Cjo}from"./chunk-xzypj06m.js";import{la}from"./chunk-w9vkehdp.js";function lqr(e){if(e)la.terminalFocusGainedAt=Date.now();if(!e&&la.terminalFocus==="blurred")return;la.terminalFocus=e?"focused":"blurred",Cjo(e),la.terminalFocusChanged.emit()}function mDe(){return la.terminalFocus!=="blurred"}function WJ(){return la.terminalFocus}function P9o(){return la.terminalFocusGainedAt}function RAe(e){return la.terminalFocusChanged.subscribe(e)}
export{lqr,mDe,WJ,P9o,RAe};
