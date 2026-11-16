// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-7ap5zh1s.js";import{agt}from"./chunk-sj3djxc7.js";import{o,A,He}from"./chunk-m507bxk0.js";var n=p(()=>o().regex(/^[A-Za-z_][A-Za-z0-9_]{0,31}$/).refine((r)=>!(r in Object.prototype))),a=p(()=>A(He({arg:n(),local:n(),ref:n()})).length(1));function qHt(r){let t=a().safeParse(r?.[agt]);if(!t.success)return;let[e]=t.data;return e!==void 0&&e.local!==e.ref?e:void 0}
export{qHt};
