// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{I3t,UOa}from"./chunk-29cd2nzs.js";import{ee}from"./chunk-m9wmj1k9.js";import{Oge}from"./chunk-8ywx9vjn.js";import{Ht,Noe}from"./chunk-w4v6hkg1.js";import{Je}from"./chunk-xynpsnk2.js";import{P}from"./chunk-8txsa0tf.js";var t="tengu_glowing_nygaard";function KT(){if(ee().readOthersWriting=!0,I3t()!==void 0&&Je(t,{safe:!0}))UOa()}function Rve(e){let r=Ht(e);return r?.mode==="owner"&&!r.isSharedLive&&!Noe(r)}function zVn(e,r,n){return Oge(n,e,r)&&ee().readOthersWriting!==!0}function VVn(e,r,n){if(!Rve(e)&&!zVn(e,r,n))KT()}function upa(e){return P(e)&&Object.values(e).some((r)=>P(r)&&(r.foreign===!0||Array.isArray(r.pulled)&&r.pulled.length>0))}
export{KT,Rve,zVn,VVn,upa};
