// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{WH}from"./chunk-txfrkyzp.js";import{P,PO}from"./chunk-30p0nwys.js";import{a}from"./chunk-q2vrcqny.js";import{j_,Egt}from"./chunk-bb220g96.js";import{uve,mWn}from"./chunk-dsaz0t62.js";var t=300000;function QNt(){return a.CLAUDE_CODE_BRIEF||PO("tengu_kairos_brief",!1,t)}function G6r(e){if(!e.includes(j_)&&!e.includes(Egt))return!1;if(uve())return!1;return QNt()}function vMe(){return WH()&&QNt()||mWn()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${j_} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function q6r(){let e=P("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{QNt,G6r,vMe,q6r};
