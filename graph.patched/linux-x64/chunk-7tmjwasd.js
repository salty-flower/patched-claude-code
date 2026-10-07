// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Jt}from"./chunk-b7wdy41p.js";import{K}from"./chunk-aywwjcwq.js";import{v,Lt}from"./chunk-fdatg9ax.js";import{oe}from"./chunk-gvn18sr5.js";import{JR}from"./chunk-4hsn0a4s.js";import{Pl}from"./chunk-nffxs9ey.js";import{$_}from"./chunk-vrdhcp6e.js";import{lstat as u,readdir as w,rmdir as g,unlink as y}from"fs/promises";import{dirname as h,join as l}from"path";var fDr="images",mDr=/^(\d+)\.[a-z]+$/;async function ZHo(a,p){let e={removed:0,errors:0},r=oe(),n,i;try{n=await r.realpath(p??Pl()),i=await r.readdir(n)}catch{return e}let o=K();for(let t of i){if(!t.isDirectory())continue;let s=l(n,t.name),c;try{c=await r.readdir(s)}catch{continue}for(let m of c){if(!m.isDirectory()||m.name===o||Jt(m.name)===null)continue;let d=l(s,m.name,fDr);try{let f=await r.lstat(d);if(!f.isDirectory()||f.mtime>=a)continue;if(await I(d,a))e.removed++}catch(f){if(!Lt(f))e.errors++}}}return e}async function I(a,p){let e=await $_(a,[a],{leaf:"replace"});try{await e.recheckBeforeWrite();let r=await u(e.ioPath);if(!r.isDirectory()||r.mtime>=p)return!1;let n=l(a,"any"),i=await $_(n,[n],{leaf:"replace"});try{let o=h(i.ioPath);await i.recheckBeforeWrite();for(let t of await w(o)){let s=t.lastIndexOf(".tmp."),c=s===-1?t:t.slice(0,s);if(!mDr.test(c)||s!==-1&&!JR(t,c))continue;await i.recheckBeforeWrite(),await y(l(o,t)).catch(()=>{})}}finally{await i.close()}await e.recheckBeforeWrite();try{await g(e.ioPath)}catch(o){let t=v(o);if(t==="ENOTEMPTY"||t==="EEXIST")return!1;throw o}return!0}finally{await e.close()}}
export{fDr,mDr,ZHo};
