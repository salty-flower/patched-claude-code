// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"./chunk-fdwn5gdv.js";import{dGr,S_n}from"./chunk-35s5aypx.js";import{Eze,zJo}from"./chunk-sfn1dbxq.js";import{o,A,u,C}from"./chunk-9cmjz7j9.js";var n=1,a=64,s="offer",t=p(()=>o().regex(Eze).refine(zJo)),c=p(()=>u({v:C(n),head:t(),branch:o().min(1).max(dGr).refine(S_n),ancestors:A(t()).max(a)}));function EDo(e){let r=c().safeParse(e[s]);return r.success?r.data:null}
export{EDo};
