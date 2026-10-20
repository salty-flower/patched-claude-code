// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{d}from"./chunk-ekgz6skk.js";import{N1t}from"./chunk-rznmdxwz.js";import{o1,dDe}from"./chunk-kr25wq23.js";import{Ir}from"./chunk-ye9f1kvm.js";var nXr={};Ir(nXr,{default:()=>nXr,endsInARowOf:()=>zZs,unsettledBy:()=>llr,workerEndingOf:()=>KZs});function zZs(e){let n=Number(e);return Number.isSafeInteger(n)&&n>0?n:0}var llr=(e)=>({reason:`Error: ${d(e)}`,kind:e instanceof N1t?"passing":"lasting"});var o=5,m=`It did not pass in ${o} tries`,p="it is held for good, or refused to this process",t="Start the daemon again once this is mended.",a=`${m}: ${p}. ${t}`;function KZs(e,n){let r=e.kind==="passing",s=r&&n+1<o,i=r?a:t;return s?{code:dDe,said:`${e.reason}
`}:{code:o1,said:`${e.reason}
${i}
`}}export{zZs,llr,KZs,nXr};
