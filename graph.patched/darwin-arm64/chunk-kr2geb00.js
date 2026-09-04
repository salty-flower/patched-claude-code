// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{iH}from"./chunk-yhfssb7x.js";import{P,N0}from"./chunk-vtwn1md5.js";import{a}from"./chunk-g2ngvza5.js";import{h_,met}from"./chunk-1vdcb6bs.js";import{sme,TTn}from"./chunk-mtqwwfvm.js";var t=300000;function Qwt(){return a.CLAUDE_CODE_BRIEF||N0("tengu_kairos_brief",!1,t)}function NPr(e){if(!e.includes(h_)&&!e.includes(met))return!1;if(sme())return!1;return Qwt()}function rve(){return iH()&&Qwt()||TTn()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${h_} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function FPr(){let e=P("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{Qwt,NPr,rve,FPr};
