// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{vx}from"./chunk-zhtwayh2.js";import{I,t0}from"./chunk-n495pc0t.js";import{a}from"./chunk-dq2s4wjn.js";import{Vh,vQe}from"./chunk-kyxky0qb.js";import{_pe,tyn}from"./chunk-d87d5593.js";var t=300000;function lSt(){return a.CLAUDE_CODE_BRIEF||t0("tengu_kairos_brief",!1,t)}function egr(e){if(!e.includes(Vh)&&!e.includes(vQe))return!1;if(_pe())return!1;return lSt()}function aAe(){return vx()&&lSt()||tyn()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${Vh} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function tgr(){let e=I("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{lSt,egr,aAe,tgr};
