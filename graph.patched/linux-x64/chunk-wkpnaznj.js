// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{tn}from"./chunk-0qcng0ek.js";import{an}from"./chunk-c66e3zm1.js";import{le,Pt,L}from"./chunk-1mwacejt.js";import{Zt}from"./chunk-ehmhkksd.js";L();function $H(r,o,t=1000,n=0,a){let e=an(),u=()=>tn(Math.max(0,(a??Date.now())-r-n)),l=le((f)=>{if(!o)return()=>{};let i,s=()=>{try{f()}finally{i=e.setTimeout(s,t)}};return i=e.setTimeout(s,t),()=>i()},[o,t,e]);return Pt(l,u,u)}function rB({onClose:r,onBack:o,onKill:t,onEnter:n}){return Zt({"confirm:yes":n??r},{context:"Confirmation"}),function(e){if(e.key===" ")e.preventDefault(),r();else if(e.key==="left"&&o)e.preventDefault(),o();else if(e.key==="x"&&!e.ctrl&&!e.meta&&t)e.preventDefault(),t()}}
export{$H,rB};
