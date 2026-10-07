// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{l}from"./chunk-fdatg9ax.js";import{aTt}from"./chunk-ngfft5dp.js";import{bU,$ke}from"./chunk-dgy73jbt.js";import{Qr}from"./chunk-grvgfqgm.js";var hTr={};Qr(hTr,{default:()=>hTr,endsInARowOf:()=>Gfs,unsettledBy:()=>g1n,workerEndingOf:()=>qfs});function Gfs(e){let n=Number(e);return Number.isSafeInteger(n)&&n>0?n:0}var g1n=(e)=>({reason:`Error: ${l(e)}`,kind:e instanceof aTt?"passing":"lasting"});var o=5,d=`It did not pass in ${o} tries`,m="it is held for good, or refused to this process",t="Start the daemon again once this is mended.",p=`${d}: ${m}. ${t}`;function qfs(e,n){let r=e.kind==="passing",s=r&&n+1<o,i=r?p:t;return s?{code:$ke,said:`${e.reason}
`}:{code:bU,said:`${e.reason}
${i}
`}}export{Gfs,g1n,qfs,hTr};
