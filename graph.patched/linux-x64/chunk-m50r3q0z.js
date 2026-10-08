// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{l}from"./chunk-5g6j8x8p.js";import{xRt}from"./chunk-me0c3h4h.js";import{cB,VAe}from"./chunk-00xvb92a.js";import{Mr}from"./chunk-0y12vz6b.js";var kOr={};Mr(kOr,{default:()=>kOr,endsInARowOf:()=>xEs,unsettledBy:()=>V2n,workerEndingOf:()=>PEs});function xEs(e){let n=Number(e);return Number.isSafeInteger(n)&&n>0?n:0}var V2n=(e)=>({reason:`Error: ${l(e)}`,kind:e instanceof xRt?"passing":"lasting"});var o=5,d=`It did not pass in ${o} tries`,m="it is held for good, or refused to this process",t="Start the daemon again once this is mended.",p=`${d}: ${m}. ${t}`;function PEs(e,n){let r=e.kind==="passing",s=r&&n+1<o,i=r?p:t;return s?{code:VAe,said:`${e.reason}
`}:{code:cB,said:`${e.reason}
${i}
`}}export{xEs,V2n,PEs,kOr};
