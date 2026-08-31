// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{bI}from"./chunk-30zk17wm.js";import{x,IR}from"./chunk-1e5y3pjf.js";import{a}from"./chunk-m9gbfvns.js";import{lb,sXe}from"./chunk-4kxavepq.js";import{iue,cpn}from"./chunk-0q0eapbp.js";var t=300000;function ugt(){return a.CLAUDE_CODE_BRIEF||IR("tengu_kairos_brief",!1,t)}function ekr(e){if(!e.includes(lb)&&!e.includes(sXe))return!1;if(iue())return!1;return ugt()}function SHe(){return bI()&&ugt()||cpn()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${lb} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function tkr(){let e=x("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{ugt,ekr,SHe,tkr};
