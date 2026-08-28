// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{no as u}from"./_130.js";import{vz as d}from"./_243.js";import{AC as c,BC as D}from"./_275.js";import{ccb as m,ecb as h}from"./_488.js";import{leb as n,neb as g}from"./_497.js";import{Qcd as o,Ycd as y}from"./_802.js";import{Jid as l,krd as w}from"./_812.js";w();h();y();D();g();var M=(S,i)=>new Promise((r,s)=>{let t=!1;(async()=>{let{rerender:e,unmount:a,waitUntilExit:f}=await m(n(c,{session:l(),children:n(u,{settings:S,onAccept:()=>{if(t=!0,r("approved"),i)e(null);else a()},onReject:()=>{if(t=!0,r("rejected"),i)e(null);else a()}})},"managed-settings-security"),d(!1));if(await f(),!t){let p=Error("Managed-settings consent dialog exited without an answer");o(p),s(p)}})().catch((e)=>{o(e),s(e)})});
export{M as ko};
