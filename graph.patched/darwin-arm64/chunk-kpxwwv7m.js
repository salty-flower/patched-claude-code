// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{De}from"./chunk-w5484khd.js";import{Fb,$_t}from"./chunk-yrqqg39g.js";import{ve}from"./chunk-wrh0fk6w.js";import{Ut}from"./chunk-d50ak5jt.js";import{O$}from"./chunk-f5ddgzr7.js";var l=1000;function Ren(e=process.argv.slice(2)){return $_t(e)&&Fb("--output-format",e)==="stream-json"}function tTe(){return De(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS)}var d=new Set(["org_config_required_unavailable","org_config_refused","config_file_invalid"]);function c(e){return d.has(e)||tTe()}function xen(e,t=process.argv.slice(2)){let r=Fb("--session-id",t);return(Fb("--sdk-url",t)===void 0?Ut(r):r)||e}function O2e({sessionId:e,message:t,reason:r,resultIndex:n=0}){return{...O$(e,[t]),...r!==void 0&&{startup_failure_reason:r},...n!==null&&{result_index:n}}}async function UW(e){if(c(e.reason))await smt([O2e({...e,sessionId:xen(e.sessionId)})])}async function smt(e,{goesOn:t=!1}={}){let r=process.stdout;if(!Ren()||r.writableEnded||r.destroyed)return!1;let n=e.map((o)=>JSON.stringify(o)+`
`).join(""),s=(o)=>{},u=new Promise((o)=>{s=o}),i=()=>s(!1);r.once("error",i);try{r.write(n,(o)=>s(!o))}catch{return!1}let a=await ve(u,l)??!1;if(t&&a)r.off("error",i);return a}
export{Ren,tTe,xen,O2e,UW,smt};
