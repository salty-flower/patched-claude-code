// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Izo}from"./chunk-jn776fhs.js";import{$9e}from"./chunk-4rvtm82w.js";import{c3t}from"./chunk-374g520d.js";var{ceil:i,max:a}=Math;function m(t,e,r){if(r?c3t(t,e,r):e===void 0)e=1;else e=a(Izo(e),0);var n=t==null?0:t.length;if(!n||e<1)return[];var l=0,f=0,o=Array(i(n/e));while(l<n)o[f++]=$9e(t,l,l+=e);return o}var pqe=m;
export{pqe};
