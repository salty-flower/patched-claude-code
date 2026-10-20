// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{d}from"./chunk-nre716m4.js";import{qBt}from"./chunk-pk4rzqyt.js";import{fB,hHe}from"./chunk-bmpxq1j5.js";import{Ir}from"./chunk-8xa87pyw.js";var AZr={};Ir(AZr,{default:()=>AZr,endsInARowOf:()=>Yei,unsettledBy:()=>Vcr,workerEndingOf:()=>Xei});function Yei(e){let n=Number(e);return Number.isSafeInteger(n)&&n>0?n:0}var Vcr=(e)=>({reason:`Error: ${d(e)}`,kind:e instanceof qBt?"passing":"lasting"});var o=5,m=`It did not pass in ${o} tries`,p="it is held for good, or refused to this process",t="Start the daemon again once this is mended.",a=`${m}: ${p}. ${t}`;function Xei(e,n){let r=e.kind==="passing",s=r&&n+1<o,i=r?a:t;return s?{code:hHe,said:`${e.reason}
`}:{code:fB,said:`${e.reason}
${i}
`}}export{Yei,Vcr,Xei,AZr};
