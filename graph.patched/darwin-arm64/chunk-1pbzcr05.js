// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{d}from"./chunk-sktwb66b.js";import{Prn}from"./chunk-fat0bg23.js";import{Jz,FSe}from"./chunk-y5fhrqmf.js";import{br}from"./chunk-tngcxdsg.js";var eBo={};br(eBo,{default:()=>eBo,endsInARowOf:()=>x7i,unsettledBy:()=>DGr,workerEndingOf:()=>P7i});function x7i(e){let n=Number(e);return Number.isSafeInteger(n)&&n>0?n:0}var DGr=(e)=>({reason:`Error: ${d(e)}`,kind:e instanceof Prn?"passing":"lasting"});var o=5,m=`It did not pass in ${o} tries`,p="it is held for good, or refused to this process",t="Start the daemon again once this is mended.",a=`${m}: ${p}. ${t}`;function P7i(e,n){let r=e.kind==="passing",s=r&&n+1<o,i=r?a:t;return s?{code:FSe,said:`${e.reason}
`}:{code:Jz,said:`${e.reason}
${i}
`}}export{x7i,DGr,P7i,eBo};
