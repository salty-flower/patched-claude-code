// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{pj}from"./chunk-4bw62nzm.js";import{k,RW}from"./chunk-bk5ct2gw.js";import{a}from"./chunk-yvnhkg35.js";import{Kf,ptn}from"./chunk-g1yqb0n4.js";import{LCe,Gso}from"./chunk-6nfqw5w9.js";var t=300000;function W0n(){return a.CLAUDE_CODE_BRIEF||RW("tengu_kairos_brief",!1,t)}function XWs(e){if(!e.includes(Kf)&&!e.includes(ptn))return!1;if(LCe())return!1;return W0n()}function zI(){return pj()&&W0n()||Gso()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${Kf} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function JWs(){let e=k("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{W0n,XWs,zI,JWs};
