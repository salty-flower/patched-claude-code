// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Fe}from"./chunk-3mdayxq0.js";import{pE,PZe}from"./chunk-gafqfm7x.js";import{Be}from"./chunk-54xe5s81.js";import{Kt}from"./chunk-bkygtq8f.js";import{aH}from"./chunk-xvjjpq44.js";var i=1000;function sBr(e=process.argv.slice(2)){return PZe(e)&&pE("--output-format",e)==="stream-json"}function _Ge(){return Fe(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS)}function iBr(e,t=process.argv.slice(2)){let r=pE("--session-id",t);return(pE("--sdk-url",t)===void 0?Kt(r):r)||e}function rjt({sessionId:e,message:t,reason:r,resultIndex:n=0}){return{...aH(e,[t]),...r!==void 0&&{startup_failure_reason:r},...n!==null&&{result_index:n}}}async function GK(e){if(_Ge())await aBr([rjt({...e,sessionId:iBr(e.sessionId)})])}async function aBr(e){let t=process.stdout;if(!sBr()||t.writableEnded||t.destroyed)return!1;let r=e.map((s)=>JSON.stringify(s)+`
`).join(""),n=(s)=>{},o=new Promise((s)=>{n=s});t.once("error",()=>n(!1));try{t.write(r,(s)=>n(!s))}catch{return!1}return await Be(o,i)??!1}
export{sBr,_Ge,iBr,rjt,GK,aBr};
