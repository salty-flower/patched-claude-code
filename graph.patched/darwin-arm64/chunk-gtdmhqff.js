// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{W}from"./chunk-g4zaymy2.js";import{ed}from"./chunk-kb8k2djv.js";import{b}from"./chunk-w2hwjymv.js";import{bx}from"./chunk-htcaw08y.js";import{ZS}from"./chunk-dcv4n66b.js";import{Zd}from"./chunk-h61f7dqy.js";import{GNe}from"./chunk-qnzy9dgz.js";import{e}from"./chunk-80eepr01.js";var cEt=(p,r)=>new Promise((i,s)=>{let o=!1,n=null;function a(){return n!==null&&!ed(n)}(async()=>{let{rerender:t,unmount:l,waitUntilExit:m}=await bx(e(Zd,{session:W(),children:e(GNe,{settings:p,reveal:"default",onAccept:()=>{if(!a())return!1;if(o=!0,i("approved"),r)t(null);else l()},onReject:()=>{if(!a())return!1;if(o=!0,i("rejected"),r)t(null);else l()}})},"managed-settings-security"),ZS(!1));if(n=Date.now(),await m(),!o){let u=Error("Managed-settings consent dialog exited without an answer");b(u),s(u)}})().catch((t)=>{b(t),s(t)})});
export{cEt};
