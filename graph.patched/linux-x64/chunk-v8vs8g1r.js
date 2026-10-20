// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{fi,pU}from"./chunk-wfsayads.js";import{Ui}from"./chunk-c3j2rme1.js";import{l}from"./chunk-jkcb7qdd.js";import{w}from"./chunk-eg40vngy.js";import{MA}from"./chunk-gvr5726k.js";import{k_}from"./chunk-d3bt15sk.js";import{u0e}from"./chunk-aymw8a1x.js";import{e}from"./chunk-8d2nhg02.js";var TEt=(g,s,u)=>new Promise((a,c)=>{let n=!1,o=null;function i(t){return o!==null&&!Ui(t,o)}(async()=>{let{rerender:t,unmount:p,waitUntilExit:f}=await pU(e(k_,{children:e(d,{settings:g,baseline:u,onAccept:(r)=>{if(!i(r))return!1;if(n=!0,a("approved"),t(null),!s)p()},onReject:(r)=>{if(!i(r))return!1;if(n=!0,a("rejected"),t(null),!s)p()}})},"managed-settings-security"),MA(!1));if(o=Date.now(),await f(),!n){let r=Error("Managed-settings consent dialog exited without an answer");l(r),c(r)}})().catch((t)=>{l(t),c(t)})});function d(g){let o=w(11),{settings:s,baseline:u,onAccept:a,onReject:c}=g,n=fi(),i;if(o[0]!==n||o[1]!==a)i=()=>a(n),o[0]=n,o[1]=a,o[2]=i;else i=o[2];let t;if(o[3]!==n||o[4]!==c)t=()=>c(n),o[3]=n,o[4]=c,o[5]=t;else t=o[5];let p;if(o[6]!==u||o[7]!==s||o[8]!==i||o[9]!==t)p=e(u0e,{settings:s,baseline:u,reveal:"default",onAccept:i,onReject:t}),o[6]=u,o[7]=s,o[8]=i,o[9]=t,o[10]=p;else p=o[10];return p}
export{TEt};
