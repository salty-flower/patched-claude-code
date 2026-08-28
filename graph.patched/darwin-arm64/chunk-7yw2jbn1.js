// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{G}from"./chunk-g4zaymy2.js";import{qt,Se}from"./chunk-3vs63y6b.js";import{te}from"./chunk-4p8hs6c2.js";import{X}from"./chunk-e5bq01yj.js";import{ce,n}from"./chunk-cmkfpkth.js";import{Ms,_u}from"./chunk-71nbrcp0.js";import{Gn,eu,Tr}from"./chunk-g1zprvx2.js";import{H}from"./chunk-9p9ys44p.js";import{mkdir as l,writeFile as g}from"fs/promises";import{basename as m,dirname as u,join as d,resolve as w,sep as k}from"path";var xh=524288;function pB(r){return r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"workflow"}function l2t(){return d(_u(te()),G(),"workflows","scripts")+k}function y(r,e){return`${l2t()}${pB(r)}-${e}.js`}function S(){let r=_u(te());return u(r)===Ms()?m(r):void 0}function vmt(r,e,t,s){let a=l2t(),o=y(r,e),c=`${pB(r)}-${e}.js`;return(async()=>{let f=H()&&s?S():void 0,p=G();try{if(await l(a,{recursive:!0,mode:448}),H()&&s&&f!==void 0&&qt(c)){let i=await s.write(Se.sidecar(f,p,["workflows","scripts",c]),t,{publishDiscipline:"inPlace",mode:384});if(!i.ok)n(`Failed to persist workflow script to ${o}: ${i.error.code}`,{level:"warn"});return}await g(o,t,{encoding:"utf-8",mode:384})}catch(i){n(`Failed to persist workflow script to ${o}: ${i}`,{level:"warn"})}})(),o}async function Zbe(r){let e=w(te(),r);if(Gn(r)||eu(r)||Tr(r)||Tr(e))return{error:`Network (UNC, NT-namespace, or automount) paths are not allowed for workflow scriptPath: ${r}`};try{let t=await ce().readFileBytes(e,xh+1);if(t.byteLength>xh)return{error:`Workflow script file ${e} exceeds ${xh} bytes`};return{script:t.toString("utf-8"),path:e}}catch(t){if(X(t))return{error:`Workflow script file not found: ${e}`};return{error:`Failed to read workflow script file ${e}: ${t}`}}}
export{xh,pB,l2t,vmt,Zbe};
