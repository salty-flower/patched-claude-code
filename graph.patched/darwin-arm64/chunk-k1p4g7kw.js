// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{fAe,Tpi}from"./chunk-m8nhymg4.js";import{a}from"./chunk-mddke2ke.js";import{bhn,Bwa}from"./chunk-3ht6cwn3.js";import{Qna,CLs}from"./chunk-ks01jben.js";function y(t){return t.length>0&&t.every((e)=>e==="prometheus")}async function mPi(t,e){let{initializeTelemetry:n}=await import("./chunk-z6955vqc.js"),{meter:r,metricsExporterKinds:s}=await n(t,e);if(r){Qna(r,(u,m)=>{let c=r?.createCounter(u,m);return{add(d,p={}){let l={...bhn(),...p};c?.add(d,l)}}},{omitUnits:y(s)});let o=CLs();if(o&&!fAe())await i(o)}}function hPi(){let t=CLs();if(t)i(t).catch(a)}async function i(t){await Bwa(),t.add(1,{start_type:Tpi()})}
export{mPi,hPi};
