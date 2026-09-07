// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{m}from"./chunk-3qjd0g3g.js";import{x}from"./chunk-3e93vkg3.js";import{Vm}from"./chunk-hpw0xsgw.js";import{s,k,c}from"./chunk-krs3sfpb.js";var l=m(()=>k(c({marketplace:s(),plugin:s()})));function q$t(){let e=x("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function jW(){return!0}function mrn(e){if(!e)return!1;let{name:n,marketplace:t}=Vm(e);if(!t)return!1;return q$t().some((r)=>r.plugin===n&&r.marketplace===t)}
export{q$t,jW,mrn};
