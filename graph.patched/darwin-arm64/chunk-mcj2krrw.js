// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Sl}from"./chunk-bn8q5mbz.js";import{Tl}from"./chunk-bb1g3dwv.js";import{Uze,vO}from"./chunk-8cxmhp4q.js";import{Dh}from"./chunk-csr25wcg.js";import{Z}from"./chunk-t2kfemrk.js";var o=Z(Dh(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function E0e(){if(!Sl())return!1;let r=Uze()+f;return process.execPath.startsWith(r)}function Hd(r={}){return wP(ZX(r))}function ZX(r={}){if(!r.pinToCurrentBinary&&E0e()){let t=Koe();return{cmd:t,prefixArgs:[],target:t}}if(Sl())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function Koe(){return a(vO(),"claude")}function wP(r){let e=Tl();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function C0e(){let r=Uze(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{E0e,Hd,ZX,Koe,wP,C0e};
