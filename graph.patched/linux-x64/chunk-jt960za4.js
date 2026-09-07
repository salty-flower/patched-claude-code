// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{U}from"./chunk-bj7g1p32.js";import{la}from"./chunk-6x7fjw3y.js";import{h}from"./chunk-9g6v0ehs.js";import{Cx}from"./chunk-bkvzfc5q.js";import{Zv}from"./chunk-m4ydhcks.js";import{Mm}from"./chunk-j9gf9zkv.js";import{k2e}from"./chunk-hfgbmk1z.js";import{e}from"./chunk-smtaex5n.js";var CRt=(p,r,m)=>new Promise((i,s)=>{let n=!1,o=null;function a(){return o!==null&&!la(o)}(async()=>{let{rerender:t,unmount:l,waitUntilExit:g}=await Cx(e(Mm,{session:U(),children:e(k2e,{settings:p,baseline:m,reveal:"default",onAccept:()=>{if(!a())return!1;if(n=!0,i("approved"),r)t(null);else l()},onReject:()=>{if(!a())return!1;if(n=!0,i("rejected"),r)t(null);else l()}})},"managed-settings-security"),Zv(!1));if(o=Date.now(),await g(),!n){let u=Error("Managed-settings consent dialog exited without an answer");h(u),s(u)}})().catch((t)=>{h(t),s(t)})});
export{CRt};
