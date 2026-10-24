// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{d}from"./chunk-36ysyspx.js";import{t}from"./chunk-d7b0m8qy.js";import{Sr}from"./chunk-21mz1tvc.js";import{i}from"./chunk-9a41hw1t.js";import{zQo,VQo,vui}from"./chunk-zd2z0f00.js";import{bui}from"./chunk-0hmeyj8y.js";async function q2t(e,r={}){try{if(!Sr()){if(!i.CLAUDE_CODE_OAUTH_TOKEN&&r.bgAuthSnapshot!=="leave")await zQo(e);await VQo(e),await vui(e)}await bui(e)}catch(o){t(`Descriptor credential prime failed (non-fatal): ${d(o)}`,{level:"error"})}}
export{q2t};
