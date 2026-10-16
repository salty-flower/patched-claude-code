// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{p}from"./chunk-he0s6sfd.js";import{gXr,ECn}from"./chunk-xdz2hwhv.js";import{tYe,Mps}from"./chunk-38nf1dnm.js";import{o,oe,T,u,A}from"./chunk-zypddzr3.js";var n=1,a=64,s="offer",t=p(()=>o().regex(tYe).refine(Mps)),c=p(()=>u({v:A(n),head:t(),branch:o().min(1).max(gXr).refine(ECn),ancestors:T(oe()).max(a).pipe(T(t()))}));function iqo(e){let r=c().safeParse(e[s]);return r.success?r.data:null}
export{iqo};
