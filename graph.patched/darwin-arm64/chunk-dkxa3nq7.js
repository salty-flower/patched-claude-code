// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{kc}from"./chunk-wd56da0m.js";import{g}from"./chunk-vzm3bfp5.js";import{$D}from"./chunk-cskdt2sa.js";import{ux}from"./chunk-7jbckc9v.js";import{vh}from"./chunk-42kchtvm.js";import{q7e}from"./chunk-mma8d74g.js";import{e}from"./chunk-437ab22y.js";var iVt=(p,r,c)=>new Promise((i,a)=>{let n=!1,o=null;function s(){return o!==null&&!kc(o)}(async()=>{let{rerender:t,unmount:l,waitUntilExit:d}=await $D(e(vh,{children:e(q7e,{settings:p,baseline:c,reveal:"default",onAccept:()=>{if(!s())return!1;if(n=!0,i("approved"),r)t(null);else l()},onReject:()=>{if(!s())return!1;if(n=!0,i("rejected"),r)t(null);else l()}})},"managed-settings-security"),ux(!1));if(o=Date.now(),await d(),!n){let u=Error("Managed-settings consent dialog exited without an answer");g(u),a(u)}})().catch((t)=>{g(t),a(t)})});
export{iVt};
