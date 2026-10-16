// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{uf}from"./chunk-9rdyfkv6.js";import{op}from"./chunk-xwn0mfnc.js";import{hsn,_5}from"./chunk-nyczv8jc.js";import{ph}from"./chunk-dzt95g1x.js";import{ve}from"./chunk-a2q6egn2.js";var o=ve(ph(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function E9(){if(!op())return!1;let r=hsn()+f;return process.execPath.startsWith(r)}function $c(r={}){return C6(xFe(r))}function xFe(r={}){if(!r.pinToCurrentBinary&&E9()){let t=e5e();return{cmd:t,prefixArgs:[],target:t}}if(op())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function e5e(){return a(_5(),"claude")}function C6(r){let e=uf();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function lOt(){let r=hsn(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{E9,$c,xFe,e5e,C6,lOt};
