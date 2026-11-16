// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{e9}from"./chunk-r3adsed5.js";import{S,k7}from"./chunk-a5a37ds7.js";import{i}from"./chunk-5g5ea6r9.js";import{Kc,TAe}from"./chunk-dv3m75rz.js";import{Mnt,ZLs}from"./chunk-ewvyexpc.js";var t=300000;function TDr(){return i.CLAUDE_CODE_BRIEF||k7("tengu_kairos_brief",!1,t)}function B9a(e){if(!e.includes(Kc)&&!e.includes(TAe))return!1;if(Mnt())return!1;return TDr()}function X$(){return e9()&&TDr()||ZLs()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${Kc} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function j9a(){let e=S("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{TDr,B9a,X$,j9a};
