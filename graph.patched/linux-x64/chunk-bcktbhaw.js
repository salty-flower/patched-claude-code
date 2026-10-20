// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{p}from"./chunk-949csv87.js";import{rto,xxn}from"./chunk-t4m6cpt8.js";import{cPe,Uws}from"./chunk-rncrmfyt.js";import{o,oe,T,u,A}from"./chunk-mqaa2rrp.js";var n=1,a=64,s="offer",t=p(()=>o().regex(cPe).refine(Uws)),c=p(()=>u({v:A(n),head:t(),branch:o().min(1).max(rto).refine(xxn),ancestors:T(oe()).max(a).pipe(T(t()))}));function KXo(e){let r=c().safeParse(e[s]);return r.success?r.data:null}
export{KXo};
