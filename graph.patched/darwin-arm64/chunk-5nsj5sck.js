// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{hH}from"./chunk-cet8na02.js";import{H,Q0}from"./chunk-vryy7b5x.js";import{a}from"./chunk-qymratxs.js";import{Sy,Knt}from"./chunk-jh9jc98c.js";import{Ume,JAn}from"./chunk-6qz4gdxh.js";var t=300000;function yAt(){return a.CLAUDE_CODE_BRIEF||Q0("tengu_kairos_brief",!1,t)}function WAr(e){if(!e.includes(Sy)&&!e.includes(Knt))return!1;if(Ume())return!1;return yAt()}function OTe(){return hH()&&yAt()||JAn()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${Sy} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function zAr(){let e=H("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{yAt,WAr,OTe,zAr};
