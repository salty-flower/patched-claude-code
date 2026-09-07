// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{U}from"./chunk-2e1d5j6k.js";import{rh,St}from"./chunk-n495pc0t.js";import{ev}from"./chunk-vcq4tqy5.js";import{Ti}from"./chunk-5w1h1bty.js";import{q,N}from"./chunk-jegfnmzv.js";import{ADe,qte}from"./chunk-1692k4g5.js";N();function z0t(o,n){return ADe(o)??ADe(n)??rh()}function ist(o){return St(z0t(o.mainLoopModelForSession,o.mainLoopModel))}function l8(){let o=U((e)=>e.mainLoopModel),n=U((e)=>e.mainLoopModelForSession),i=ev(),s=Ti();return q(()=>qte(n,o),[n,o,i,s])}function ast(){let o=U((e)=>e.mainLoopModel),n=U((e)=>e.mainLoopModelForSession),i=ev(),s=Ti();return q(()=>z0t(n,o),[n,o,i,s])}function Ka(){let o=U((e)=>e.mainLoopModel),n=U((e)=>e.mainLoopModelForSession),i=ev(),s=Ti();return q(()=>ist({mainLoopModel:o,mainLoopModelForSession:n}),[n,o,i,s])}
export{z0t,ist,l8,ast,Ka};
