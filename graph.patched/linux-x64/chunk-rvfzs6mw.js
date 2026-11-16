// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Aui}from"./chunk-r3adsed5.js";import{Ya}from"./chunk-zj6x5cnt.js";function Jts(e){if(e)Ya.terminalFocusGainedAt=Date.now();if(!e&&Ya.terminalFocus==="blurred")return;Ya.terminalFocus=e?"focused":"blurred",Aui(e),Ya.terminalFocusChanged.emit()}function iJe(){return Ya.terminalFocus!=="blurred"}function tpe(){return Ya.terminalFocus}function $ur(){return Ya.terminalFocusGainedAt}function xze(e){return Ya.terminalFocusChanged.subscribe(e)}
export{Jts,iJe,tpe,$ur,xze};
