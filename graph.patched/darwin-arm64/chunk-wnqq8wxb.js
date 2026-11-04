// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{No,de}from"./chunk-5nh49npx.js";import{Xr,A7,gU}from"./chunk-wn0xt0j2.js";import{b7,Eu}from"./chunk-xfydr49e.js";import{Nb,S2}from"./chunk-qj8veqay.js";import{At}from"./chunk-d7jbzjft.js";import{randomBytes as f}from"crypto";import{constants as a}from"fs";import{mkdir as p,writeFile as w}from"fs/promises";import{basename as l,dirname as E,join as n}from"path";var _="tengu_mossy_knuth";async function Qcn(t,i,r,o){let e=Eu();if(!At(_,{safe:!0})){let m=o?n(e,o):e;await p(m,{recursive:!0,mode:448});let c=n(m,`${t}${Date.now()}${i}`);return await w(c,r),c}await p(e,{recursive:!0,mode:448}),b7(e);let s=n(No(de(),E(e)).resolvedPath,l(e),`${t}${f(8).toString("hex")}${i}`);return await YIo(s,r),s}async function YIo(t,i){let r=await Nb(t,[t],{leaf:"replace"});try{await r.recheckBeforeWrite(),await gU(r.ioPath),await w(r.ioPath,i,{mode:384,flag:a.O_WRONLY|a.O_CREAT|a.O_EXCL|Xr|A7})}catch(o){S2(o,r,t)}finally{await r.close()}}
export{Qcn,YIo};
