// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{S_}from"./chunk-z0n2djw5.js";import{Cf,Ic,It,kS,QI}from"./chunk-hwpb27as.js";import{Zi,co,Jr}from"./chunk-bk5ct2gw.js";import{ht,Xt,Be,Tt}from"./chunk-r2vtj1kh.js";import{yt}from"./chunk-d2vt7d7f.js";import{pms}from"./chunk-0vbe15j3.js";import{ztr,Ute,wI,EI,nAn,sle,mar,S7r}from"./chunk-sfn1dbxq.js";import{Pbr,Zh,pws}from"./chunk-ezerben3.js";import{T0}from"./chunk-fsm4sq51.js";import{tL}from"./chunk-tar639dc.js";import{Or}from"./chunk-08y6bv7r.js";import{rt}from"./chunk-1d8w1b0d.js";var c=new Set([Be,rt,ht,Xt,Jr,co,Zi,Tt]),tHo=new Set([S_]),nIe=ztr;function yYe(e){return`[serve-mode] Stripped client-supplied privilege field(s): ${e.join(", ")}`}function E(e,s){if(e.properties===void 0||s.length===0)return e;let i={...e.properties};for(let n of s)delete i[n];let t=Array.isArray(e.required)?e.required.filter((n)=>!s.includes(n)):e.required;return{...e,properties:i,required:t}}function XDt(e,{skipSearchToolRestore:s=!1}={}){let i=tL(Ic(),{skipReplFilter:!0,skipSimpleModeFilter:e}).filter((o)=>!QI(o));if(!e)return i;let t=i.filter((o)=>c.has(o.name));if(s)return t;let n=Ute(),p=[wI,EI].filter((o)=>n.has(o.name)&&c.has(o.name)&&!t.includes(o)&&o.isEnabled());return[...t,...p]}async function nHo(e,s={},i){let t=e==="http",n=Ic(),p=XDt(t,s),o=s.agentDefinitions??{activeAgents:[],allAgents:[]},a=t?[]:await sle(nAn(o.activeAgents,[]),o.allowedAgentTypes,n),T=a.length>0?`Available agent types:
${a.map((r)=>mar(r,!1)).join(`
`)}`:"",l=()=>Promise.all(p.map(async(r)=>{let f=T0(r.inputSchema),{remoteExecution:_,outputSchemaAcrossProcesses:S,...u}=r,m=await r.prompt({getToolPermissionContext:async()=>n,tools:p,agents:o.activeAgents,...i!==void 0&&{model:i.model,leanPrompt:i.leanPrompt,bashFirstTrimmed:!1}});return{...u,description:It(r,Cf)?pms(m):It(r,yt)?m.replace(S7r,()=>T):m,inputSchema:E(f,[...t?nIe:[],...kS(r).supported?[Or]:[]]),outputSchema:void 0}}));if(!t)return l();let d=Zh();if(d.backgroundTasksDisabled&&d.unsandboxedCommandsDisabled)return l();for(let r of p)r.inputSchema;return pws(qIr(),l)}function qIr(e=new Pbr){return e.disableBackgroundTasks(),e.disableUnsandboxedCommands(),e}
export{tHo,nIe,yYe,XDt,nHo,qIr};
