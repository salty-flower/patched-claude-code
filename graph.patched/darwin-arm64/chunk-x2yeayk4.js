// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{BL}from"./chunk-s8xs8s76.js";import{x,$N}from"./chunk-twxt3h9y.js";import{a}from"./chunk-3a4khaz5.js";import{Zy,uOt}from"./chunk-vn3m1gs0.js";import{Rwe,Ryr}from"./chunk-zx09yc21.js";var t=300000;function r3t(){return a.CLAUDE_CODE_BRIEF||$N("tengu_kairos_brief",!1,t)}function UMo(e){if(!e.includes(Zy)&&!e.includes(uOt))return!1;if(Rwe())return!1;return r3t()}function IBe(){return BL()&&r3t()||Ryr()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${Zy} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function BMo(){let e=x("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{r3t,UMo,IBe,BMo};
