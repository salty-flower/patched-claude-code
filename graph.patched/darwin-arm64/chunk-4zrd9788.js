// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{d}from"./chunk-36ysyspx.js";import{vVt}from"./chunk-ztrzej16.js";import{tW,GNe}from"./chunk-10nfjyrq.js";import{Fr}from"./chunk-meds60nn.js";var Lco={};Fr(Lco,{default:()=>Lco,endsInARowOf:()=>Thi,unsettledBy:()=>wbr,workerEndingOf:()=>Ahi});function Thi(e){let n=Number(e);return Number.isSafeInteger(n)&&n>0?n:0}var wbr=(e)=>({reason:`Error: ${d(e)}`,kind:e instanceof vVt?"passing":"lasting"});var o=5,m=`It did not pass in ${o} tries`,p="it is held for good, or refused to this process",t="Start the daemon again once this is mended.",a=`${m}: ${p}. ${t}`;function Ahi(e,n){let r=e.kind==="passing",s=r&&n+1<o,i=r?a:t;return s?{code:GNe,said:`${e.reason}
`}:{code:tW,said:`${e.reason}
${i}
`}}export{Thi,wbr,Ahi,Lco};
