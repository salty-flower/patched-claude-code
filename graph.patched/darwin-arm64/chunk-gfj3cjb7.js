// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{xxi}from"./chunk-a9w760ze.js";import{Os}from"./chunk-jwn3rcdm.js";import{r_,Fp}from"./chunk-v60f30z3.js";function qns(n,t){let o=Array.isArray(n?.questions)&&typeof n.questions[0]?.question==="string"?n.questions[0].question:void 0,r=typeof n?.description==="string"?n.description:"",e=o??xxi(r)?.running??(r||(t()??""));return e?Fp(Os(e).replace(/\s+/g," ").trim(),r_):""}
export{qns};
