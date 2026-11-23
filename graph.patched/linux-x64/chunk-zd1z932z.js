// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{oBt,C0s}from"./chunk-7qqagmzr.js";import{N}from"./chunk-5p3mkpyy.js";import{Jt}from"./chunk-a5a37ds7.js";import{a}from"./chunk-8c4ttmk8.js";import{LDe,o$}from"./chunk-acx2qgbr.js";function Hmr(e){let o=e.trim();return o!==""&&!o.startsWith("/")}var uas=()=>!1;var fas=()=>o$()&&!LDe()&&Jt("tengu_quiet_ember",uas());var Nmr={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:fas,defaultEnabled:!1};function nao({text:e,pastedContents:o,isSentByPerson:t,wait:r}){if(!t||r||!Hmr(e))return!1;try{return C0s(e,o).length===0&&oBt(Nmr.name)}catch(i){return a(N(i)),!1}}
export{Hmr,uas,fas,Nmr,nao};
