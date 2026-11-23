// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{F}from"./chunk-r3adsed5.js";import{a}from"./chunk-8c4ttmk8.js";import{W}from"./chunk-z1a5ffdv.js";var s=new W(()=>({alreadyReported:new Set}));function B3(r){try{let e=s.of(F().host);if(!e.alreadyReported.has(r))e.alreadyReported.add(r),e.listener?.(r)}catch(e){a(e)}}
export{B3};
