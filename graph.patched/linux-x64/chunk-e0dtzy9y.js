// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-q8mq1ny3.js";import{che,noa}from"./chunk-f8an9t0m.js";import{Hcs,jgr}from"./chunk-9b9ywa7w.js";import{o,ie,C,u,T}from"./chunk-xrhk683g.js";var n=1,a=64,s="offer",t=p(()=>o().regex(che).refine(noa)),c=p(()=>u({v:T(n),head:t(),branch:o().min(1).max(Hcs).refine(jgr),ancestors:C(ie()).max(a).pipe(C(t()))}));function dSi(e){let r=c().safeParse(e[s]);return r.success?r.data:null}
export{dSi};
