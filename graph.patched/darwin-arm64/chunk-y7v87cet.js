// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{q}from"./chunk-yhfssb7x.js";import{wa}from"./chunk-wh45xnaa.js";import{h}from"./chunk-jx9d5yeb.js";import{EI}from"./chunk-86a8apqx.js";import{uT}from"./chunk-akx32wwr.js";import{Ip}from"./chunk-ttrdjeqw.js";import{qWe}from"./chunk-8fhm740p.js";import{e}from"./chunk-6ccz96s4.js";var RPt=(p,r,m)=>new Promise((i,s)=>{let n=!1,o=null;function a(){return o!==null&&!wa(o)}(async()=>{let{rerender:t,unmount:l,waitUntilExit:g}=await EI(e(Ip,{session:q(),children:e(qWe,{settings:p,baseline:m,reveal:"default",onAccept:()=>{if(!a())return!1;if(n=!0,i("approved"),r)t(null);else l()},onReject:()=>{if(!a())return!1;if(n=!0,i("rejected"),r)t(null);else l()}})},"managed-settings-security"),uT(!1));if(o=Date.now(),await g(),!n){let u=Error("Managed-settings consent dialog exited without an answer");h(u),s(u)}})().catch((t)=>{h(t),s(t)})});
export{RPt};
