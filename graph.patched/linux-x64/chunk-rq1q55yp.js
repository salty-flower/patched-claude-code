// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{KL,rte}from"./chunk-6n7yk222.js";import{i}from"./chunk-nx6yj2w6.js";import{_}from"./chunk-0rpkhv24.js";import{bt,jW}from"./chunk-ce4ppmnp.js";import{h}from"./chunk-p9k2m8jj.js";import{Wn,ii}from"./chunk-f4019nt1.js";import{Qt}from"./chunk-sp4f0zv3.js";import{ft}from"./chunk-jwp1p5wz.js";import{er}from"./chunk-dqr9knfd.js";import{wV,T$e,vV,ZU,rke,Xpe}from"./chunk-2byjyg85.js";function Ran(t,n=!1){return`${rke(t)} Run /model fable${n?" in an interactive terminal session":""} to review and enable, then set it as the advisor.`}function Fwe(t,n,a,l,s=!0,g=!1){let r=ii(),e=t==="off"?void 0:er(t),f=e===void 0||T$e(e);if(i("tengu_advisor_command",{advisor:e===void 0?_("off"):f?bt(t):ZU(e)?_("consent_pending"):_("invalid"),remote:r}),!r&&Wn())return"The advisor can't be changed from this client \u2014 this connection is view-only or has no control channel";let m=r?" (this session only)":s?"":" for this session \u2014 run /advisor in the terminal to change your default";if(e===void 0){if(a((o)=>o.advisorModel===void 0?o:{...o,advisorModel:void 0}),r)Wn()?.sendControlRequest({subtype:"apply_flag_settings",settings:{advisorModel:null}}).catch(h);else if(c(""),s)Qt("userSettings",{advisorModel:void 0},void 0,l);return`Advisor disabled${m}`}if(!f){if(ZU(e))return Ran(e,g);let o=[...vV(),"off"].join(", ");return`${ft(jW(e))} cannot be used as an advisor. Valid options: ${o}`}if(a((o)=>o.advisorModel===e?o:{...o,advisorModel:e}),r)Wn()?.sendControlRequest({subtype:"apply_flag_settings",settings:{advisorModel:e}}).catch(h);else if(c(e),s)Qt("userSettings",{advisorModel:e},void 0,l);let v=ft(jW(e)),u=ft(jW(n)),d=`Advisor set to ${v}${m}`;if(!wV(n))d+=`
Note: the current main model (${u}) does not support the advisor. It will activate when you switch to a supported main model.`;else if(!Xpe(n,e))d+=`
Note: ${v} is less capable than the current main model (${u}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;return d}function c(t){rte({...KL()??{},advisorModel:t})}
export{Ran,Fwe};
