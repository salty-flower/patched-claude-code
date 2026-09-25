// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{xF,ONt}from"./chunk-w13amena.js";import{$u}from"./chunk-ekshy3qa.js";import{constants as l}from"fs";import{lstat as u,open as f,readlink as p,realpath as h,stat as R}from"fs/promises";function hor(n,r="darwin"){return ONt(n)||xF(n,r)}async function oPe(n,r,o){let i=r+1,e=Buffer.alloc(o===void 0?i:Math.min(Math.max(Number(o)+1,1),i)),t=0;while(t<i){if(t===e.length){let s=Buffer.alloc(i);e.copy(s),e=s}let{bytesRead:a}=await n.read(e,t,e.length-t,t);if(a===0)break;t+=a}return{bytes:e.subarray(0,Math.min(t,r)),overLimit:t>r}}var m={realpath:h,lstat:u,readlink:p};async function vbt(n,r,o,i=m){let e;try{e=await i.lstat(o,{bigint:!0})}catch{return}if(e.dev!==r.dev||e.ino!==r.ino)return;try{if(await i.realpath(o)!==o)return}catch{return}return o}async function yor(n){return f(n,l.O_RDONLY|l.O_NONBLOCK|$u)}export{hor,oPe,vbt,yor};
