// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Qu}from"./chunk-70qqbqq4.js";import{bp}from"./chunk-sczsfkyr.js";import{p9t,Xq}from"./chunk-2mxt2fjz.js";import{$h}from"./chunk-zp1a5mr6.js";import{be}from"./chunk-8drz5tx3.js";var o=be($h(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function Z4(){if(!Qu())return!1;let r=p9t()+f;return process.execPath.startsWith(r)}function ou(r={}){return mq(cHe(r))}function cHe(r={}){if(!r.pinToCurrentBinary&&Z4()){let t=t6e();return{cmd:t,prefixArgs:[],target:t}}if(Qu())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function t6e(){return a(Xq(),"claude")}function mq(r){let e=bp();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function _Et(){let r=p9t(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{Z4,ou,cHe,t6e,mq,_Et};
