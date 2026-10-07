// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{bu}from"./chunk-869zfth6.js";import{dp}from"./chunk-kdxgkzgf.js";import{YKt,DV}from"./chunk-8cgx7kkj.js";import{kh}from"./chunk-0wqb5n04.js";import{Se}from"./chunk-grvgfqgm.js";var o=Se(kh(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function D3(){if(!bu())return!1;let r=YKt()+f;return process.execPath.startsWith(r)}function Gd(r={}){return Jq(GIe(r))}function GIe(r={}){if(!r.pinToCurrentBinary&&D3()){let t=hWe();return{cmd:t,prefixArgs:[],target:t}}if(bu())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function hWe(){return a(DV(),"claude")}function Jq(r){let e=dp();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function L_t(){let r=YKt(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{D3,Gd,GIe,hWe,Jq,L_t};
