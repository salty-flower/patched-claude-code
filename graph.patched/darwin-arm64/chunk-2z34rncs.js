// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Yl}from"./chunk-pv906ex9.js";import{Ol}from"./chunk-mb8pdp1y.js";import{wYe,DD}from"./chunk-sanqbg9t.js";import{Sg}from"./chunk-eej7qt73.js";import{q}from"./chunk-bge67taw.js";var o=q(Sg(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function eNe(){if(!Yl())return!1;let r=wYe()+f;return process.execPath.startsWith(r)}function Yu(r={}){return SD(Ere(r))}function Ere(r={}){if(!r.pinToCurrentBinary&&eNe()){let t=Ipe();return{cmd:t,prefixArgs:[],target:t}}if(Yl())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function Ipe(){return a(DD(),"claude")}function SD(r){let e=Ol();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function tNe(){let r=wYe(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{eNe,Yu,Ere,Ipe,SD,tNe};
