// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{os,gd,K}from"./chunk-r3adsed5.js";import{cn}from"./chunk-e5p1adf2.js";import{Xr,se}from"./chunk-ray9kegj.js";import{ai}from"./chunk-1jy029p2.js";import{a_}from"./chunk-cp79cjnw.js";import{tC}from"./chunk-374g520d.js";import{nt}from"./chunk-x8kwxevw.js";import{fe}from"./chunk-c63g0fmv.js";import{homedir as s}from"os";import{dirname as t,join as l,resolve as f}from"path";var o=fe(new Map,(r)=>r.clear());function cDo(r){let e=nt(cn(r)).slice(0,16);return l(`${a_(r)}.${e}`,tC)}function i(r){return K()?void 0:cDo(wkt(r))}function wkt(r){let e=ai(r);return e===null||u(e)?r:e}function Dma(r){let e=i(r);return e===void 0?[]:[t(e),t(cDo(r))]}function KGs(){return gd()??os()}function vkt(){let r=KGs();return r===null?void 0:i(r)}function u(r){let e;try{e=s()}catch{return!1}if(e==="")return!1;if(r===cn(f(e)))return!0;let n=o.get(e);if(n===void 0)n=cn(Xr(se(),e).resolvedPath),o.set(e,n);return r===n}
export{cDo,wkt,Dma,KGs,vkt};
