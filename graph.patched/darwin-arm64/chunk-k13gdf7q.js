// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{NH}from"./chunk-sgyvc67j.js";import{H,mP}from"./chunk-e02s7cks.js";import{a}from"./chunk-dv6tepz3.js";import{Cy,Pot}from"./chunk-48s4h7y4.js";import{Hge,STn}from"./chunk-2n2m0vj9.js";var t=300000;function Xvt(){return a.CLAUDE_CODE_BRIEF||mP("tengu_kairos_brief",!1,t)}function eRr(e){if(!e.includes(Cy)&&!e.includes(Pot))return!1;if(Hge())return!1;return Xvt()}function Nke(){return NH()&&Xvt()||STn()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${Cy} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function tRr(){let e=H("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{Xvt,eRr,Nke,tRr};
