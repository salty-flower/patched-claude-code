// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{p}from"./chunk-dsp1md5e.js";import{Yur,F5t}from"./chunk-q54raw75.js";import{Aqe,Pbo}from"./chunk-59zy4j10.js";import{o,k,d,R}from"./chunk-g4gq2k0z.js";var n=1,a=64,s="offer",t=p(()=>o().regex(Aqe).refine(Pbo)),c=p(()=>d({v:R(n),head:t(),branch:o().min(1).max(Yur).refine(F5t),ancestors:k(t()).max(a)}));function f7r(e){let r=c().safeParse(e[s]);return r.success?r.data:null}
export{f7r};
