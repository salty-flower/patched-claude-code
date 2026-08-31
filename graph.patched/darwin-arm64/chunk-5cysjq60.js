// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{eS,Ot,Yh}from"./chunk-bsdtxcdc.js";import{W}from"./chunk-8gn115dm.js";import{Ts}from"./chunk-c2d1qgjy.js";import{A,z,dv,F}from"./chunk-w6mhhrt2.js";import{DIe,Bee}from"./chunk-fy12d89p.js";F();function QC(){let[o,e]=dv((r)=>r+1,0);return A(()=>Yh(e),[]),o}function fnt(o){return QC(),o()}F();function H0t(o,e){return DIe(o)??DIe(e)??eS()}function mnt(o){return Ot(H0t(o.mainLoopModelForSession,o.mainLoopModel))}function IK(){let o=W((n)=>n.mainLoopModel),e=W((n)=>n.mainLoopModelForSession),r=QC(),i=Ts();return z(()=>Bee(e,o),[e,o,r,i])}function gnt(){let o=W((n)=>n.mainLoopModel),e=W((n)=>n.mainLoopModelForSession),r=QC(),i=Ts();return z(()=>H0t(e,o),[e,o,r,i])}function Oc(){let o=W((n)=>n.mainLoopModel),e=W((n)=>n.mainLoopModelForSession),r=QC(),i=Ts();return z(()=>mnt({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,r,i])}
export{QC,fnt,H0t,mnt,IK,gnt,Oc};
