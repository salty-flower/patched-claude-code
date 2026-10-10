// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{l,E}from"./chunk-886tf6ja.js";import{t}from"./chunk-gyf58rwf.js";var s=new Set(["EIO","ENOTTY","EBADF"]);function Hb(e,n){if(!("setRawMode"in e)||typeof e.setRawMode!=="function")return;try{e.setRawMode(n)}catch(o){let a=l(o),r=E(o);if(a.includes("setRawMode failed")||s.has(r??"")){t(`setRawMode(${n}) failed on revoked tty: ${a}`);return}throw o}}
export{Hb};
