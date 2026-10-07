// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{l}from"./chunk-fqsygynq.js";import{_kt}from"./chunk-aqdr2hzp.js";import{x1,GCe}from"./chunk-zsx5swzm.js";import{Qr}from"./chunk-rnxw3wwn.js";var NRr={};Qr(NRr,{default:()=>NRr,endsInARowOf:()=>Fms,unsettledBy:()=>S2n,workerEndingOf:()=>$ms});function Fms(e){let n=Number(e);return Number.isSafeInteger(n)&&n>0?n:0}var S2n=(e)=>({reason:`Error: ${l(e)}`,kind:e instanceof _kt?"passing":"lasting"});var o=5,d=`It did not pass in ${o} tries`,m="it is held for good, or refused to this process",t="Start the daemon again once this is mended.",p=`${d}: ${m}. ${t}`;function $ms(e,n){let r=e.kind==="passing",s=r&&n+1<o,i=r?p:t;return s?{code:GCe,said:`${e.reason}
`}:{code:x1,said:`${e.reason}
${i}
`}}export{Fms,S2n,$ms,NRr};
