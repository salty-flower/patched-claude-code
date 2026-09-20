// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Zc}from"./chunk-q2vrcqny.js";import{Rc}from"./chunk-dqs62gec.js";import{_pt,W$}from"./chunk-yssqp134.js";import{Bh}from"./chunk-bmt2ebkr.js";import{be}from"./chunk-bbmh8g33.js";var o=be(Bh(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function TVe(){if(!Zc())return!1;let r=_pt()+f;return process.execPath.startsWith(r)}function nd(r={}){return g$(bde(r))}function bde(r={}){if(!r.pinToCurrentBinary&&TVe()){let t=Hwe();return{cmd:t,prefixArgs:[],target:t}}if(Zc())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function Hwe(){return a(W$(),"claude")}function g$(r){let e=Rc();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function CVe(){let r=_pt(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{TVe,nd,bde,Hwe,g$,CVe};
