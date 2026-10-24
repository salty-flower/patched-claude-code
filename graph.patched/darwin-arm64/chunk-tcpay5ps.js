// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Tf}from"./chunk-9a41hw1t.js";import{nm}from"./chunk-pg9vp681.js";import{Chn,fY}from"./chunk-fc5zxj6s.js";import{oy}from"./chunk-j2d407c1.js";import{Ae}from"./chunk-meds60nn.js";var o=Ae(oy(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function KJ(){if(!Tf())return!1;let r=Chn()+f;return process.execPath.startsWith(r)}function Iu(r={}){return M8(DGe(r))}function DGe(r={}){if(!r.pinToCurrentBinary&&KJ()){let t=aZe();return{cmd:t,prefixArgs:[],target:t}}if(Tf())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function aZe(){return a(fY(),"claude")}function M8(r){let e=nm();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function gBt(){let r=Chn(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{KJ,Iu,DGe,aZe,M8,gBt};
