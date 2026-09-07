// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import{Ox}from"./chunk-2x3q7cfh.js";import{H,m0}from"./chunk-419zdfz3.js";import{a}from"./chunk-zqr5ctyf.js";import{t_,yet}from"./chunk-q599wyee.js";import{Qpe,VSn}from"./chunk-0qtt3z52.js";var t=300000;function Lbt(){return a.CLAUDE_CODE_BRIEF||m0("tengu_kairos_brief",!1,t)}function ryr(e){if(!e.includes(t_)&&!e.includes(yet))return!1;if(Qpe())return!1;return Lbt()}function YAe(){return Ox()&&Lbt()||VSn()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${t_} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function oyr(){let e=H("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{Lbt,ryr,YAe,oyr};
