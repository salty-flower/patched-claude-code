// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-q8mq1ny3.js";import{tgt}from"./chunk-k2axjd3w.js";import{o,C,He}from"./chunk-xrhk683g.js";var n=p(()=>o().regex(/^[A-Za-z_][A-Za-z0-9_]{0,31}$/).refine((r)=>!(r in Object.prototype))),a=p(()=>C(He({arg:n(),local:n(),ref:n()})).length(1));function $Ht(r){let t=a().safeParse(r?.[tgt]);if(!t.success)return;let[e]=t.data;return e!==void 0&&e.local!==e.ref?e:void 0}
export{$Ht};
