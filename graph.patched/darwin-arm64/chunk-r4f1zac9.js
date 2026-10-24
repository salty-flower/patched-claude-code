// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{U}from"./chunk-ersar6wn.js";import{W}from"./chunk-3y73jbfr.js";import{l}from"./chunk-thm21ca7.js";var s=new W(()=>({alreadyReported:new Set}));function z2(r){try{let e=s.of(U().host);if(!e.alreadyReported.has(r))e.alreadyReported.add(r),e.listener?.(r)}catch(e){l(e)}}
export{z2};
