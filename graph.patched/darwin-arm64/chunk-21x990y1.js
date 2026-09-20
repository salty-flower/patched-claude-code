// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Ixt}from"./chunk-mpsakwr1.js";import{mhn,I5e}from"./chunk-a38xyc22.js";var{ceil:i,max:a}=Math;function m(t,e,r){if(r?mhn(t,e,r):e===void 0)e=1;else e=a(Ixt(e),0);var n=t==null?0:t.length;if(!n||e<1)return[];var l=0,f=0,o=Array(i(n/e));while(l<n)o[f++]=I5e(t,l,l+=e);return o}var rnt=m;
export{rnt};
