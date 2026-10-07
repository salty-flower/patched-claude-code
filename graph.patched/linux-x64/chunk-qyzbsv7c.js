// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{XU}from"./chunk-aywwjcwq.js";import{T,K1}from"./chunk-m0sj7y8g.js";import{a}from"./chunk-869zfth6.js";import{bf,KYt}from"./chunk-pvw1e2q4.js";import{ave,r6r}from"./chunk-mfzjsk2y.js";var t=300000;function Pvn(){return a.CLAUDE_CODE_BRIEF||K1("tengu_kairos_brief",!1,t)}function hks(e){if(!e.includes(bf)&&!e.includes(KYt))return!1;if(ave())return!1;return Pvn()}function rP(){return XU()&&Pvn()||r6r()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${bf} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function yks(){let e=T("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{Pvn,hks,rP,yks};
