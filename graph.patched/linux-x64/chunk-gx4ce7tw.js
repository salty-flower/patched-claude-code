// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{OI,nG}from"./chunk-txfrkyzp.js";import{i}from"./chunk-5a4y4a7y.js";import{b}from"./chunk-p9tbyvzw.js";import{wt,SK}from"./chunk-30p0nwys.js";import{m}from"./chunk-kh3dq6rw.js";import{er,Mi}from"./chunk-qrf0f0ev.js";import{tn}from"./chunk-ggjhe3cp.js";import{yt}from"./chunk-b48ax99g.js";import{Yn}from"./chunk-s3hsf7ap.js";import{y6,vWe,_6,h2,lHe,sSe}from"./chunk-v4zgc4qd.js";function kAn(t,n=!1){return`${lHe(t)} Run /model fable${n?" in an interactive terminal session":""} to review and enable, then set it as the advisor.`}function YRe(t,n,a,l,s=!0,p=!1){let r=Mi(),e=t==="off"?void 0:Yn(t),f=e===void 0||vWe(e);if(i("tengu_advisor_command",{advisor:e===void 0?b("off"):f?wt(t):h2(e)?b("consent_pending"):b("invalid"),remote:r}),!r&&er())return"The advisor can't be changed from this client \u2014 this connection is view-only or has no control channel";let v=r?" (this session only)":s?"":" for this session \u2014 run /advisor in the terminal to change your default";if(e===void 0){if(a((o)=>o.advisorModel===void 0?o:{...o,advisorModel:void 0}),r)er()?.sendControlRequest({subtype:"apply_flag_settings",settings:{advisorModel:null}}).catch(m);else if(g(""),s)tn("userSettings",{advisorModel:void 0},void 0,l);return`Advisor disabled${v}`}if(!f){if(h2(e))return kAn(e,p);let o=[..._6(),"off"].join(", ");return`${yt(SK(e))} cannot be used as an advisor. Valid options: ${o}`}if(a((o)=>o.advisorModel===e?o:{...o,advisorModel:e}),r)er()?.sendControlRequest({subtype:"apply_flag_settings",settings:{advisorModel:e}}).catch(m);else if(g(e),s)tn("userSettings",{advisorModel:e},void 0,l);let u=yt(SK(e)),c=yt(SK(n)),d=`Advisor set to ${u}${v}`;if(!y6(n))d+=`
Note: the current main model (${c}) does not support the advisor. It will activate when you switch to a supported main model.`;else if(!sSe(n,e))d+=`
Note: ${u} is less capable than the current main model (${c}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;return d}function g(t){nG({...OI()??{},advisorModel:t})}
export{kAn,YRe};
