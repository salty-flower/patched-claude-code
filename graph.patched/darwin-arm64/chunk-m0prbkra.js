// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{gAe,L6,er}from"./chunk-wryttfdq.js";import{a}from"./chunk-mddke2ke.js";import{ydi}from"./chunk-czf5t2nc.js";function i$(e,r){let n=o(r);try{if(r instanceof Error){let t=ydi(r);if(t.length>0)e.stack=[`${e.name}: ${e.message}`,...t].join(`
`)}}catch{}a(L6(e,{telemetryMessage:e.telemetryMessage,...n!==void 0&&{code:n}}))}function o(e){try{return er(e)}catch{return}}function gO(e){let r=gAe(e);if(r!=="a value that is not a built-in error")return r;try{return e instanceof Error?"an error of another class":"a value that is not an Error"}catch{return"a value whose class cannot be read"}}function Fhe(e){return`${gO(e)}, error code ${o(e)??"none"}`}
export{i$,gO,Fhe};
