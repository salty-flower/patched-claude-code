// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{FW}from"./chunk-eqmywwjn.js";import{k,XG}from"./chunk-k16gymf7.js";import{a}from"./chunk-xwn0mfnc.js";import{nm,Cdn}from"./chunk-bsdd04br.js";import{gPe,__o}from"./chunk-tz5vag1y.js";var t=300000;function PBn(){return a.CLAUDE_CODE_BRIEF||XG("tengu_kairos_brief",!1,t)}function kti(e){if(!e.includes(nm)&&!e.includes(Cdn))return!1;if(gPe())return!1;return PBn()}function iM(){return FW()&&PBn()||__o()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${nm} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function Tti(){let e=k("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{PBn,kti,iM,Tti};
