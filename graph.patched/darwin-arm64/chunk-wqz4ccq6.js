// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{f}from"./chunk-tkh9f09d.js";import{hWo,DXn}from"./chunk-knk3qqec.js";import{Bde,YAi}from"./chunk-stsd2sgh.js";import{o,oe,T,u,C}from"./chunk-97je7cvf.js";var n=1,a=64,s="offer",t=f(()=>o().regex(Bde).refine(YAi)),c=f(()=>u({v:C(n),head:t(),branch:o().min(1).max(hWo).refine(DXn),ancestors:T(oe()).max(a).pipe(T(t()))}));function GGs(e){let r=c().safeParse(e[s]);return r.success?r.data:null}
export{GGs};
