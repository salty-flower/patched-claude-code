// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{KW}from"./chunk-xzypj06m.js";import{k,iz}from"./chunk-1901fdh6.js";import{a}from"./chunk-k4g6y57j.js";import{nm,Wdn}from"./chunk-rk99n4cg.js";import{EPe,q_o}from"./chunk-w0epabcb.js";var t=300000;function K1n(){return a.CLAUDE_CODE_BRIEF||iz("tengu_kairos_brief",!1,t)}function dni(e){if(!e.includes(nm)&&!e.includes(Wdn))return!1;if(EPe())return!1;return K1n()}function d0(){return KW()&&K1n()||q_o()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${nm} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function cni(){let e=k("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{K1n,dni,d0,cni};
