// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{l}from"./chunk-886tf6ja.js";import{l0t}from"./chunk-znynzfyp.js";import{OB,xxe}from"./chunk-54vdx6yt.js";import{Hr}from"./chunk-txt1tvjz.js";var _Br={};Hr(_Br,{default:()=>_Br,endsInARowOf:()=>FMs,unsettledBy:()=>_Yn,workerEndingOf:()=>$Ms});function FMs(e){let n=Number(e);return Number.isSafeInteger(n)&&n>0?n:0}var _Yn=(e)=>({reason:`Error: ${l(e)}`,kind:e instanceof l0t?"passing":"lasting"});var o=5,d=`It did not pass in ${o} tries`,m="it is held for good, or refused to this process",t="Start the daemon again once this is mended.",p=`${d}: ${m}. ${t}`;function $Ms(e,n){let r=e.kind==="passing",s=r&&n+1<o,i=r?p:t;return s?{code:xxe,said:`${e.reason}
`}:{code:OB,said:`${e.reason}
${i}
`}}export{FMs,_Yn,$Ms,_Br};
