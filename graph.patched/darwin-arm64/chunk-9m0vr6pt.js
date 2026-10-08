// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Le}from"./chunk-63vja5td.js";import{E0,t4e}from"./chunk-3qfs0gea.js";import{Xe}from"./chunk-k2e8p61g.js";import{Xt}from"./chunk-drh3s4e9.js";import{VU}from"./chunk-asqq9nd4.js";var i=1000;function PEr(e=process.argv.slice(2)){return t4e(e)&&E0("--output-format",e)==="stream-json"}function aIt(){return Le(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS)}function u(e,t=process.argv.slice(2)){let r=E0("--session-id",t);return(E0("--sdk-url",t)===void 0?Xt(r):r)||e}function lIt({sessionId:e,message:t,reason:r,resultIndex:s=0}){return{...VU(e,[t]),...r!==void 0&&{startup_failure_reason:r},...s!==null&&{result_index:s}}}async function NK(e){let t=process.stdout;if(!aIt()||!PEr()||t.writableEnded||t.destroyed)return;let r=JSON.stringify(lIt({...e,sessionId:u(e.sessionId)}))+`
`,s=()=>{},n=new Promise((o)=>{s=o});t.once("error",s);try{t.write(r,()=>s())}catch{return}await Xe(n,i)}
export{PEr,aIt,lIt,NK};
