// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{l}from"./chunk-shf1fjz2.js";import{t}from"./chunk-wvb0gwjm.js";import{uo}from"./chunk-4cwgnmh9.js";import{a}from"./chunk-3a4khaz5.js";import{PPr,IPr,Fvo,$vo}from"./chunk-7x4fz860.js";async function ust(e,r={}){try{if(!uo()){if(!a.CLAUDE_CODE_OAUTH_TOKEN&&r.bgAuthSnapshot!=="leave")await PPr(e);await IPr(e),await Fvo(e)}await $vo(e)}catch(o){t(`Descriptor credential prime failed (non-fatal): ${l(o)}`,{level:"error"})}}
export{ust};
