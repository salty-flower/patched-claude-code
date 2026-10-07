// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Gu}from"./chunk-j77txbjn.js";import{dp}from"./chunk-7zm19742.js";import{uKt,jV}from"./chunk-yy5ng0g2.js";import{Ch}from"./chunk-ma17m27h.js";import{be}from"./chunk-rnxw3wwn.js";var o=be(Ch(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function W3(){if(!Gu())return!1;let r=uKt()+f;return process.execPath.startsWith(r)}function zd(r={}){return sV(ZIe(r))}function ZIe(r={}){if(!r.pinToCurrentBinary&&W3()){let t=C2e();return{cmd:t,prefixArgs:[],target:t}}if(Gu())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function C2e(){return a(jV(),"claude")}function sV(r){let e=dp();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function q_t(){let r=uKt(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{W3,zd,ZIe,C2e,sV,q_t};
