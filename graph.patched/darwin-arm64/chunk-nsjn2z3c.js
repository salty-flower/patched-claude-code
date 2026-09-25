// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{ku}from"./chunk-3a4khaz5.js";import{Md}from"./chunk-8s6d4v7d.js";import{eIt,Y2}from"./chunk-8bc0vvxx.js";import{Ig}from"./chunk-n875m8bj.js";import{be}from"./chunk-q9zds4dm.js";var o=be(Ig(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function Snt(){if(!ku())return!1;let r=eIt()+f;return process.execPath.startsWith(r)}function Pp(r={}){return h2(Awe(r))}function Awe(r={}){if(!r.pinToCurrentBinary&&Snt()){let t=yHe();return{cmd:t,prefixArgs:[],target:t}}if(ku())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function yHe(){return a(Y2(),"claude")}function h2(r){let e=Md();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function bnt(){let r=eIt(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{Snt,Pp,Awe,yHe,h2,bnt};
