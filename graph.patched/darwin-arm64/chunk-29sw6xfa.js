// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{ZP}from"./chunk-sgamszzq.js";import{P,WO}from"./chunk-g4c6ggz4.js";import{a}from"./chunk-wkhfcbsj.js";import{W_,Ngt}from"./chunk-jmhxqcfx.js";import{SEe,jWn}from"./chunk-4s6be00e.js";var t=300000;function g1t(){return a.CLAUDE_CODE_BRIEF||WO("tengu_kairos_brief",!1,t)}function H9r(e){if(!e.includes(W_)&&!e.includes(Ngt))return!1;if(SEe())return!1;return g1t()}function PDe(){return ZP()&&g1t()||jWn()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${W_} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function P9r(){let e=P("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{g1t,H9r,PDe,P9r};
