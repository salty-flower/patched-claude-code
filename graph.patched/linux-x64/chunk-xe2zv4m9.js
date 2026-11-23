// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Xr,se}from"./chunk-ray9kegj.js";import{Yn,QF}from"./chunk-3xb44ngy.js";import{ZC}from"./chunk-xv2ysf5h.js";import{ev,LV}from"./chunk-a5a37ds7.js";import{R7,Ku}from"./chunk-pjzr9j95.js";import{Je}from"./chunk-eye8byva.js";import{randomBytes as f}from"crypto";import{constants as a}from"fs";import{mkdir as p,writeFile as w}from"fs/promises";import{basename as l,dirname as E,join as n}from"path";var _="tengu_mossy_knuth";async function vCn(t,i,r,o){let e=Ku();if(!Je(_,{safe:!0})){let m=o?n(e,o):e;await p(m,{recursive:!0,mode:448});let c=n(m,`${t}${Date.now()}${i}`);return await w(c,r),c}await p(e,{recursive:!0,mode:448}),R7(e);let s=n(Xr(se(),E(e)).resolvedPath,l(e),`${t}${f(8).toString("hex")}${i}`);return await KXo(s,r),s}async function KXo(t,i){let r=await ev(t,[t],{leaf:"replace"});try{await r.recheckBeforeWrite(),await ZC(r.ioPath),await w(r.ioPath,i,{mode:384,flag:a.O_WRONLY|a.O_CREAT|a.O_EXCL|Yn|QF})}catch(o){LV(o,r,t)}finally{await r.close()}}
export{vCn,KXo};
