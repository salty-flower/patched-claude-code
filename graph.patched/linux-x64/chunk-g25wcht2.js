// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Xa}from"./chunk-g0kfvhx3.js";import{El}from"./chunk-b7b0p9vb.js";import{Bqe,bL}from"./chunk-mcsqxsf3.js";import{Dh}from"./chunk-6ghqs63n.js";import{Z}from"./chunk-by569dsf.js";var o=Z(Dh(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function S0e(){if(!Xa())return!1;let r=Bqe()+f;return process.execPath.startsWith(r)}function Ld(r={}){return bR(VX(r))}function VX(r={}){if(!r.pinToCurrentBinary&&S0e()){let t=Goe();return{cmd:t,prefixArgs:[],target:t}}if(Xa())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function Goe(){return a(bL(),"claude")}function bR(r){let e=El();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function w0e(){let r=Bqe(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{S0e,Ld,VX,Goe,bR,w0e};
