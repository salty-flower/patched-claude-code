// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{U0,cz}from"./chunk-sgamszzq.js";import{i}from"./chunk-jxv3x25k.js";import{S}from"./chunk-k6smmjsm.js";import{wt,RV}from"./chunk-g4c6ggz4.js";import{g}from"./chunk-vzm3bfp5.js";import{er,Di}from"./chunk-w0wezkwh.js";import{tn}from"./chunk-k515hq0v.js";import{yt}from"./chunk-nxhd1nfq.js";import{Yn}from"./chunk-yvbqdrex.js";import{AK,LWe,CK,Aj,_Pe,fbe}from"./chunk-nq62bgfy.js";function qCn(t,n=!1){return`${_Pe(t)} Run /model fable${n?" in an interactive terminal session":""} to review and enable, then set it as the advisor.`}function rxe(t,n,a,l,s=!0,p=!1){let r=Di(),e=t==="off"?void 0:Yn(t),f=e===void 0||LWe(e);if(i("tengu_advisor_command",{advisor:e===void 0?S("off"):f?wt(t):Aj(e)?S("consent_pending"):S("invalid"),remote:r}),!r&&er())return"The advisor can't be changed from this client \u2014 this connection is view-only or has no control channel";let m=r?" (this session only)":s?"":" for this session \u2014 run /advisor in the terminal to change your default";if(e===void 0){if(a((o)=>o.advisorModel===void 0?o:{...o,advisorModel:void 0}),r)er()?.sendControlRequest({subtype:"apply_flag_settings",settings:{advisorModel:null}}).catch(g);else if(c(""),s)tn("userSettings",{advisorModel:void 0},void 0,l);return`Advisor disabled${m}`}if(!f){if(Aj(e))return qCn(e,p);let o=[...CK(),"off"].join(", ");return`${yt(RV(e))} cannot be used as an advisor. Valid options: ${o}`}if(a((o)=>o.advisorModel===e?o:{...o,advisorModel:e}),r)er()?.sendControlRequest({subtype:"apply_flag_settings",settings:{advisorModel:e}}).catch(g);else if(c(e),s)tn("userSettings",{advisorModel:e},void 0,l);let v=yt(RV(e)),u=yt(RV(n)),d=`Advisor set to ${v}${m}`;if(!AK(n))d+=`
Note: the current main model (${u}) does not support the advisor. It will activate when you switch to a supported main model.`;else if(!fbe(n,e))d+=`
Note: ${v} is less capable than the current main model (${u}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;return d}function c(t){cz({...U0()??{},advisorModel:t})}
export{qCn,rxe};
