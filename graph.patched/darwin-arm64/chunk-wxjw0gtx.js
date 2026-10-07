// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Le}from"./chunk-29aedz4e.js";import{jO,lqe}from"./chunk-w5vv1884.js";import{Qe}from"./chunk-ws170zqm.js";import{Jt}from"./chunk-12mdvf4x.js";import{Q1}from"./chunk-qj0cwaxh.js";var i=1000;function Ngr(e=process.argv.slice(2)){return lqe(e)&&jO("--output-format",e)==="stream-json"}function PTt(){return Le(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS)}function u(e,t=process.argv.slice(2)){let r=jO("--session-id",t);return(jO("--sdk-url",t)===void 0?Jt(r):r)||e}function ITt({sessionId:e,message:t,reason:r,resultIndex:s=0}){return{...Q1(e,[t]),...r!==void 0&&{startup_failure_reason:r},...s!==null&&{result_index:s}}}async function Rq(e){let t=process.stdout;if(!PTt()||!Ngr()||t.writableEnded||t.destroyed)return;let r=JSON.stringify(ITt({...e,sessionId:u(e.sessionId)}))+`
`,s=()=>{},n=new Promise((o)=>{s=o});t.once("error",s);try{t.write(r,()=>s())}catch{return}await Qe(n,i)}
export{Ngr,PTt,ITt,Rq};
