// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{uL,vQ}from"./chunk-zhtwayh2.js";import{i}from"./chunk-vtd04czk.js";import{b}from"./chunk-gnrvsty9.js";import{Ht,q6}from"./chunk-n495pc0t.js";import{h}from"./chunk-c5ajdz5z.js";import{jn,Js}from"./chunk-1rkars97.js";import{Qt}from"./chunk-pe4nmbcg.js";import{ft}from"./chunk-t4hc7q7h.js";import{Qn}from"./chunk-d5e21f8p.js";import{E9,eOe,A9,cF,Ube,Fce}from"./chunk-1692k4g5.js";function JZt(t,n=!1){return`${Ube(t)} Run /model fable${n?" in an interactive terminal session":""} to review and enable, then set it as the advisor.`}function fye(t,n,a,l,s=!0,g=!1){let r=Js(),e=t==="off"?void 0:Qn(t),f=e===void 0||eOe(e);if(i("tengu_advisor_command",{advisor:e===void 0?b("off"):f?Ht(t):cF(e)?b("consent_pending"):b("invalid"),remote:r}),!r&&jn())return"The advisor can't be changed from this client \u2014 this connection is view-only or has no control channel";let m=r?" (this session only)":s?"":" for this session \u2014 run /advisor in the terminal to change your default";if(e===void 0){if(a((o)=>o.advisorModel===void 0?o:{...o,advisorModel:void 0}),r)jn()?.sendControlRequest({subtype:"apply_flag_settings",settings:{advisorModel:null}}).catch(h);else if(c(""),s)Qt("userSettings",{advisorModel:void 0},void 0,l);return`Advisor disabled${m}`}if(!f){if(cF(e))return JZt(e,g);let o=[...A9(),"off"].join(", ");return`${ft(q6(e))} cannot be used as an advisor. Valid options: ${o}`}if(a((o)=>o.advisorModel===e?o:{...o,advisorModel:e}),r)jn()?.sendControlRequest({subtype:"apply_flag_settings",settings:{advisorModel:e}}).catch(h);else if(c(e),s)Qt("userSettings",{advisorModel:e},void 0,l);let v=ft(q6(e)),u=ft(q6(n)),d=`Advisor set to ${v}${m}`;if(!E9(n))d+=`
Note: the current main model (${u}) does not support the advisor. It will activate when you switch to a supported main model.`;else if(!Fce(n,e))d+=`
Note: ${v} is less capable than the current main model (${u}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;return d}function c(t){vQ({...uL()??{},advisorModel:t})}
export{JZt,fye};
