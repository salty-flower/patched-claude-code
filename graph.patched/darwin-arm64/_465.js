// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Cib as g,oib as p}from"./_504.js";import{Qrc as f,yrc as t}from"./_668.js";import{$7c as s,M7c as r,b8c as i,u8c as c}from"./_782.js";import{Zcd as o,_cd as m}from"./_803.js";import{Exd as u}from"./_839.js";function d(){let e=t("tengu_harbor_ledger",[]),n=h().safeParse(e);return n.success?n.data:[]}function z(){return!0}function E(e){if(!e)return!1;let{name:n,marketplace:a}=p(e);if(!a)return!1;return d().some((l)=>l.plugin===n&&l.marketplace===a)}var h;var A=u(()=>{c();m();g();f();h=o(()=>s(i({marketplace:r(),plugin:r()})))});
export{d as e5a,z as f5a,E as g5a,A as h5a};
