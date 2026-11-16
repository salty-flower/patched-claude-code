// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ozo}from"./chunk-3s06mjrb.js";import{z8e}from"./chunk-prqy9cm5.js";import{wKt}from"./chunk-gywtf5sd.js";var{ceil:i,max:a}=Math;function m(t,e,r){if(r?wKt(t,e,r):e===void 0)e=1;else e=a(ozo(e),0);var n=t==null?0:t.length;if(!n||e<1)return[];var l=0,f=0,o=Array(i(n/e));while(l<n)o[f++]=z8e(t,l,l+=e);return o}var yVe=m;
export{yVe};
