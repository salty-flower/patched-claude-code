// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{q}from"./chunk-2vv5hpw3.js";import{Wt,ve}from"./chunk-fz00m7zs.js";import{te}from"./chunk-j0kxfsn8.js";import{X}from"./chunk-7h2h1m4y.js";import{ce,n}from"./chunk-akz0cj0f.js";import{Os,yu}from"./chunk-6ypvgjr3.js";import{D}from"./chunk-6fnbbyjg.js";import{qn,ru,Er}from"./chunk-xxprnjcc.js";import{mkdir as l,writeFile as g}from"fs/promises";import{basename as m,dirname as u,join as d,resolve as w,sep as k}from"path";var xh=524288;function cU(r){return r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"workflow"}function aBt(){return d(yu(te()),q(),"workflows","scripts")+k}function y(r,e){return`${aBt()}${cU(r)}-${e}.js`}function S(){let r=yu(te());return u(r)===Os()?m(r):void 0}function vmt(r,e,t,s){let a=aBt(),o=y(r,e),c=`${cU(r)}-${e}.js`;return(async()=>{let f=D()&&s?S():void 0,p=q();try{if(await l(a,{recursive:!0,mode:448}),D()&&s&&f!==void 0&&Wt(c)){let i=await s.write(ve.sidecar(f,p,["workflows","scripts",c]),t,{publishDiscipline:"inPlace",mode:384});if(!i.ok)n(`Failed to persist workflow script to ${o}: ${i.error.code}`,{level:"warn"});return}await g(o,t,{encoding:"utf-8",mode:384})}catch(i){n(`Failed to persist workflow script to ${o}: ${i}`,{level:"warn"})}})(),o}async function Y_e(r){let e=w(te(),r);if(qn(r)||ru(r)||Er(r)||Er(e))return{error:`Network (UNC, NT-namespace, or automount) paths are not allowed for workflow scriptPath: ${r}`};try{let t=await ce().readFileBytes(e,xh+1);if(t.byteLength>xh)return{error:`Workflow script file ${e} exceeds ${xh} bytes`};return{script:t.toString("utf-8"),path:e}}catch(t){if(X(t))return{error:`Workflow script file not found: ${e}`};return{error:`Failed to read workflow script file ${e}: ${t}`}}}
export{xh,cU,aBt,vmt,Y_e};
