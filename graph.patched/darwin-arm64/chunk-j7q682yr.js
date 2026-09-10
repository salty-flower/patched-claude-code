// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Pc}from"./chunk-dv6tepz3.js";import{Fl}from"./chunk-wr7tr3yw.js";import{UZe,IL}from"./chunk-2sq402hd.js";import{Ug}from"./chunk-h8gcjnxk.js";import{ge}from"./chunk-bkhfcpjc.js";var o=ge(Ug(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function CUe(){if(!Pc())return!1;let r=UZe()+f;return process.execPath.startsWith(r)}function gd(r={}){return CL(Wse(r))}function Wse(r={}){if(!r.pinToCurrentBinary&&CUe()){let t=bge();return{cmd:t,prefixArgs:[],target:t}}if(Pc())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function bge(){return a(IL(),"claude")}function CL(r){let e=Fl();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function TUe(){let r=UZe(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{CUe,gd,Wse,bge,CL,TUe};
