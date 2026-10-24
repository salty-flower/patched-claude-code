// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{K}from"./chunk-p82eferg.js";import{iri,Wb,Ft}from"./chunk-27xjmczp.js";import{QM}from"./chunk-3mz4bt3m.js";import{Wd}from"./chunk-vx3s7x6j.js";import{Von,nWe}from"./chunk-31gxg38t.js";import{P,te,Qh,j}from"./chunk-s8vmszp2.js";j();function t(){let[o,e]=Qh((s)=>s+1,0);return P(()=>iri(e),[]),o}function Nmr(o,e){return Von(o)??Von(e)??Wb()}function lD(o){return Ft(Nmr(o.mainLoopModelForSession,o.mainLoopModel))}function Iwe(){let o=K((n)=>n.mainLoopModel),e=K((n)=>n.mainLoopModelForSession),s=QM(),i=t(),r=Wd();return te(()=>nWe(e,o),[e,o,s,r,i])}function i5e(){let o=K((n)=>n.mainLoopModel),e=K((n)=>n.mainLoopModelForSession),s=QM(),i=t(),r=Wd();return te(()=>Nmr(e,o),[e,o,s,r,i])}function su(){let o=K((n)=>n.mainLoopModel),e=K((n)=>n.mainLoopModelForSession),s=QM(),i=t(),r=Wd();return te(()=>lD({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,s,r,i])}
export{Nmr,lD,Iwe,i5e,su};
