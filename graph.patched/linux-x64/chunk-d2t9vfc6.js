// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{d}from"./chunk-w7m8nded.js";import{MFt}from"./chunk-m09ded2g.js";import{yB,HMe}from"./chunk-9t47n1bh.js";import{Lr}from"./chunk-a2q6egn2.js";var o4r={};Lr(o4r,{default:()=>o4r,endsInARowOf:()=>yYs,unsettledBy:()=>vnr,workerEndingOf:()=>_Ys});function yYs(e){let n=Number(e);return Number.isSafeInteger(n)&&n>0?n:0}var vnr=(e)=>({reason:`Error: ${d(e)}`,kind:e instanceof MFt?"passing":"lasting"});var o=5,m=`It did not pass in ${o} tries`,p="it is held for good, or refused to this process",t="Start the daemon again once this is mended.",a=`${m}: ${p}. ${t}`;function _Ys(e,n){let r=e.kind==="passing",s=r&&n+1<o,i=r?a:t;return s?{code:HMe,said:`${e.reason}
`}:{code:yB,said:`${e.reason}
${i}
`}}export{yYs,vnr,_Ys,o4r};
