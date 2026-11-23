// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{v4t,JPa}from"./chunk-5z5dtbrz.js";import{ee}from"./chunk-wswyff5p.js";import{kge}from"./chunk-nz8r79rx.js";import{Ht,xoe}from"./chunk-2x4zmrns.js";import{Je}from"./chunk-eye8byva.js";import{P}from"./chunk-8txsa0tf.js";var t="tengu_glowing_nygaard";function zT(){if(ee().readOthersWriting=!0,v4t()!==void 0&&Je(t,{safe:!0}))JPa()}function Ske(e){let r=Ht(e);return r?.mode==="owner"&&!r.isSharedLive&&!xoe(r)}function kqn(e,r,n){return kge(n,e,r)&&ee().readOthersWriting!==!0}function Eqn(e,r,n){if(!Ske(e)&&!kqn(e,r,n))zT()}function vfa(e){return P(e)&&Object.values(e).some((r)=>P(r)&&(r.foreign===!0||Array.isArray(r.pulled)&&r.pulled.length>0))}
export{zT,Ske,kqn,Eqn,vfa};
