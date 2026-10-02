// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{QN}from"./chunk-a7cah040.js";import{x,J$}from"./chunk-er6f56rj.js";import{a}from"./chunk-1fpwxv0g.js";import{yp,IUt}from"./chunk-pnss6pgj.js";import{OAe,vPr}from"./chunk-9dfyh4w7.js";var t=300000;function V8t(){return a.CLAUDE_CODE_BRIEF||J$("tengu_kairos_brief",!1,t)}function Y8o(e){if(!e.includes(yp)&&!e.includes(IUt))return!1;if(OAe())return!1;return V8t()}function rU(){return QN()&&V8t()||vPr()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${yp} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function X8o(){let e=x("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{V8t,Y8o,rU,X8o};
