// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{f}from"./chunk-ynakaye4.js";import{Kto,Gxn}from"./chunk-rj36szqj.js";import{yPe,CEs}from"./chunk-na9nw575.js";import{o,oe,C,u,T}from"./chunk-xv841za9.js";var n=1,a=64,s="offer",t=f(()=>o().regex(yPe).refine(CEs)),c=f(()=>u({v:T(n),head:t(),branch:o().min(1).max(Kto).refine(Gxn),ancestors:C(oe()).max(a).pipe(C(t()))}));function C7o(e){let r=c().safeParse(e[s]);return r.success?r.data:null}
export{C7o};
