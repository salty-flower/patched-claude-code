// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{W}from"./chunk-30zk17wm.js";import{Sc}from"./chunk-1qhg9hyg.js";import{h}from"./chunk-ma4xtxwv.js";import{Rx}from"./chunk-snr8xejh.js";import{NH}from"./chunk-wtjtqaca.js";import{vf}from"./chunk-5zhvdrb2.js";import{F1e}from"./chunk-5y2c93g2.js";import{e}from"./chunk-ys8dsnqt.js";var SCt=(p,r,m)=>new Promise((i,s)=>{let n=!1,o=null;function a(){return o!==null&&!Sc(o)}(async()=>{let{rerender:t,unmount:l,waitUntilExit:g}=await Rx(e(vf,{session:W(),children:e(F1e,{settings:p,baseline:m,reveal:"default",onAccept:()=>{if(!a())return!1;if(n=!0,i("approved"),r)t(null);else l()},onReject:()=>{if(!a())return!1;if(n=!0,i("rejected"),r)t(null);else l()}})},"managed-settings-security"),NH(!1));if(o=Date.now(),await g(),!n){let u=Error("Managed-settings consent dialog exited without an answer");h(u),s(u)}})().catch((t)=>{h(t),s(t)})});
export{SCt};
