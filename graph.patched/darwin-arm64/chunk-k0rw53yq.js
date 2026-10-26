// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{f}from"./chunk-nyvhtfb3.js";import{ifo,gLn}from"./chunk-3t4qtm0n.js";import{bMe,eDs}from"./chunk-31gxg38t.js";import{o,oe,C,u,T}from"./chunk-k395ayhm.js";var n=1,a=64,s="offer",t=f(()=>o().regex(bMe).refine(eDs)),c=f(()=>u({v:T(n),head:t(),branch:o().min(1).max(ifo).refine(gLn),ancestors:C(oe()).max(a).pipe(C(t()))}));function tcs(e){let r=c().safeParse(e[s]);return r.success?r.data:null}
export{tcs};
