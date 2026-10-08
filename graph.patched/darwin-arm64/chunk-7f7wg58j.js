// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{nB}from"./chunk-vd0a9d2s.js";import{C,f2}from"./chunk-gcyvvtkw.js";import{a}from"./chunk-70qqbqq4.js";import{If,u7t}from"./chunk-ccbm7724.js";import{mke,bQr}from"./chunk-kgetn13g.js";var t=300000;function LTn(){return a.CLAUDE_CODE_BRIEF||f2("tengu_kairos_brief",!1,t)}function sMs(e){if(!e.includes(If)&&!e.includes(u7t))return!1;if(mke())return!1;return LTn()}function IP(){return nB()&&LTn()||bQr()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${If} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function iMs(){let e=C("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{LTn,sMs,IP,iMs};
