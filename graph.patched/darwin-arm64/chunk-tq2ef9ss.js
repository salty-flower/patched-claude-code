// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{f}from"./chunk-5r64b6x9.js";import{GXr,jTn}from"./chunk-ee20ks24.js";import{d3e,_fs}from"./chunk-996thspe.js";import{o,oe,C,u,A}from"./chunk-82bgdty3.js";var n=1,a=64,s="offer",t=f(()=>o().regex(d3e).refine(_fs)),c=f(()=>u({v:A(n),head:t(),branch:o().min(1).max(GXr).refine(jTn),ancestors:C(oe()).max(a).pipe(C(t()))}));function Oqo(e){let r=c().safeParse(e[s]);return r.success?r.data:null}
export{Oqo};
