// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{l}from"./chunk-xtc2dmbe.js";import{t}from"./chunk-5nyank6v.js";import{po}from"./chunk-0sa7g6pk.js";import{a}from"./chunk-sr28hb79.js";import{hkn,ykn,Esr,Asr}from"./chunk-1c73sb2f.js";async function bDe(e,r={}){try{if(!po()){if(!a.CLAUDE_CODE_OAUTH_TOKEN&&r.bgAuthSnapshot!=="leave")await hkn(e);await ykn(e),await Esr(e)}await Asr(e)}catch(o){t(`Descriptor credential prime failed (non-fatal): ${l(o)}`,{level:"error"})}}
export{bDe};
