// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Ne}from"./chunk-9s1z8ttt.js";import{Zb,Zst}from"./chunk-33ax6j5s.js";import{Pe}from"./chunk-3kevgx4j.js";import{Vt}from"./chunk-9sbknd2z.js";import{dH}from"./chunk-s86e2e30.js";var l=1000;function LGt(e=process.argv.slice(2)){return Zst(e)&&Zb("--output-format",e)==="stream-json"}function x_e(){return Ne(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS)}function NGt(e,t=process.argv.slice(2)){let r=Zb("--session-id",t);return(Zb("--sdk-url",t)===void 0?Vt(r):r)||e}function B6e({sessionId:e,message:t,reason:r,resultIndex:n=0}){return{...dH(e,[t]),...r!==void 0&&{startup_failure_reason:r},...n!==null&&{result_index:n}}}async function DV(e){if(x_e())await Gtt([B6e({...e,sessionId:NGt(e.sessionId)})])}async function Gtt(e,{goesOn:t=!1}={}){let r=process.stdout;if(!LGt()||r.writableEnded||r.destroyed)return!1;let n=e.map((o)=>JSON.stringify(o)+`
`).join(""),s=(o)=>{},u=new Promise((o)=>{s=o}),i=()=>s(!1);r.once("error",i);try{r.write(n,(o)=>s(!o))}catch{return!1}let a=await Pe(u,l)??!1;if(t&&a)r.off("error",i);return a}
export{LGt,x_e,NGt,B6e,DV,Gtt};
