// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Lz}from"./chunk-ersar6wn.js";import{k,QV}from"./chunk-27xjmczp.js";import{i}from"./chunk-9a41hw1t.js";import{rm,Urt}from"./chunk-vf2gp3w9.js";import{cGe,LLo}from"./chunk-6nbdfnt4.js";var t=300000;function S5n(){return i.CLAUDE_CODE_BRIEF||QV("tengu_kairos_brief",!1,t)}function jRi(e){if(!e.includes(rm)&&!e.includes(Urt))return!1;if(cGe())return!1;return S5n()}function B0(){return Lz()&&S5n()||LLo()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${rm} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function WRi(){let e=k("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{S5n,jRi,B0,WRi};
