// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{l}from"./chunk-fqsygynq.js";import{t}from"./chunk-f8eqwxpt.js";import{vr}from"./chunk-xbg4a11x.js";import{a}from"./chunk-j77txbjn.js";import{Mso,Dso,qas,Kas}from"./chunk-vxnbg770.js";async function hEt(e,r={}){try{if(!vr()){if(!a.CLAUDE_CODE_OAUTH_TOKEN&&r.bgAuthSnapshot!=="leave")await Mso(e);await Dso(e),await qas(e)}await Kas(e)}catch(o){t(`Descriptor credential prime failed (non-fatal): ${l(o)}`,{level:"error"})}}
export{hEt};
