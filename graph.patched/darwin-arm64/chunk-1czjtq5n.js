// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{B}from"./chunk-sgyvc67j.js";import{Ol}from"./chunk-2tfn2mvp.js";import{h}from"./chunk-2rebt4am.js";import{ZP}from"./chunk-ykvaeqdn.js";import{ck}from"./chunk-afkfkrxt.js";import{wg}from"./chunk-2x51r6p1.js";import{J3e}from"./chunk-mkdahcq0.js";import{e}from"./chunk-qs39f0kj.js";var FMt=(p,r,m)=>new Promise((i,s)=>{let n=!1,o=null;function a(){return o!==null&&!Ol(o)}(async()=>{let{rerender:t,unmount:l,waitUntilExit:g}=await ZP(e(wg,{session:B(),children:e(J3e,{settings:p,baseline:m,reveal:"default",onAccept:()=>{if(!a())return!1;if(n=!0,i("approved"),r)t(null);else l()},onReject:()=>{if(!a())return!1;if(n=!0,i("rejected"),r)t(null);else l()}})},"managed-settings-security"),ck(!1));if(o=Date.now(),await g(),!n){let u=Error("Managed-settings consent dialog exited without an answer");h(u),s(u)}})().catch((t)=>{h(t),s(t)})});
export{FMt};
