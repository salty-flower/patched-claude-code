// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{XRi}from"./chunk-8rcwhdr4.js";import{Is}from"./chunk-k0dvm1am.js";import{r_,Fp}from"./chunk-fegb8sr6.js";function kns(n,t){let o=Array.isArray(n?.questions)&&typeof n.questions[0]?.question==="string"?n.questions[0].question:void 0,r=typeof n?.description==="string"?n.description:"",e=o??XRi(r)?.running??(r||(t()??""));return e?Fp(Is(e).replace(/\s+/g," ").trim(),r_):""}
export{kns};
