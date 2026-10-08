// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{f}from"./chunk-y575z4xw.js";import{r$r,jpn}from"./chunk-fn5wae76.js";import{R2e,UKo}from"./chunk-nwqfvmza.js";import{o,A,u,R}from"./chunk-hcyr0654.js";var n=1,a=64,s="offer",t=f(()=>o().regex(R2e).refine(UKo)),c=f(()=>u({v:R(n),head:t(),branch:o().min(1).max(r$r).refine(jpn),ancestors:A(t()).max(a)}));function ATo(e){let r=c().safeParse(e[s]);return r.success?r.data:null}
export{ATo};
