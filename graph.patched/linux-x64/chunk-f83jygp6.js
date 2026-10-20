// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Fe}from"./chunk-8nra9hkj.js";import{Rv,Jet}from"./chunk-bdj2znsb.js";import{Ne}from"./chunk-wk0rbc8w.js";import{Vt}from"./chunk-grpzqw3p.js";import{vH}from"./chunk-ag4wmr6x.js";var i=1000;function szr(e=process.argv.slice(2)){return Jet(e)&&Rv("--output-format",e)==="stream-json"}function Sye(){return Fe(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS)}function gGt(e,t=process.argv.slice(2)){let r=Rv("--session-id",t);return(Rv("--sdk-url",t)===void 0?Vt(r):r)||e}function Q2e({sessionId:e,message:t,reason:r,resultIndex:n=0}){return{...vH(e,[t]),...r!==void 0&&{startup_failure_reason:r},...n!==null&&{result_index:n}}}async function wK(e){if(Sye())await izr([Q2e({...e,sessionId:gGt(e.sessionId)})])}async function izr(e){let t=process.stdout;if(!szr()||t.writableEnded||t.destroyed)return!1;let r=e.map((s)=>JSON.stringify(s)+`
`).join(""),n=(s)=>{},o=new Promise((s)=>{n=s});t.once("error",()=>n(!1));try{t.write(r,(s)=>n(!s))}catch{return!1}return await Ne(o,i)??!1}
export{szr,Sye,gGt,Q2e,wK,izr};
