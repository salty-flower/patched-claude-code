// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{I2}from"./chunk-kpqr86hf.js";import{k,Kz}from"./chunk-bvn0epzr.js";import{a}from"./chunk-h422gpw8.js";import{Em,ymn}from"./chunk-jwx38c7d.js";import{JIe,ZTo}from"./chunk-2z5wpn62.js";var t=300000;function VGn(){return a.CLAUDE_CODE_BRIEF||Kz("tengu_kairos_brief",!1,t)}function dfi(e){if(!e.includes(Em)&&!e.includes(ymn))return!1;if(JIe())return!1;return VGn()}function RM(){return I2()&&VGn()||ZTo()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${Em} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function cfi(){let e=k("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{VGn,dfi,RM,cfi};
