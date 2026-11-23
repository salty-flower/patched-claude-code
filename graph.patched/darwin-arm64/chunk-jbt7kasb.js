// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{fct,nvn}from"./chunk-skjjqatb.js";import{oR}from"./chunk-c2gp9qyp.js";import{pct,VCe,dte,DDe}from"./chunk-se7em3qw.js";import{mC}from"./chunk-p6gbvfja.js";import{rq}from"./chunk-qckkfdgd.js";function l(r,t,m,n){if(!mC(r))return r;t=VCe(t,r);var o=-1,e=t.length,s=e-1,i=r;while(i!=null&&++o<e){var f=dte(t[o]),u=m;if(f==="__proto__"||f==="constructor"||f==="prototype")return r;if(o!=s){var p=i[f];if(u=n?n(p,f,i):void 0,u===void 0)u=mC(p)?p:pct(t[o+1])?[]:{}}fct(i,f,u),i=i[f]}return r}var V3o=l;function a(r,t,m){var n=-1,o=t.length,e={};while(++n<o){var s=t[n],i=DDe(r,s);if(m(i,s))V3o(e,VCe(s,r),i)}return e}var q3o=a;function d(r,t){if(r==null)return{};var m=rq(nvn(r),function(n){return[n]});return t=oR(t),q3o(r,m,function(n,o){return t(n,o[0])})}var wo=d;
export{V3o,q3o,wo};
