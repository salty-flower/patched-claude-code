// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{l8}from"./chunk-m8nhymg4.js";import{b,MY}from"./chunk-e44qnbvj.js";import{i}from"./chunk-428zme0n.js";import{Kc,ICe}from"./chunk-nk99e2t8.js";import{jnt,HHs}from"./chunk-8f2dzp4b.js";var t=300000;function nLr(){return i.CLAUDE_CODE_BRIEF||MY("tengu_kairos_brief",!1,t)}function P7a(e){if(!e.includes(Kc)&&!e.includes(ICe))return!1;if(jnt())return!1;return nLr()}function Q1(){return l8()&&nLr()||HHs()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${Kc} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function O7a(){let e=b("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{nLr,P7a,Q1,O7a};
