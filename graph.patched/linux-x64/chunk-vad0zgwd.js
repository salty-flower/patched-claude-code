// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{n$,yQ}from"./chunk-bj7g1p32.js";import{i}from"./chunk-skkcgpsw.js";import{S}from"./chunk-vx4qhc14.js";import{Rt,M2}from"./chunk-3e93vkg3.js";import{h}from"./chunk-9g6v0ehs.js";import{Un,Js}from"./chunk-6f5agm7e.js";import{Qt}from"./chunk-33bqb969.js";import{pt}from"./chunk-nnhhr1jx.js";import{Qn}from"./chunk-0558tzyr.js";import{pz,jPe,mz,eF,xSe,xce}from"./chunk-y3swhsrk.js";function RZt(t,n=!1){return`${xSe(t)} Run /model fable${n?" in an interactive terminal session":""} to review and enable, then set it as the advisor.`}function a_e(t,n,a,l,s=!0,g=!1){let r=Js(),e=t==="off"?void 0:Qn(t),f=e===void 0||jPe(e);if(i("tengu_advisor_command",{advisor:e===void 0?S("off"):f?Rt(t):eF(e)?S("consent_pending"):S("invalid"),remote:r}),!r&&Un())return"The advisor can't be changed from this client \u2014 this connection is view-only or has no control channel";let m=r?" (this session only)":s?"":" for this session \u2014 run /advisor in the terminal to change your default";if(e===void 0){if(a((o)=>o.advisorModel===void 0?o:{...o,advisorModel:void 0}),r)Un()?.sendControlRequest({subtype:"apply_flag_settings",settings:{advisorModel:null}}).catch(h);else if(c(""),s)Qt("userSettings",{advisorModel:void 0},void 0,l);return`Advisor disabled${m}`}if(!f){if(eF(e))return RZt(e,g);let o=[...mz(),"off"].join(", ");return`${pt(M2(e))} cannot be used as an advisor. Valid options: ${o}`}if(a((o)=>o.advisorModel===e?o:{...o,advisorModel:e}),r)Un()?.sendControlRequest({subtype:"apply_flag_settings",settings:{advisorModel:e}}).catch(h);else if(c(e),s)Qt("userSettings",{advisorModel:e},void 0,l);let v=pt(M2(e)),u=pt(M2(n)),d=`Advisor set to ${v}${m}`;if(!pz(n))d+=`
Note: the current main model (${u}) does not support the advisor. It will activate when you switch to a supported main model.`;else if(!xce(n,e))d+=`
Note: ${v} is less capable than the current main model (${u}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;return d}function c(t){yQ({...n$()??{},advisorModel:t})}
export{RZt,a_e};
