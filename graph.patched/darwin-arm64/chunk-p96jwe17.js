// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-7ap5zh1s.js";import{yhe,Zoa}from"./chunk-qs1tkkrn.js";import{dus,u_r}from"./chunk-agp19rmp.js";import{o,ie,A,u,T}from"./chunk-m507bxk0.js";var n=1,a=64,s="offer",t=p(()=>o().regex(yhe).refine(Zoa)),c=p(()=>u({v:T(n),head:t(),branch:o().min(1).max(dus).refine(u_r),ancestors:A(ie()).max(a).pipe(A(t()))}));function Nbi(e){let r=c().safeParse(e[s]);return r.success?r.data:null}
export{Nbi};
