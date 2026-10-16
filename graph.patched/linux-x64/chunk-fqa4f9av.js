// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{d}from"./chunk-w7m8nded.js";import{t}from"./chunk-cwsn6mdf.js";import{br}from"./chunk-c61xdsy8.js";import{a}from"./chunk-xwn0mfnc.js";import{d0o,c0o,Szs,wzs}from"./chunk-5vywp25k.js";async function CLt(e,r={}){try{if(!br()){if(!a.CLAUDE_CODE_OAUTH_TOKEN&&r.bgAuthSnapshot!=="leave")await d0o(e);await c0o(e),await Szs(e)}await wzs(e)}catch(o){t(`Descriptor credential prime failed (non-fatal): ${d(o)}`,{level:"error"})}}
export{CLt};
