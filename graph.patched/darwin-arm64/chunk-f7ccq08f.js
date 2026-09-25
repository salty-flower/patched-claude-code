// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{f}from"./chunk-1y7zyxh8.js";import{x}from"./chunk-twxt3h9y.js";import{Fd}from"./chunk-entw02h6.js";import{o,T,d}from"./chunk-rvnav1yx.js";var l=f(()=>T(d({marketplace:o(),plugin:o()})));function Nmn(){let e=x("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function EX(){return!0}function Aft(e){if(!e)return!1;let{name:n,marketplace:t}=Fd(e);if(!t)return!1;return Nmn().some((r)=>r.plugin===n&&r.marketplace===t)}
export{Nmn,EX,Aft};
