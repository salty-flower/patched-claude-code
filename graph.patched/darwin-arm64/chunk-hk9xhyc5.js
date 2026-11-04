// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{P}from"./chunk-drmqng8t.js";import{GI}from"./chunk-h21zbzen.js";import{Lg}from"./chunk-9x7xhvaz.js";function VYn(){if(P()!=="windows"||!process.stdin.isTTY)return;try{process.stdin.setRawMode(!0),process.stdin.setRawMode(!1)}catch{}}function KYn(o){{let t=(e)=>e.toUpperCase()===GI;for(let e of Object.keys(o).filter(t))delete o[e];let r=Lg();for(let e of Object.keys(r).filter(t))o[e]=r[e]}}
export{VYn,KYn};
