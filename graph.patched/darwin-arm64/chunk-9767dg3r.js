// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{F}from"./chunk-ecyypctx.js";import{W}from"./chunk-8915xd28.js";import{a}from"./chunk-87y2sp93.js";var s=new W(()=>({alreadyReported:new Set}));function qV(r){try{let e=s.of(F().host);if(!e.alreadyReported.has(r))e.alreadyReported.add(r),e.listener?.(r)}catch(e){a(e)}}
export{qV};
