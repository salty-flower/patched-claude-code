// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{l}from"./chunk-886tf6ja.js";import{t}from"./chunk-gyf58rwf.js";import{pr}from"./chunk-nqc6v990.js";import{a}from"./chunk-yvnhkg35.js";import{rEo,oEo,JRs,QRs}from"./chunk-d7wfeeft.js";async function aPt(e,r={}){try{if(!pr()){if(!a.CLAUDE_CODE_OAUTH_TOKEN&&r.bgAuthSnapshot!=="leave")await rEo(e);await oEo(e),await JRs(e)}await QRs(e)}catch(o){t(`Descriptor credential prime failed (non-fatal): ${l(o)}`,{level:"error"})}}
export{aPt};
