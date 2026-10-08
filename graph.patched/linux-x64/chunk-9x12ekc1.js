// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{xu}from"./chunk-rptge3r8.js";import{Sp}from"./chunk-thr3mmav.js";import{X3t,WK}from"./chunk-4mqa80wx.js";import{Fh}from"./chunk-hesrqedr.js";import{Se}from"./chunk-0y12vz6b.js";var o=Se(Fh(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function G6(){if(!xu())return!1;let r=X3t()+f;return process.execPath.startsWith(r)}function ou(r={}){return iK(eHe(r))}function eHe(r={}){if(!r.pinToCurrentBinary&&G6()){let t=VGe();return{cmd:t,prefixArgs:[],target:t}}if(xu())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function VGe(){return a(WK(),"claude")}function iK(r){let e=Sp();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function avt(){let r=X3t(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{G6,ou,eHe,VGe,iK,avt};
