// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{T0}from"./chunk-38213y7h.js";import{I,DH}from"./chunk-bsdtxcdc.js";import{a}from"./chunk-w3k8bej2.js";import{lS,uXe}from"./chunk-p4ge1s9m.js";import{cue,dfn}from"./chunk-rra7rbkb.js";var t=300000;function pgt(){return a.CLAUDE_CODE_BRIEF||DH("tengu_kairos_brief",!1,t)}function lvr(e){if(!e.includes(lS)&&!e.includes(uXe))return!1;if(cue())return!1;return pgt()}function Ewe(){return T0()&&pgt()||dfn()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${lS} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function cvr(){let e=I("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{pgt,lvr,Ewe,cvr};
