// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{l,C}from"./chunk-rgs4nrpq.js";import{t}from"./chunk-wbbe5mtc.js";var s=new Set(["EIO","ENOTTY","EBADF"]);function GE(e,n){if(!("setRawMode"in e)||typeof e.setRawMode!=="function")return;try{e.setRawMode(n)}catch(o){let r=l(o),a=C(o);if(r.includes("setRawMode failed")||s.has(a??"")){t(`setRawMode(${n}) failed on revoked tty: ${r}`);return}throw o}}export{GE};
