// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{rn}from"./chunk-w9w461gr.js";import{K}from"./chunk-s8xs8s76.js";import{E,Ht}from"./chunk-shf1fjz2.js";import{ce}from"./chunk-wvb0gwjm.js";import{GA}from"./chunk-shk8jjt1.js";import{Xa}from"./chunk-ms03d305.js";import{Lh}from"./chunk-avaq68ms.js";import{lstat as u,readdir as w,rmdir as g,unlink as y}from"fs/promises";import{dirname as h,join as l}from"path";var ior="images",aor=/^(\d+)\.[a-z]+$/;async function gYr(a,p){let e={removed:0,errors:0},r=ce(),n,i;try{n=await r.realpath(p??Xa()),i=await r.readdir(n)}catch{return e}let o=K();for(let t of i){if(!t.isDirectory())continue;let s=l(n,t.name),c;try{c=await r.readdir(s)}catch{continue}for(let m of c){if(!m.isDirectory()||m.name===o||rn(m.name)===null)continue;let d=l(s,m.name,ior);try{let f=await r.lstat(d);if(!f.isDirectory()||f.mtime>=a)continue;if(await I(d,a))e.removed++}catch(f){if(!Ht(f))e.errors++}}}return e}async function I(a,p){let e=await Lh(a,[a],{leaf:"replace"});try{await e.recheckBeforeWrite();let r=await u(e.ioPath);if(!r.isDirectory()||r.mtime>=p)return!1;let n=l(a,"any"),i=await Lh(n,[n],{leaf:"replace"});try{let o=h(i.ioPath);await i.recheckBeforeWrite();for(let t of await w(o)){let s=t.lastIndexOf(".tmp."),c=s===-1?t:t.slice(0,s);if(!aor.test(c)||s!==-1&&!GA(t,c))continue;await i.recheckBeforeWrite(),await y(l(o,t)).catch(()=>{})}}finally{await i.close()}await e.recheckBeforeWrite();try{await g(e.ioPath)}catch(o){let t=E(o);if(t==="ENOTEMPTY"||t==="EEXIST")return!1;throw o}return!0}finally{await e.close()}}
export{ior,aor,gYr};
