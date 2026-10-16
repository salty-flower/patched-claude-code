// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{$e}from"./chunk-rs6p8dg3.js";import{dv,M7e}from"./chunk-wrm9spc9.js";import{Be}from"./chunk-r2xfgg0x.js";import{qt}from"./chunk-bfqfmbd0.js";import{ZM}from"./chunk-c76cty50.js";var i=1000;function HFr(e=process.argv.slice(2)){return M7e(e)&&dv("--output-format",e)==="stream-json"}function Pze(){return $e(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS)}function DFr(e,t=process.argv.slice(2)){let r=dv("--session-id",t);return(dv("--sdk-url",t)===void 0?qt(r):r)||e}function qBt({sessionId:e,message:t,reason:r,resultIndex:n=0}){return{...ZM(e,[t]),...r!==void 0&&{startup_failure_reason:r},...n!==null&&{result_index:n}}}async function k4(e){if(Pze())await LFr([qBt({...e,sessionId:DFr(e.sessionId)})])}async function LFr(e){let t=process.stdout;if(!HFr()||t.writableEnded||t.destroyed)return!1;let r=e.map((s)=>JSON.stringify(s)+`
`).join(""),n=(s)=>{},o=new Promise((s)=>{n=s});t.once("error",()=>n(!1));try{t.write(r,(s)=>n(!s))}catch{return!1}return await Be(o,i)??!1}
export{HFr,Pze,DFr,qBt,k4,LFr};
