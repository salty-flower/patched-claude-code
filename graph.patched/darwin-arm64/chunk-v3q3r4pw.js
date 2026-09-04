// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{xh,Et,Bf}from"./chunk-vtwn1md5.js";import{W}from"./chunk-0pmp507y.js";import{Ls}from"./chunk-qsn2bsvf.js";import{C,K,xk,j}from"./chunk-8wk5q2vw.js";import{dMe,ore}from"./chunk-5e9qk3ys.js";j();function fk(){let[o,e]=xk((r)=>r+1,0);return C(()=>Bf(e),[]),o}function Tz(o){return fk(),o()}j();function xOt(o,e){return dMe(o)??dMe(e)??xh()}function aat(o){return Et(xOt(o.mainLoopModelForSession,o.mainLoopModel))}function f7(){let o=W((n)=>n.mainLoopModel),e=W((n)=>n.mainLoopModelForSession),r=fk(),i=Ls();return K(()=>ore(e,o),[e,o,r,i])}function lat(){let o=W((n)=>n.mainLoopModel),e=W((n)=>n.mainLoopModelForSession),r=fk(),i=Ls();return K(()=>xOt(e,o),[e,o,r,i])}function ll(){let o=W((n)=>n.mainLoopModel),e=W((n)=>n.mainLoopModelForSession),r=fk(),i=Ls();return K(()=>aat({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,r,i])}
export{fk,Tz,xOt,aat,f7,lat,ll};
