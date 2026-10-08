// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{De}from"./chunk-ndcqd6bh.js";import{_M,KYe}from"./chunk-dmwg443r.js";import{Xe}from"./chunk-670y7hd9.js";import{Xt}from"./chunk-28fj72x7.js";import{LB}from"./chunk-q1w6s42q.js";var i=1000;function avr(e=process.argv.slice(2)){return KYe(e)&&_M("--output-format",e)==="stream-json"}function YPt(){return De(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS)}function u(e,t=process.argv.slice(2)){let r=_M("--session-id",t);return(_M("--sdk-url",t)===void 0?Xt(r):r)||e}function XPt({sessionId:e,message:t,reason:r,resultIndex:s=0}){return{...LB(e,[t]),...r!==void 0&&{startup_failure_reason:r},...s!==null&&{result_index:s}}}async function x4(e){let t=process.stdout;if(!YPt()||!avr()||t.writableEnded||t.destroyed)return;let r=JSON.stringify(XPt({...e,sessionId:u(e.sessionId)}))+`
`,s=()=>{},n=new Promise((o)=>{s=o});t.once("error",s);try{t.write(r,()=>s())}catch{return}await Xe(n,i)}
export{avr,YPt,XPt,x4};
