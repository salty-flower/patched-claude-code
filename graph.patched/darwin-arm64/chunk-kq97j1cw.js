// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{B}from"./chunk-cet8na02.js";import{Hl}from"./chunk-65ktd601.js";import{h}from"./chunk-e0gvmsm3.js";import{FI}from"./chunk-dqjxa0y4.js";import{GT}from"./chunk-jw5g2v2n.js";import{ag}from"./chunk-bdswehyx.js";import{TGe}from"./chunk-en9hjpcn.js";import{e}from"./chunk-zhg3ync1.js";var FDt=(p,r,m)=>new Promise((i,s)=>{let n=!1,o=null;function a(){return o!==null&&!Hl(o)}(async()=>{let{rerender:t,unmount:l,waitUntilExit:g}=await FI(e(ag,{session:B(),children:e(TGe,{settings:p,baseline:m,reveal:"default",onAccept:()=>{if(!a())return!1;if(n=!0,i("approved"),r)t(null);else l()},onReject:()=>{if(!a())return!1;if(n=!0,i("rejected"),r)t(null);else l()}})},"managed-settings-security"),GT(!1));if(o=Date.now(),await g(),!n){let u=Error("Managed-settings consent dialog exited without an answer");h(u),s(u)}})().catch((t)=>{h(t),s(t)})});
export{FDt};
