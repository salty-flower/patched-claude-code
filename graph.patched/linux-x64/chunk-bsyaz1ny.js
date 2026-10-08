// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{qB}from"./chunk-g79wjybr.js";import{T,eW}from"./chunk-cxjvwxsa.js";import{a}from"./chunk-rptge3r8.js";import{If,YXt}from"./chunk-fs1m5djd.js";import{ake,qQr}from"./chunk-ck3hfy4b.js";var t=300000;function _Cn(){return a.CLAUDE_CODE_BRIEF||eW("tengu_kairos_brief",!1,t)}function wHs(e){if(!e.includes(If)&&!e.includes(YXt))return!1;if(ake())return!1;return _Cn()}function RP(){return qB()&&_Cn()||qQr()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${If} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function vHs(){let e=T("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{_Cn,wHs,RP,vHs};
