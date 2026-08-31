// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Al}from"./chunk-m9gbfvns.js";import{Vl}from"./chunk-ph6nqqw2.js";import{Q8e,V0}from"./chunk-t225nvjt.js";import{dm}from"./chunk-s17q3qvz.js";import{j}from"./chunk-5nnrmmhw.js";var o=j(dm(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function bRe(){if(!Al())return!1;let r=Q8e()+f;return process.execPath.startsWith(r)}function nf(r={}){return FP(vZ(r))}function vZ(r={}){if(!r.pinToCurrentBinary&&bRe()){let t=bae();return{cmd:t,prefixArgs:[],target:t}}if(Al())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function bae(){return a(V0(),"claude")}function FP(r){let e=Vl();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function SRe(){let r=Q8e(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{bRe,nf,vZ,bae,FP,SRe};
