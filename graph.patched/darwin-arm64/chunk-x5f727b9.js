// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Zi,J1}from"./chunk-7car90a2.js";import{ha}from"./chunk-6d9n0jaa.js";import{l}from"./chunk-thm21ca7.js";import{w}from"./chunk-zqxc4qtb.js";import{LA}from"./chunk-a1a1j6w7.js";import{eS}from"./chunk-x7d9yajv.js";import{Y$e}from"./chunk-pa7t20es.js";import{e}from"./chunk-f790ajz4.js";var uxt=(g,s,u)=>new Promise((a,c)=>{let n=!1,o=null;function i(t){return o!==null&&!ha(t,o)}(async()=>{let{rerender:t,unmount:p,waitUntilExit:f}=await J1(e(eS,{children:e(d,{settings:g,baseline:u,onAccept:(r)=>{if(!i(r))return!1;if(n=!0,a("approved"),t(null),!s)p()},onReject:(r)=>{if(!i(r))return!1;if(n=!0,a("rejected"),t(null),!s)p()}})},"managed-settings-security"),LA(!1));if(o=Date.now(),await f(),!n){let r=Error("Managed-settings consent dialog exited without an answer");l(r),c(r)}})().catch((t)=>{l(t),c(t)})});function d(g){let o=w(11),{settings:s,baseline:u,onAccept:a,onReject:c}=g,n=Zi(),i;if(o[0]!==n||o[1]!==a)i=()=>a(n),o[0]=n,o[1]=a,o[2]=i;else i=o[2];let t;if(o[3]!==n||o[4]!==c)t=()=>c(n),o[3]=n,o[4]=c,o[5]=t;else t=o[5];let p;if(o[6]!==u||o[7]!==s||o[8]!==i||o[9]!==t)p=e(Y$e,{settings:s,baseline:u,reveal:"default",onAccept:i,onReject:t}),o[6]=u,o[7]=s,o[8]=i,o[9]=t,o[10]=p;else p=o[10];return p}
export{uxt};
