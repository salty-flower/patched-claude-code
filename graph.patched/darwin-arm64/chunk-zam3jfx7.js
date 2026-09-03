// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Xx}from"./chunk-hdbxv3pp.js";import{P,w0}from"./chunk-h6md7820.js";import{a}from"./chunk-pv906ex9.js";import{d_,NQe}from"./chunk-2q2nc49z.js";import{ofe,mSn}from"./chunk-1w859dtc.js";var t=300000;function KSt(){return a.CLAUDE_CODE_BRIEF||w0("tengu_kairos_brief",!1,t)}function qxr(e){if(!e.includes(d_)&&!e.includes(NQe))return!1;if(ofe())return!1;return KSt()}function LAe(){return Xx()&&KSt()||mSn()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${d_} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function zxr(){let e=P("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{KSt,qxr,LAe,zxr};
