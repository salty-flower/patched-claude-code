// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{nN,cte}from"./chunk-sgyvc67j.js";import{i}from"./chunk-z0p50v56.js";import{_}from"./chunk-am8gnetv.js";import{St,QW}from"./chunk-e02s7cks.js";import{h}from"./chunk-2rebt4am.js";import{Gn,ai}from"./chunk-8rqwttv3.js";import{Qt}from"./chunk-yyyfew8j.js";import{ft}from"./chunk-q87va14m.js";import{er}from"./chunk-xsncbnja.js";import{P3,FNe,I3,cU,pve,ofe}from"./chunk-e55d0yhx.js";function oln(t,n=!1){return`${pve(t)} Run /model fable${n?" in an interactive terminal session":""} to review and enable, then set it as the advisor.`}function Gwe(t,n,a,l,s=!0,g=!1){let r=ai(),e=t==="off"?void 0:er(t),f=e===void 0||FNe(e);if(i("tengu_advisor_command",{advisor:e===void 0?_("off"):f?St(t):cU(e)?_("consent_pending"):_("invalid"),remote:r}),!r&&Gn())return"The advisor can't be changed from this client \u2014 this connection is view-only or has no control channel";let m=r?" (this session only)":s?"":" for this session \u2014 run /advisor in the terminal to change your default";if(e===void 0){if(a((o)=>o.advisorModel===void 0?o:{...o,advisorModel:void 0}),r)Gn()?.sendControlRequest({subtype:"apply_flag_settings",settings:{advisorModel:null}}).catch(h);else if(c(""),s)Qt("userSettings",{advisorModel:void 0},void 0,l);return`Advisor disabled${m}`}if(!f){if(cU(e))return oln(e,g);let o=[...I3(),"off"].join(", ");return`${ft(QW(e))} cannot be used as an advisor. Valid options: ${o}`}if(a((o)=>o.advisorModel===e?o:{...o,advisorModel:e}),r)Gn()?.sendControlRequest({subtype:"apply_flag_settings",settings:{advisorModel:e}}).catch(h);else if(c(e),s)Qt("userSettings",{advisorModel:e},void 0,l);let v=ft(QW(e)),u=ft(QW(n)),d=`Advisor set to ${v}${m}`;if(!P3(n))d+=`
Note: the current main model (${u}) does not support the advisor. It will activate when you switch to a supported main model.`;else if(!ofe(n,e))d+=`
Note: ${v} is less capable than the current main model (${u}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;return d}function c(t){cte({...nN()??{},advisorModel:t})}
export{oln,Gwe};
