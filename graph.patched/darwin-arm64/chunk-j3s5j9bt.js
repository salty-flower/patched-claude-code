// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{d}from"./chunk-wkh5syvr.js";import{G$t}from"./chunk-74ye1fde.js";import{A1,B0e}from"./chunk-n47y2gx6.js";import{Lr}from"./chunk-71kjn9x8.js";var d9r={};Lr(d9r,{default:()=>d9r,endsInARowOf:()=>f4s,unsettledBy:()=>ssr,workerEndingOf:()=>m4s});function f4s(e){let n=Number(e);return Number.isSafeInteger(n)&&n>0?n:0}var ssr=(e)=>({reason:`Error: ${d(e)}`,kind:e instanceof G$t?"passing":"lasting"});var o=5,m=`It did not pass in ${o} tries`,p="it is held for good, or refused to this process",t="Start the daemon again once this is mended.",a=`${m}: ${p}. ${t}`;function m4s(e,n){let r=e.kind==="passing",s=r&&n+1<o,i=r?a:t;return s?{code:B0e,said:`${e.reason}
`}:{code:A1,said:`${e.reason}
${i}
`}}export{f4s,ssr,m4s,d9r};
