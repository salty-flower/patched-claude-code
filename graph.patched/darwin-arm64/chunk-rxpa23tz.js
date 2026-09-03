// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{G}from"./chunk-hdbxv3pp.js";import{ha}from"./chunk-1f1p48wh.js";import{h}from"./chunk-1mtde6n1.js";import{vI}from"./chunk-t50adtrb.js";import{ew}from"./chunk-53qqp41c.js";import{vp}from"./chunk-9haww9m4.js";import{cje}from"./chunk-kqtg5qyb.js";import{e}from"./chunk-v5r13aq1.js";var A0t=(p,r,m)=>new Promise((i,s)=>{let n=!1,o=null;function a(){return o!==null&&!ha(o)}(async()=>{let{rerender:t,unmount:l,waitUntilExit:g}=await vI(e(vp,{session:G(),children:e(cje,{settings:p,baseline:m,reveal:"default",onAccept:()=>{if(!a())return!1;if(n=!0,i("approved"),r)t(null);else l()},onReject:()=>{if(!a())return!1;if(n=!0,i("rejected"),r)t(null);else l()}})},"managed-settings-security"),ew(!1));if(o=Date.now(),await g(),!n){let u=Error("Managed-settings consent dialog exited without an answer");h(u),s(u)}})().catch((t)=>{h(t),s(t)})});
export{A0t};
