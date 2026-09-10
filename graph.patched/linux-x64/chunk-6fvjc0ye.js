// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{RI}from"./chunk-6n7yk222.js";import{I,rH}from"./chunk-ce4ppmnp.js";import{a}from"./chunk-1bwwmttj.js";import{Ey,mot}from"./chunk-19cvhbkw.js";import{Ege,eTn}from"./chunk-x5y324qc.js";var t=300000;function Ukt(){return a.CLAUDE_CODE_BRIEF||rH("tengu_kairos_brief",!1,t)}function mCr(e){if(!e.includes(Ey)&&!e.includes(mot))return!1;if(Ege())return!1;return Ukt()}function ICe(){return RI()&&Ukt()||eTn()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${Ey} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function gCr(){let e=I("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{Ukt,mCr,ICe,gCr};
