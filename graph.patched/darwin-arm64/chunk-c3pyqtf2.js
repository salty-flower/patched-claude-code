// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{xne,oV,R5e}from"./chunk-0x9x817t.js";import{Hh}from"./chunk-nfbft0th.js";function s(i,r,d){let{plugin:n}=i,e=n!==void 0&&xne();if(e)Hh(()=>R5e(n));if(e&&!i.recurring)oV(r,void 0,i.agentId?"stays":d);return e}var wNr=(i)=>(r,d)=>{let n=()=>{if(d!==void 0)Hh(d)},e=()=>{if(s(r,e,n))return;i(r,n)},o=s(r,e,n);if(!o)i(r,()=>{});return o&&!r.recurring},ENr=(i)=>(r,d)=>{let n=new Map;return r.forEach((e)=>{n.set(e.plugin,[...n.get(e.plugin)??[],e])}),[...n].flatMap(([e,o])=>{let l=e===void 0?{}:{plugin:e},t=()=>Hh(()=>d(o)),u=()=>{if(s(l,u,t))return;i(o,e,t)},a=s(l,u,t),f=!1,g=!1;if(!a)i(o,e,()=>{if(f=!0,g)t()});return g=!0,a||!f?o.map((c)=>c.id):[]})};export{wNr,ENr};
