// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f}from"./chunk-2pfss7d0.js";import{OOr,_ln}from"./chunk-8sfzd4bm.js";import{XUe,FBo}from"./chunk-y0b3kvx1.js";import{o,T,u,R}from"./chunk-seb9y51t.js";var n=1,a=64,s="offer",t=f(()=>o().regex(XUe).refine(FBo)),c=f(()=>u({v:R(n),head:t(),branch:o().min(1).max(OOr).refine(_ln),ancestors:T(t()).max(a)}));function lSo(e){let r=c().safeParse(e[s]);return r.success?r.data:null}
export{lSo};
