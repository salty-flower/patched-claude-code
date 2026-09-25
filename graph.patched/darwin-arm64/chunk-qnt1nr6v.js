// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Oe}from"./chunk-6cqmwr9m.js";import{rt}from"./chunk-zr6jq9j9.js";import{rn}from"./chunk-w9w461gr.js";import{lf}from"./chunk-ngrxct6j.js";import{HL,Qln}from"./chunk-mb63rv2s.js";import{randomUUID as i}from"crypto";function _ge(r,e){return{type:"control_response",response:{subtype:"success",request_id:r,response:e}}}function Fj(r,e,t){return{type:"control_response",response:{subtype:"error",request_id:r,error:e,...t!==void 0&&{error_code:t}}}}function $j(r,e,t){return{type:"result",subtype:"error_during_execution",duration_ms:0,duration_api_ms:0,is_error:!0,num_turns:0,stop_reason:null,session_id:r,total_cost_usd:0,usage:lf,modelUsage:{},permission_denials:[],uuid:i(),errors:e,...t!==void 0&&{user_message_uuid:t}}}var u=1000;function E6n(r=process.argv.slice(2)){return Qln(r)&&HL("--output-format",r)==="stream-json"}function Pct(){return Oe(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS)}function d(r,e=process.argv.slice(2)){let t=HL("--session-id",e);return(HL("--sdk-url",e)===void 0?rn(t):t)||r}function Ict({sessionId:r,message:e,reason:t,resultIndex:o=0}){return{...$j(r,[e]),...t!==void 0&&{startup_failure_reason:t},...o!==null&&{result_index:o}}}async function vz(r){let e=process.stdout;if(!Pct()||!E6n()||e.writableEnded||e.destroyed)return;let t=JSON.stringify(Ict({...r,sessionId:d(r.sessionId)}))+`
`,o=()=>{},s=new Promise((n)=>{o=n});e.once("error",o);try{e.write(t,()=>o())}catch{return}await rt(s,u)}
export{_ge,Fj,$j,E6n,Pct,Ict,vz};
