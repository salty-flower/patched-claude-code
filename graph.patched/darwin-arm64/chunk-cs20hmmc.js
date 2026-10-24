// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{un}from"./chunk-2k4ev690.js";import{pn}from"./chunk-7car90a2.js";import{an}from"./chunk-vj9gqe2s.js";import{de,kt,j}from"./chunk-s8vmszp2.js";j();function b$(r,o,t=1000,n=0,a){let e=pn(),u=()=>un(Math.max(0,(a??Date.now())-r-n)),l=de((f)=>{if(!o)return()=>{};let i,s=()=>{try{f()}finally{i=e.setTimeout(s,t)}};return i=e.setTimeout(s,t),()=>i()},[o,t,e]);return kt(l,u,u)}function Vz({onClose:r,onBack:o,onKill:t,onEnter:n}){return an({"confirm:yes":n??r},{context:"Confirmation"}),function(e){if(e.key===" ")e.preventDefault(),r();else if(e.key==="left"&&o)e.preventDefault(),o();else if(e.key==="x"&&!e.ctrl&&!e.meta&&t)e.preventDefault(),t()}}
export{b$,Vz};
