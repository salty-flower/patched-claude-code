// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{LFs}from"./chunk-ecyypctx.js";import{$a}from"./chunk-cxstspyv.js";function hHo(e){if(e)$a.terminalFocusGainedAt=Date.now();if(!e&&$a.terminalFocus==="blurred")return;$a.terminalFocus=e?"focused":"blurred",LFs(e),$a.terminalFocusChanged.emit()}function qKe(){return $a.terminalFocus!=="blurred"}function _ae(){return $a.terminalFocus}function h4s(){return $a.terminalFocusGainedAt}function p$e(e){return $a.terminalFocusChanged.subscribe(e)}
export{hHo,qKe,_ae,h4s,p$e};
