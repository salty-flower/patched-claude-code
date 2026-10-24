// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Vt}from"./chunk-9sbknd2z.js";import{V}from"./chunk-ersar6wn.js";import{v,Kt}from"./chunk-36ysyspx.js";import{ie}from"./chunk-d7b0m8qy.js";import{HM}from"./chunk-7pvep8tw.js";import{jd}from"./chunk-5xe1amq0.js";import{uv}from"./chunk-vh7e37w8.js";import{lstat as u,readdir as w,rmdir as g,unlink as y}from"fs/promises";import{dirname as h,join as l}from"path";var Lho="images",Nho=/^(\d+)\.[a-z]+$/;async function FTs(a,p){let e={removed:0,errors:0},r=ie(),n,i;try{n=await r.realpath(p??jd()),i=await r.readdir(n)}catch{return e}let o=V();for(let t of i){if(!t.isDirectory())continue;let s=l(n,t.name),c;try{c=await r.readdir(s)}catch{continue}for(let m of c){if(!m.isDirectory()||m.name===o||Vt(m.name)===null)continue;let d=l(s,m.name,Lho);try{let f=await r.lstat(d);if(!f.isDirectory()||f.mtime>=a)continue;if(await I(d,a))e.removed++}catch(f){if(!Kt(f))e.errors++}}}return e}async function I(a,p){let e=await uv(a,[a],{leaf:"replace"});try{await e.recheckBeforeWrite();let r=await u(e.ioPath);if(!r.isDirectory()||r.mtime>=p)return!1;let n=l(a,"any"),i=await uv(n,[n],{leaf:"replace"});try{let o=h(i.ioPath);await i.recheckBeforeWrite();for(let t of await w(o)){let s=t.lastIndexOf(".tmp."),c=s===-1?t:t.slice(0,s);if(!Nho.test(c)||s!==-1&&!HM(t,c))continue;await i.recheckBeforeWrite(),await y(l(o,t)).catch(()=>{})}}finally{await i.close()}await e.recheckBeforeWrite();try{await g(e.ioPath)}catch(o){let t=v(o);if(t==="ENOTEMPTY"||t==="EEXIST")return!1;throw o}return!0}finally{await e.close()}}
export{Lho,Nho,FTs};
