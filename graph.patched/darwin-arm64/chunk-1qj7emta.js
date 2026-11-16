// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{d}from"./chunk-wryttfdq.js";import{ebn}from"./chunk-94eze89x.js";import{$3,cCe}from"./chunk-5qpypnm2.js";import{Ar}from"./chunk-fn3dzsec.js";var Rls={};Ar(Rls,{default:()=>Rls,endsInARowOf:()=>U2a,unsettledBy:()=>tlo,workerEndingOf:()=>B2a});function U2a(e){let n=Number(e);return Number.isSafeInteger(n)&&n>0?n:0}var tlo=(e)=>({reason:`Error: ${d(e)}`,kind:e instanceof ebn?"passing":"lasting"});var o=5,m=`It did not pass in ${o} tries`,p="it is held for good, or refused to this process",t="Start the daemon again once this is mended.",a=`${m}: ${p}. ${t}`;function B2a(e,n){let r=e.kind==="passing",s=r&&n+1<o,i=r?a:t;return s?{code:cCe,said:`${e.reason}
`}:{code:$3,said:`${e.reason}
${i}
`}}export{U2a,tlo,B2a,Rls};
