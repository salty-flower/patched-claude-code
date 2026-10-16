// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{nn}from"./chunk-nz45cq1q.js";import{cn}from"./chunk-sm4gyzj8.js";import{rn}from"./chunk-f7pe2z4t.js";import{ae,Lt,F}from"./chunk-57p87fb1.js";F();function yN(r,o,t=1000,n=0,a){let e=cn(),u=()=>nn(Math.max(0,(a??Date.now())-r-n)),l=ae((f)=>{if(!o)return()=>{};let i,s=()=>{try{f()}finally{i=e.setTimeout(s,t)}};return i=e.setTimeout(s,t),()=>i()},[o,t,e]);return Lt(l,u,u)}function ZW({onClose:r,onBack:o,onKill:t,onEnter:n}){return rn({"confirm:yes":n??r},{context:"Confirmation"}),function(e){if(e.key===" ")e.preventDefault(),r();else if(e.key==="left"&&o)e.preventDefault(),o();else if(e.key==="x"&&!e.ctrl&&!e.meta&&t)e.preventDefault(),t()}}
export{yN,ZW};
