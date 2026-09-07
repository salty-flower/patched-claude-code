// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import{U}from"./chunk-k6vqz9fa.js";import{ma}from"./chunk-sp41hn6h.js";import{h}from"./chunk-r1xh498w.js";import{Nx}from"./chunk-ne2fkdm9.js";import{hk}from"./chunk-be72hmxn.js";import{zm}from"./chunk-91zr9r53.js";import{eze}from"./chunk-davqfvfx.js";import{e}from"./chunk-kwtapczy.js";var TLt=(p,r,m)=>new Promise((i,s)=>{let n=!1,o=null;function a(){return o!==null&&!ma(o)}(async()=>{let{rerender:t,unmount:l,waitUntilExit:g}=await Nx(e(zm,{session:U(),children:e(eze,{settings:p,baseline:m,reveal:"default",onAccept:()=>{if(!a())return!1;if(n=!0,i("approved"),r)t(null);else l()},onReject:()=>{if(!a())return!1;if(n=!0,i("rejected"),r)t(null);else l()}})},"managed-settings-security"),hk(!1));if(o=Date.now(),await g(),!n){let u=Error("Managed-settings consent dialog exited without an answer");h(u),s(u)}})().catch((t)=>{h(t),s(t)})});
export{TLt};
