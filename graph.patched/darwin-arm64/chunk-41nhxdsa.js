// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Eq,xie}from"./chunk-ejxw1v9a.js";function s(r){return r!=null&&typeof r=="object"}var wq=s;var l=Array.isArray,kw=l;var y="[object Symbol]";function b(r){return typeof r=="symbol"||wq(r)&&xie(r)==y}var B5=b;function u(r,t){var o=-1,i=r==null?0:r.length,n=Array(i);while(++o<i)n[o]=t(r[o],o,r);return n}var tfe=u;var a=1/0,e=Eq?Eq.prototype:void 0,f=e?e.toString:void 0;function m(r){if(typeof r=="string")return r;if(kw(r))return tfe(r,m)+"";if(B5(r))return f?f.call(r):"";var t=r+"";return t=="0"&&1/r==-a?"-0":t}var p=m;function d(r){return r==null?"":p(r)}var nfe=d;
export{tfe,kw,wq,B5,nfe};
