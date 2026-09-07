// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{_I}from"./chunk-bj7g1p32.js";import{x,GR}from"./chunk-3e93vkg3.js";import{a}from"./chunk-td8fcebs.js";import{zh,fQe}from"./chunk-pp9fwat1.js";import{ufe,Cyn}from"./chunk-gjx6tfgh.js";var t=300000;function z_t(){return a.CLAUDE_CODE_BRIEF||GR("tengu_kairos_brief",!1,t)}function pmr(e){if(!e.includes(zh)&&!e.includes(fQe))return!1;if(ufe())return!1;return z_t()}function ZEe(){return _I()&&z_t()||Cyn()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${zh} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function mmr(){let e=x("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{z_t,pmr,ZEe,mmr};
