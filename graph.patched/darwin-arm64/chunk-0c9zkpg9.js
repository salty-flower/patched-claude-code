// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{os,gd,K}from"./chunk-m8nhymg4.js";import{cn}from"./chunk-0sn0736b.js";import{Xr,se}from"./chunk-bdfv2ky4.js";import{ai}from"./chunk-v2bkh5ab.js";import{a_}from"./chunk-ntahet54.js";import{rA}from"./chunk-gywtf5sd.js";import{nt}from"./chunk-x8kwxevw.js";import{fe}from"./chunk-c63g0fmv.js";import{homedir as s}from"os";import{dirname as t,join as l,resolve as f}from"path";var o=fe(new Map,(r)=>r.clear());function HDo(r){let e=nt(cn(r)).slice(0,16);return l(`${a_(r)}.${e}`,rA)}function i(r){return K()?void 0:HDo(Cvt(r))}function Cvt(r){let e=ai(r);return e===null||u(e)?r:e}function vha(r){let e=i(r);return e===void 0?[]:[t(e),t(HDo(r))]}function xGs(){return gd()??os()}function Avt(){let r=xGs();return r===null?void 0:i(r)}function u(r){let e;try{e=s()}catch{return!1}if(e==="")return!1;if(r===cn(f(e)))return!0;let n=o.get(e);if(n===void 0)n=cn(Xr(se(),e).resolvedPath),o.set(e,n);return r===n}
export{HDo,Cvt,vha,xGs,Avt};
