// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{z}from"./chunk-2vv5hpw3.js";import{Zu}from"./chunk-7ax1ky5d.js";import{_}from"./chunk-6ce4s97h.js";import{hx}from"./chunk-167xpx5m.js";import{eS}from"./chunk-255wp9zq.js";import{Zd}from"./chunk-5sytjnzz.js";import{F1e}from"./chunk-e27zdzbs.js";import{e}from"./chunk-azctepqx.js";var eAt=(p,r)=>new Promise((i,s)=>{let o=!1,n=null;function a(){return n!==null&&!Zu(n)}(async()=>{let{rerender:t,unmount:l,waitUntilExit:m}=await hx(e(Zd,{session:z(),children:e(F1e,{settings:p,reveal:"default",onAccept:()=>{if(!a())return!1;if(o=!0,i("approved"),r)t(null);else l()},onReject:()=>{if(!a())return!1;if(o=!0,i("rejected"),r)t(null);else l()}})},"managed-settings-security"),eS(!1));if(n=Date.now(),await m(),!o){let u=Error("Managed-settings consent dialog exited without an answer");_(u),s(u)}})().catch((t)=>{_(t),s(t)})});
export{eAt};
