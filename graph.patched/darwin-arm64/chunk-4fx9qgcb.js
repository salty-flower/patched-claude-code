// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{tw,zf,_u,jl}from"./chunk-71nbrcp0.js";import{Se}from"./chunk-3vs63y6b.js";import{Mn,_St}from"./chunk-chrc29xz.js";import{ku}from"./chunk-18y7779y.js";import{join as i}from"path";function Q5(n){return/^[A-Za-z0-9_-]{1,128}$/.test(n)?n:tw(n)}async function Rot(n,t,e){return i(_u(await jl(n,ku(e))),sPt(t))}async function Aie(n,t,e){let r=await jl(n,ku(e)),a=i(_u(r),sPt(t)),o=e===void 0?void 0:FQt(zf(r),t);return{path:a,v5:e===void 0||o===void 0?void 0:{backend:e,key:o}}}function FQt(n,t){let e=Se.dirSyncRecord(n,Q5(t));return Mn(e)===void 0?e:void 0}function sPt(n){return`${Q5(n)}${_St}`}
export{Q5,Rot,Aie,FQt,sPt};
