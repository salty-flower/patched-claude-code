// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Xr,se}from"./chunk-bdfv2ky4.js";import{tR}from"./chunk-0fwqg61r.js";import{tE,Nz}from"./chunk-e44qnbvj.js";import{FY,Ku}from"./chunk-0j5pvaxk.js";import{Je}from"./chunk-xynpsnk2.js";import{Xn,ID}from"./chunk-hs6rtrpv.js";import{randomBytes as f}from"crypto";import{constants as a}from"fs";import{mkdir as p,writeFile as w}from"fs/promises";import{basename as l,dirname as E,join as n}from"path";var _="tengu_mossy_knuth";async function $An(t,i,r,o){let e=Ku();if(!Je(_,{safe:!0})){let m=o?n(e,o):e;await p(m,{recursive:!0,mode:448});let c=n(m,`${t}${Date.now()}${i}`);return await w(c,r),c}await p(e,{recursive:!0,mode:448}),FY(e);let s=n(Xr(se(),E(e)).resolvedPath,l(e),`${t}${f(8).toString("hex")}${i}`);return await CJo(s,r),s}async function CJo(t,i){let r=await tE(t,[t],{leaf:"replace"});try{await r.recheckBeforeWrite(),await tR(r.ioPath),await w(r.ioPath,i,{mode:384,flag:a.O_WRONLY|a.O_CREAT|a.O_EXCL|Xn|ID})}catch(o){Nz(o,r,t)}finally{await r.close()}}
export{$An,CJo};
