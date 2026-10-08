// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{l}from"./chunk-tnh13g2g.js";import{t}from"./chunk-b5feae42.js";import{yr}from"./chunk-ce4b81xm.js";import{a}from"./chunk-70qqbqq4.js";import{Ffo,$fo,Mys,Dys}from"./chunk-1x0mmdxb.js";async function $Ct(e,r={}){try{if(!yr()){if(!a.CLAUDE_CODE_OAUTH_TOKEN&&r.bgAuthSnapshot!=="leave")await Ffo(e);await $fo(e),await Mys(e)}await Dys(e)}catch(o){t(`Descriptor credential prime failed (non-fatal): ${l(o)}`,{level:"error"})}}
export{$Ct};
