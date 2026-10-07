// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f}from"./chunk-wp37h1qm.js";import{rOr,Kan}from"./chunk-b5qxpbxp.js";import{jBe,e1o}from"./chunk-9wqh5j7s.js";import{o,C,u,R}from"./chunk-6kgnb6mn.js";var n=1,a=64,s="offer",t=f(()=>o().regex(jBe).refine(e1o)),c=f(()=>u({v:R(n),head:t(),branch:o().min(1).max(rOr).refine(Kan),ancestors:C(t()).max(a)}));function $_o(e){let r=c().safeParse(e[s]);return r.success?r.data:null}
export{$_o};
