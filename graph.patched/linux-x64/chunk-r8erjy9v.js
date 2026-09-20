// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Cc}from"./chunk-cq9ss1fx.js";import{m}from"./chunk-kh3dq6rw.js";import{TM}from"./chunk-g8n1e3fe.js";import{ix}from"./chunk-q5e3g4f2.js";import{vh}from"./chunk-kzdpz1a1.js";import{EXe}from"./chunk-eq4hskm2.js";import{e}from"./chunk-437ab22y.js";var vVt=(p,r,c)=>new Promise((i,a)=>{let n=!1,o=null;function s(){return o!==null&&!Cc(o)}(async()=>{let{rerender:t,unmount:l,waitUntilExit:d}=await TM(e(vh,{children:e(EXe,{settings:p,baseline:c,reveal:"default",onAccept:()=>{if(!s())return!1;if(n=!0,i("approved"),r)t(null);else l()},onReject:()=>{if(!s())return!1;if(n=!0,i("rejected"),r)t(null);else l()}})},"managed-settings-security"),ix(!1));if(o=Date.now(),await d(),!n){let u=Error("Managed-settings consent dialog exited without an answer");m(u),a(u)}})().catch((t)=>{m(t),a(t)})});
export{vVt};
