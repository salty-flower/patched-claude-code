// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{z8,fX}from"./chunk-y08m4ajv.js";function p(r){return r!=null&&typeof r=="object"}var f1=p;var s=Array.isArray,Bb=s;var l="[object Symbol]";function y(r){return typeof r=="symbol"||f1(r)&&fX(r)==l}var p1=y;function b(r,t){var o=-1,i=r==null?0:r.length,n=Array(i);while(++o<i)n[o]=t(r[o],o,r);return n}var X4=b;var u=1/0,e=z8?z8.prototype:void 0,f=e?e.toString:void 0;function m(r){if(typeof r=="string")return r;if(Bb(r))return X4(r,m)+"";if(p1(r))return f?f.call(r):"";var t=r+"";return t=="0"&&1/r==-u?"-0":t}var j4o=m;function a(r){return r==null?"":j4o(r)}var J4=a;
export{X4,Bb,f1,p1,j4o,J4};
