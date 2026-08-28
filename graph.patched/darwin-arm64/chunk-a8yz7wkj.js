// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{bk}from"./chunk-g4zaymy2.js";import{x,TR}from"./chunk-ghnc2x4f.js";import{a}from"./chunk-bn8q5mbz.js";import{k_,M8e}from"./chunk-pp925av2.js";import{Fae,Qan}from"./chunk-wtpahcdq.js";var t=300000;function Kdt(){return a.CLAUDE_CODE_BRIEF||TR("tengu_kairos_brief",!1,t)}function O_r(e){if(!e.includes(k_)&&!e.includes(M8e))return!1;if(Fae())return!1;return Kdt()}function x_e(){return bk()&&Kdt()||Qan()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${k_} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function H_r(){let e=x("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{Kdt,O_r,x_e,H_r};
