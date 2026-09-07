// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import{m}from"./chunk-78nzsrc6.js";import{H}from"./chunk-419zdfz3.js";import{og}from"./chunk-33bdfgmx.js";import{s,v,c}from"./chunk-5ef0bk11.js";var l=m(()=>v(c({marketplace:s(),plugin:s()})));function O1t(){let e=H("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function R9(){return!0}function Oin(e){if(!e)return!1;let{name:n,marketplace:t}=og(e);if(!t)return!1;return O1t().some((r)=>r.plugin===n&&r.marketplace===t)}
export{O1t,R9,Oin};
