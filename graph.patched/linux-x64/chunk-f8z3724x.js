// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Wae,z6,Eet}from"./chunk-zaxe68t4.js";import{Ig}from"./chunk-xynrjax8.js";function s(i,r,d){let{plugin:n}=i,e=n!==void 0&&Wae();if(e)Ig(()=>Eet(n));if(e&&!i.recurring)z6(r,void 0,i.agentId?"stays":d);return e}var uQr=(i)=>(r,d)=>{let n=()=>{if(d!==void 0)Ig(d)},e=()=>{if(s(r,e,n))return;i(r,n)},o=s(r,e,n);if(!o)i(r,()=>{});return o&&!r.recurring},fQr=(i)=>(r,d)=>{let n=new Map;return r.forEach((e)=>{n.set(e.plugin,[...n.get(e.plugin)??[],e])}),[...n].flatMap(([e,o])=>{let l=e===void 0?{}:{plugin:e},t=()=>Ig(()=>d(o)),u=()=>{if(s(l,u,t))return;i(o,e,t)},a=s(l,u,t),f=!1,g=!1;if(!a)i(o,e,()=>{if(f=!0,g)t()});return g=!0,a||!f?o.map((c)=>c.id):[]})};export{uQr,fQr};
