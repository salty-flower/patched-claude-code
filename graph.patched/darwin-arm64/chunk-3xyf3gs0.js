// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Mq}from"./chunk-ecyypctx.js";import{k,i5}from"./chunk-axsjfnwn.js";import{i}from"./chunk-n1cpnz94.js";import{hp,b6e}from"./chunk-zn5b4x4h.js";import{O8e,Aas}from"./chunk-1cb5bm34.js";var t=300000;function ohr(){return i.CLAUDE_CODE_BRIEF||i5("tengu_kairos_brief",!1,t)}function hca(e){if(!e.includes(hp)&&!e.includes(b6e))return!1;if(O8e())return!1;return ohr()}function FH(){return Mq()&&ohr()||Aas()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${hp} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function gca(){let e=k("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{ohr,hca,FH,gca};
