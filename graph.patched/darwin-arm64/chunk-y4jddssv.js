// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{tc}from"./chunk-g2ngvza5.js";import{Fl}from"./chunk-mezdzkyd.js";import{JJe,VD}from"./chunk-dadzbrtf.js";import{Tg}from"./chunk-vm8fjppm.js";import{G}from"./chunk-agfzafth.js";var o=G(Tg(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function x1e(){if(!tc())return!1;let r=JJe()+f;return process.execPath.startsWith(r)}function cd(r={}){return PD(yoe(r))}function yoe(r={}){if(!r.pinToCurrentBinary&&x1e()){let t=Rfe();return{cmd:t,prefixArgs:[],target:t}}if(tc())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function Rfe(){return a(VD(),"claude")}function PD(r){let e=Fl();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function H1e(){let r=JJe(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{x1e,cd,yoe,Rfe,PD,H1e};
