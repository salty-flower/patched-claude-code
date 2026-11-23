// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{iCe,Kfi}from"./chunk-r3adsed5.js";import{a}from"./chunk-8c4ttmk8.js";import{ohn,QSa}from"./chunk-zpnx6gcm.js";import{tna,WDs}from"./chunk-bhscbx2z.js";function y(t){return t.length>0&&t.every((e)=>e==="prometheus")}async function Ixi(t,e){let{initializeTelemetry:n}=await import("./chunk-pe7kygvb.js"),{meter:r,metricsExporterKinds:s}=await n(t,e);if(r){tna(r,(u,m)=>{let c=r?.createCounter(u,m);return{add(d,p={}){let l={...ohn(),...p};c?.add(d,l)}}},{omitUnits:y(s)});let o=WDs();if(o&&!iCe())await i(o)}}function Oxi(){let t=WDs();if(t)i(t).catch(a)}async function i(t){await QSa(),t.add(1,{start_type:Kfi()})}
export{Ixi,Oxi};
