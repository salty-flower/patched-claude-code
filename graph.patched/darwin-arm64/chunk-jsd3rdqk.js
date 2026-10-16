// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{uf}from"./chunk-6q3a0gz9.js";import{Hp}from"./chunk-k4g6y57j.js";import{Isn,C5}from"./chunk-ekbmk4b1.js";import{ph}from"./chunk-1jaxs49d.js";import{Ee}from"./chunk-71kjn9x8.js";var o=Ee(ph(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function OY(){if(!Hp())return!1;let r=Isn()+f;return process.execPath.startsWith(r)}function Uc(r={}){return L4(F$e(r))}function F$e(r={}){if(!r.pinToCurrentBinary&&OY()){let t=l5e();return{cmd:t,prefixArgs:[],target:t}}if(Hp())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function l5e(){return a(C5(),"claude")}function L4(r){let e=uf();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function SOt(){let r=Isn(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{OY,Uc,F$e,l5e,L4,SOt};
