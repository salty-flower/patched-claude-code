// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{vG}from"./chunk-dxktn51d.js";import{k,N2}from"./chunk-7p6jp6kj.js";import{a}from"./chunk-cd1a8ced.js";import{wm,Gfn}from"./chunk-pja9erbz.js";import{GIe,wAo}from"./chunk-vpsqf9jc.js";var t=300000;function Rzn(){return a.CLAUDE_CODE_BRIEF||N2("tengu_kairos_brief",!1,t)}function kpi(e){if(!e.includes(wm)&&!e.includes(Gfn))return!1;if(GIe())return!1;return Rzn()}function kM(){return vG()&&Rzn()||wAo()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${wm} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function Tpi(){let e=k("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{Rzn,kpi,kM,Tpi};
