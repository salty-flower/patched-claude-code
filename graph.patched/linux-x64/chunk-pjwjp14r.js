// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{gH}from"./chunk-2vv5hpw3.js";import{x,_C}from"./chunk-ns0ekkj0.js";import{a}from"./chunk-g0kfvhx3.js";import{Hb,O8e}from"./chunk-hdxkjmp1.js";import{Dae,Xan}from"./chunk-s4eqpdjh.js";var t=300000;function Vdt(){return a.CLAUDE_CODE_BRIEF||_C("tengu_kairos_brief",!1,t)}function Abr(e){if(!e.includes(Hb)&&!e.includes(O8e))return!1;if(Dae())return!1;return Vdt()}function kbe(){return gH()&&Vdt()||Xan()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${Hb} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function kbr(){let e=x("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{Vdt,Abr,kbe,kbr};
