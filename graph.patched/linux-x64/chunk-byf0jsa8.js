// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Ul}from"./chunk-td8fcebs.js";import{Al}from"./chunk-xcxw600k.js";import{kYe,s0}from"./chunk-n1qe7nz7.js";import{tg}from"./chunk-dpvvw6sr.js";import{fe}from"./chunk-55pqc2de.js";var o=fe(tg(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function gMe(){if(!Ul())return!1;let r=kYe()+f;return process.execPath.startsWith(r)}function Ku(r={}){return WD(Une(r))}function Une(r={}){if(!r.pinToCurrentBinary&&gMe()){let t=Vde();return{cmd:t,prefixArgs:[],target:t}}if(Ul())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function Vde(){return a(s0(),"claude")}function WD(r){let e=Al();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function hMe(){let r=kYe(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{gMe,Ku,Une,Vde,WD,hMe};
