// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{un}from"./chunk-qf6jrnqc.js";import{vn}from"./chunk-v5qk8x3w.js";import{_n}from"./chunk-2vtm9vnf.js";import{ue,Tt,j}from"./chunk-rt5zqm44.js";j();function oH(r,o,t=1000,n=0,a){let e=vn(),u=()=>un(Math.max(0,(a??Date.now())-r-n)),l=ue((f)=>{if(!o)return()=>{};let i,s=()=>{try{f()}finally{i=e.setTimeout(s,t)}};return i=e.setTimeout(s,t),()=>i()},[o,t,e]);return Tt(l,u,u)}function Gq({onClose:r,onBack:o,onKill:t,onEnter:n}){return _n({"confirm:yes":n??r},{context:"Confirmation"}),function(e){if(e.key===" ")e.preventDefault(),r();else if(e.key==="left"&&o)e.preventDefault(),o();else if(e.key==="x"&&!e.ctrl&&!e.meta&&t)e.preventDefault(),t()}}
export{oH,Gq};
