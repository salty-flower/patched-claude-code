// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Z9,wX}from"./chunk-dtt7z3w7.js";function p(r){return r!=null&&typeof r=="object"}var mU=p;var s=Array.isArray,jS=s;var l="[object Symbol]";function y(r){return typeof r=="symbol"||mU(r)&&wX(r)==l}var hU=y;function b(r,t){var o=-1,i=r==null?0:r.length,n=Array(i);while(++o<i)n[o]=t(r[o],o,r);return n}var rq=b;var u=1/0,e=Z9?Z9.prototype:void 0,f=e?e.toString:void 0;function m(r){if(typeof r=="string")return r;if(jS(r))return rq(r,m)+"";if(hU(r))return f?f.call(r):"";var t=r+"";return t=="0"&&1/r==-u?"-0":t}var gqo=m;function a(r){return r==null?"":gqo(r)}var oq=a;
export{rq,jS,mU,hU,gqo,oq};
