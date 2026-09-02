// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{jl}from"./chunk-w3k8bej2.js";import{zl}from"./chunk-2dwnyy5c.js";import{eKe,XD}from"./chunk-jcv4bfwt.js";import{fm}from"./chunk-wz8xdxgm.js";import{j}from"./chunk-rqyyny1n.js";var o=j(fm(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function hHe(){if(!jl())return!1;let r=eKe()+f;return process.execPath.startsWith(r)}function rp(r={}){return WP(AZ(r))}function AZ(r={}){if(!r.pinToCurrentBinary&&hHe()){let t=bae();return{cmd:t,prefixArgs:[],target:t}}if(jl())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function bae(){return a(XD(),"claude")}function WP(r){let e=zl();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function _He(){let r=eKe(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{hHe,rp,AZ,bae,WP,_He};
