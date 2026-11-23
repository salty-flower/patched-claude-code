// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{d}from"./chunk-5p3mkpyy.js";import{$bn}from"./chunk-ehn189n0.js";import{O4,rAe}from"./chunk-pff8ahm6.js";import{Cr}from"./chunk-jxn7cbw7.js";var Ges={};Cr(Ges,{default:()=>Ges,endsInARowOf:()=>yBa,unsettledBy:()=>pro,workerEndingOf:()=>bBa});function yBa(e){let n=Number(e);return Number.isSafeInteger(n)&&n>0?n:0}var pro=(e)=>({reason:`Error: ${d(e)}`,kind:e instanceof $bn?"passing":"lasting"});var o=5,m=`It did not pass in ${o} tries`,p="it is held for good, or refused to this process",t="Start the daemon again once this is mended.",a=`${m}: ${p}. ${t}`;function bBa(e,n){let r=e.kind==="passing",s=r&&n+1<o,i=r?a:t;return s?{code:rAe,said:`${e.reason}
`}:{code:O4,said:`${e.reason}
${i}
`}}export{yBa,pro,bBa,Ges};
