// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Lu}from"./chunk-qymratxs.js";import{Fl}from"./chunk-86hmwsb6.js";import{lQe,wL}from"./chunk-c1qwyngg.js";import{xg}from"./chunk-a0ca638h.js";import{ge}from"./chunk-2cavdc9w.js";var o=ge(xg(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function n$e(){if(!Lu())return!1;let r=lQe()+f;return process.execPath.startsWith(r)}function dd(r={}){return mL(sse(r))}function sse(r={}){if(!r.pinToCurrentBinary&&n$e()){let t=kme();return{cmd:t,prefixArgs:[],target:t}}if(Lu())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function kme(){return a(wL(),"claude")}function mL(r){let e=Fl();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function r$e(){let r=lQe(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{n$e,dd,sse,kme,mL,r$e};
