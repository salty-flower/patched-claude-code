// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{f}from"./chunk-ras5x31x.js";import{R$r,bpn}from"./chunk-20wcvshx.js";import{SWe,n4o}from"./chunk-g263vvvn.js";import{o,A,u,R}from"./chunk-w8db6ytr.js";var n=1,a=64,s="offer",t=f(()=>o().regex(SWe).refine(n4o)),c=f(()=>u({v:R(n),head:t(),branch:o().min(1).max(R$r).refine(bpn),ancestors:A(t()).max(a)}));function KAo(e){let r=c().safeParse(e[s]);return r.success?r.data:null}
export{KAo};
