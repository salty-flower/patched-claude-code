// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{_d,Zge,na,k}from"./chunk-bvn0epzr.js";import{NB,On}from"./chunk-kpqr86hf.js";import{_r}from"./chunk-jrcdjayr.js";import{a}from"./chunk-h422gpw8.js";import{Ct}from"./chunk-277zhca1.js";import{RB,jyn,TO}from"./chunk-pvfq0951.js";import{Pe}from"./chunk-gsezw0ay.js";import{rn}from"./chunk-x65hqvsd.js";import{PYe}from"./chunk-5mcdns09.js";var l="tengu_copper_gazette";var x=!1;var bcr=()=>k(l,x)===!0;var jQr=(o)=>o.find((u)=>u!==!1)||void 0;function E(){let{source:o}=na();return o==="CLAUDE_CODE_OAUTH_TOKEN"||o==="CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR"}var _=()=>na().source==="CCR_OAUTH_TOKEN_FILE"&&NB()&&_d();var g=()=>jyn()&&!TO()&&_d()&&(E()||_());var oRn=()=>Zge()&&!On()&&(RB()&&na().source==="CLAUDE_CODE_OAUTH_TOKEN"||g());var O=()=>PYe()||oRn();var V3t="allow_plugin_publish";var ois=()=>a.CLAUDE_CODE_REMOTE?"cloud-session":"signed-out";var wcr=()=>jQr([Pe()!=="firstParty"&&"third-party",_r()&&"bare",Ct()&&"traffic-off",!rn(V3t)&&"policy",!O()&&ois()]);export{bcr,jQr,oRn,V3t,ois,wcr};
