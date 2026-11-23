// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{pBt,uDs}from"./chunk-n5gz60vv.js";import{N}from"./chunk-wryttfdq.js";import{Jt}from"./chunk-e44qnbvj.js";import{a}from"./chunk-mddke2ke.js";import{FDe,i1}from"./chunk-gg7nabmz.js";function shr(e){let o=e.trim();return o!==""&&!o.startsWith("/")}var Oas=()=>!1;var Ias=()=>i1()&&!FDe()&&Jt("tengu_quiet_ember",Oas());var ihr={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:Ias,defaultEnabled:!1};function vao({text:e,pastedContents:o,isSentByPerson:t,wait:r}){if(!t||r||!shr(e))return!1;try{return uDs(e,o).length===0&&pBt(ihr.name)}catch(i){return a(N(i)),!1}}
export{shr,Oas,Ias,ihr,vao};
