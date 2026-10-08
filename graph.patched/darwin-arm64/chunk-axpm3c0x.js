// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{l}from"./chunk-tnh13g2g.js";import{URt}from"./chunk-wmrm2j5z.js";import{SU,eTe}from"./chunk-m9ze929b.js";import{Hr}from"./chunk-8drz5tx3.js";var nDr={};Hr(nDr,{default:()=>nDr,endsInARowOf:()=>Cks,unsettledBy:()=>cqn,workerEndingOf:()=>Aks});function Cks(e){let n=Number(e);return Number.isSafeInteger(n)&&n>0?n:0}var cqn=(e)=>({reason:`Error: ${l(e)}`,kind:e instanceof URt?"passing":"lasting"});var o=5,d=`It did not pass in ${o} tries`,m="it is held for good, or refused to this process",t="Start the daemon again once this is mended.",p=`${d}: ${m}. ${t}`;function Aks(e,n){let r=e.kind==="passing",s=r&&n+1<o,i=r?p:t;return s?{code:eTe,said:`${e.reason}
`}:{code:SU,said:`${e.reason}
${i}
`}}export{Cks,cqn,Aks,nDr};
