// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ne}from"./chunk-fdxhcr6b.js";import{KR,oYe}from"./chunk-qb086kpj.js";import{ze}from"./chunk-yjc18bey.js";import{Jt}from"./chunk-nfna65jh.js";import{FD}from"./chunk-sm8jk17g.js";var i=1000;function XPr(e=process.argv.slice(2)){return oYe(e)&&KR("--output-format",e)==="stream-json"}function q1e(){return Ne(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS)}function JPr(e,t=process.argv.slice(2)){let r=KR("--session-id",t);return(KR("--sdk-url",t)===void 0?Jt(r):r)||e}function vDt({sessionId:e,message:t,reason:r,resultIndex:n=0}){return{...FD(e,[t]),...r!==void 0&&{startup_failure_reason:r},...n!==null&&{result_index:n}}}async function k4(e){if(q1e())await QPr([vDt({...e,sessionId:JPr(e.sessionId)})])}async function QPr(e){let t=process.stdout;if(!XPr()||t.writableEnded||t.destroyed)return!1;let r=e.map((s)=>JSON.stringify(s)+`
`).join(""),n=(s)=>{},o=new Promise((s)=>{n=s});t.once("error",()=>n(!1));try{t.write(r,(s)=>n(!s))}catch{return!1}return await ze(o,i)??!1}
export{XPr,q1e,JPr,vDt,k4,QPr};
