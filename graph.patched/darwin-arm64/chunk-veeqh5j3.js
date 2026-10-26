// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{aDo}from"./chunk-v07vsc8c.js";import{N}from"./chunk-36ysyspx.js";import{Wn}from"./chunk-27xjmczp.js";import{l}from"./chunk-thm21ca7.js";import{qlr,o$}from"./chunk-we9anmwe.js";import{Syt}from"./chunk-rmqyvpf6.js";function $Hn(e){let o=e.trim();return o!==""&&!o.startsWith("/")}var eco=()=>!1;var tco=()=>o$()&&!qlr()&&Wn("tengu_quiet_ember",eco());var UHn={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:tco,defaultEnabled:!1};function VSr({text:e,pastedContents:o,isSentByPerson:t,wait:r}){if(!t||r||!$Hn(e))return!1;try{return aDo(e,o).length===0&&Syt(UHn.name)}catch(i){return l(N(i)),!1}}
export{$Hn,eco,tco,UHn,VSr};
