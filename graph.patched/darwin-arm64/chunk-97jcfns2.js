// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{G}from"./chunk-38213y7h.js";import{bc}from"./chunk-ae5sep8s.js";import{h}from"./chunk-qpcjd2zp.js";import{Ox}from"./chunk-hm4dvvtr.js";import{Fw}from"./chunk-wvag5qvx.js";import{Cp}from"./chunk-km4np6mj.js";import{UUe}from"./chunk-xfk91nz7.js";import{e}from"./chunk-wk3xnwvn.js";var bkt=(p,r,m)=>new Promise((i,s)=>{let n=!1,o=null;function a(){return o!==null&&!bc(o)}(async()=>{let{rerender:t,unmount:l,waitUntilExit:g}=await Ox(e(Cp,{session:G(),children:e(UUe,{settings:p,baseline:m,reveal:"default",onAccept:()=>{if(!a())return!1;if(n=!0,i("approved"),r)t(null);else l()},onReject:()=>{if(!a())return!1;if(n=!0,i("rejected"),r)t(null);else l()}})},"managed-settings-security"),Fw(!1));if(o=Date.now(),await g(),!n){let u=Error("Managed-settings consent dialog exited without an answer");h(u),s(u)}})().catch((t)=>{h(t),s(t)})});
export{bkt};
