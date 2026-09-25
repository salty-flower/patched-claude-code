// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Qt}from"./chunk-hn35vsf8.js";import{jt}from"./chunk-v1jfv1hk.js";import{Pt}from"./chunk-7gskgqd7.js";import{oe,Tt,L}from"./chunk-1cnhgfv0.js";L();function oI(r,o,t=1000,a=0,e){let n=jt(),u=()=>Qt(Math.max(0,(e??Date.now())-r-a)),l=oe((f)=>{if(!o)return()=>{};let i,s=()=>{try{f()}finally{i=n.setTimeout(s,t)}};return i=n.setTimeout(s,t),()=>i()},[o,t,n]);return Tt(l,u,u)}function JL({onClose:r,onBack:o,onKill:t}){return Pt({"confirm:yes":r},{context:"Confirmation"}),function(e){if(e.key===" ")e.preventDefault(),r();else if(e.key==="left"&&o)e.preventDefault(),o();else if(e.key==="x"&&!e.ctrl&&!e.meta&&t)e.preventDefault(),t()}}
export{oI,JL};
