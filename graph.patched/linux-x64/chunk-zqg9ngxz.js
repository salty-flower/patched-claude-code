// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{B}from"./chunk-6n7yk222.js";import{Ml}from"./chunk-h8p4fx5q.js";import{h}from"./chunk-p9k2m8jj.js";import{BH}from"./chunk-q8bwyp41.js";import{sC}from"./chunk-aywghqtk.js";import{yg}from"./chunk-9hdwc0ce.js";import{UVe}from"./chunk-g8zan4ka.js";import{e}from"./chunk-qs39f0kj.js";var vLt=(p,r,m)=>new Promise((i,s)=>{let n=!1,o=null;function a(){return o!==null&&!Ml(o)}(async()=>{let{rerender:t,unmount:l,waitUntilExit:g}=await BH(e(yg,{session:B(),children:e(UVe,{settings:p,baseline:m,reveal:"default",onAccept:()=>{if(!a())return!1;if(n=!0,i("approved"),r)t(null);else l()},onReject:()=>{if(!a())return!1;if(n=!0,i("rejected"),r)t(null);else l()}})},"managed-settings-security"),sC(!1));if(o=Date.now(),await g(),!n){let u=Error("Managed-settings consent dialog exited without an answer");h(u),s(u)}})().catch((t)=>{h(t),s(t)})});
export{vLt};
