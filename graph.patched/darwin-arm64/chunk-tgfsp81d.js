// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{$e}from"./chunk-bjnpzyk4.js";import{PE,Wtt}from"./chunk-k9hc2wbs.js";import{Ne}from"./chunk-2ckwvz0j.js";import{Kt}from"./chunk-esv3b1gm.js";import{D0}from"./chunk-0x3pterb.js";var i=1000;function x6r(e=process.argv.slice(2)){return Wtt(e)&&PE("--output-format",e)==="stream-json"}function r_e(){return $e(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS)}function AGt(e,t=process.argv.slice(2)){let r=PE("--session-id",t);return(PE("--sdk-url",t)===void 0?Kt(r):r)||e}function B6e({sessionId:e,message:t,reason:r,resultIndex:n=0}){return{...D0(e,[t]),...r!==void 0&&{startup_failure_reason:r},...n!==null&&{result_index:n}}}async function q6(e){if(r_e())await P6r([B6e({...e,sessionId:AGt(e.sessionId)})])}async function P6r(e){let t=process.stdout;if(!x6r()||t.writableEnded||t.destroyed)return!1;let r=e.map((s)=>JSON.stringify(s)+`
`).join(""),n=(s)=>{},o=new Promise((s)=>{n=s});t.once("error",()=>n(!1));try{t.write(r,(s)=>n(!s))}catch{return!1}return await Ne(o,i)??!1}
export{x6r,r_e,AGt,B6e,q6,P6r};
