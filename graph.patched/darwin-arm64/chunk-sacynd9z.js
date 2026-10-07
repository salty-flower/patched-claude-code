// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ypo}from"./chunk-8mvda08c.js";import{Ji}from"./chunk-qjdtgt07.js";function CCr(e){if(e)Ji.terminalFocusGainedAt=Date.now();if(!e&&Ji.terminalFocus==="blurred")return;Ji.terminalFocus=e?"focused":"blurred",Ypo(e),Ji.terminalFocusChanged.emit()}function aTe(){return Ji.terminalFocus!=="blurred"}function w9(){return Ji.terminalFocus}function Jvo(){return Ji.terminalFocusGainedAt}function d_e(e){return Ji.terminalFocusChanged.subscribe(e)}
export{CCr,aTe,w9,Jvo,d_e};
