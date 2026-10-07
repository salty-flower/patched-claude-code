// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Le}from"./chunk-918t5khf.js";import{$O,tKe}from"./chunk-vf73wj1b.js";import{Qe}from"./chunk-0mwsqxme.js";import{Jt}from"./chunk-b7wdy41p.js";import{jU}from"./chunk-t6p8f24r.js";var i=1000;function mgr(e=process.argv.slice(2)){return tKe(e)&&$O("--output-format",e)==="stream-json"}function _Ct(){return Le(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS)}function u(e,t=process.argv.slice(2)){let r=$O("--session-id",t);return($O("--sdk-url",t)===void 0?Jt(r):r)||e}function bCt({sessionId:e,message:t,reason:r,resultIndex:s=0}){return{...jU(e,[t]),...r!==void 0&&{startup_failure_reason:r},...s!==null&&{result_index:s}}}async function SK(e){let t=process.stdout;if(!_Ct()||!mgr()||t.writableEnded||t.destroyed)return;let r=JSON.stringify(bCt({...e,sessionId:u(e.sessionId)}))+`
`,s=()=>{},n=new Promise((o)=>{s=o});t.once("error",s);try{t.write(r,()=>s())}catch{return}await Qe(n,i)}
export{mgr,_Ct,bCt,SK};
