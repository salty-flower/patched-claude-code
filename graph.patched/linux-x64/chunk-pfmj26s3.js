// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Wh,Rt,vp}from"./chunk-30p0nwys.js";import{B}from"./chunk-b3g6g5ra.js";import{ra}from"./chunk-3nd6k54b.js";import{ast,cue}from"./chunk-v4zgc4qd.js";import{k,V,CP,L}from"./chunk-cf8g1269.js";L();function tx(){let[o,e]=CP((r)=>r+1,0);return k(()=>vp(e),[]),o}function nx(o){return tx(),o()}L();function yKt(o,e){return ast(o)??ast(e)??Wh()}function Phe(o){return Rt(yKt(o.mainLoopModelForSession,o.mainLoopModel))}function qZ(){let o=B((n)=>n.mainLoopModel),e=B((n)=>n.mainLoopModelForSession),r=tx(),i=ra();return V(()=>cue(e,o),[e,o,r,i])}function qwt(){let o=B((n)=>n.mainLoopModel),e=B((n)=>n.mainLoopModelForSession),r=tx(),i=ra();return V(()=>yKt(e,o),[e,o,r,i])}function Ll(){let o=B((n)=>n.mainLoopModel),e=B((n)=>n.mainLoopModelForSession),r=tx(),i=ra();return V(()=>Phe({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,r,i])}
export{tx,nx,yKt,Phe,qZ,qwt,Ll};
