// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{rfi}from"./chunk-m8nhymg4.js";import{Ya}from"./chunk-hd258q34.js";function Pns(e){if(e)Ya.terminalFocusGainedAt=Date.now();if(!e&&Ya.terminalFocus==="blurred")return;Ya.terminalFocus=e?"focused":"blurred",rfi(e),Ya.terminalFocusChanged.emit()}function SJe(){return Ya.terminalFocus!=="blurred"}function upe(){return Ya.terminalFocus}function _fr(){return Ya.terminalFocusGainedAt}function DGe(e){return Ya.terminalFocusChanged.subscribe(e)}
export{Pns,SJe,upe,_fr,DGe};
