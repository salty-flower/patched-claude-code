// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{kCo}from"./chunk-6a0y06th.js";import{U}from"./chunk-nre716m4.js";import{ir}from"./chunk-bvn0epzr.js";import{l}from"./chunk-277zhca1.js";import{DZn,I6}from"./chunk-pvfq0951.js";import{Npt}from"./chunk-xhzjpa7j.js";function nRn(e){let o=e.trim();return o!==""&&!o.startsWith("/")}var NQr=()=>!1;var FQr=()=>I6()&&!DZn()&&ir("tengu_quiet_ember",NQr());var rRn={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:FQr,defaultEnabled:!1};function hcr({text:e,pastedContents:o,isSentByPerson:t,wait:r}){if(!t||r||!nRn(e))return!1;try{return kCo(e,o).length===0&&Npt(rRn.name)}catch(i){return l(U(i)),!1}}
export{nRn,NQr,FQr,rRn,hcr};
