// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{bpo}from"./chunk-aywwjcwq.js";import{Ji}from"./chunk-pw9qvqs5.js";function DEr(e){if(e)Ji.terminalFocusGainedAt=Date.now();if(!e&&Ji.terminalFocus==="blurred")return;Ji.terminalFocus=e?"focused":"blurred",bpo(e),Ji.terminalFocusChanged.emit()}function eCe(){return Ji.terminalFocus!=="blurred"}function p5(){return Ji.terminalFocus}function nEo(){return Ji.terminalFocusGainedAt}function r_e(e){return Ji.terminalFocusChanged.subscribe(e)}
export{DEr,eCe,p5,nEo,r_e};
