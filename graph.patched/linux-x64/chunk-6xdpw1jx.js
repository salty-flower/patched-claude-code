// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{dCe,MG,er}from"./chunk-5p3mkpyy.js";import{a}from"./chunk-8c4ttmk8.js";import{$li}from"./chunk-xwj0aef8.js";function oU(e,r){let n=o(r);try{if(r instanceof Error){let t=$li(r);if(t.length>0)e.stack=[`${e.name}: ${e.message}`,...t].join(`
`)}}catch{}a(MG(e,{telemetryMessage:e.telemetryMessage,...n!==void 0&&{code:n}}))}function o(e){try{return er(e)}catch{return}}function pI(e){let r=dCe(e);if(r!=="a value that is not a built-in error")return r;try{return e instanceof Error?"an error of another class":"a value that is not an Error"}catch{return"a value whose class cannot be read"}}function xhe(e){return`${pI(e)}, error code ${o(e)??"none"}`}
export{oU,pI,xhe};
