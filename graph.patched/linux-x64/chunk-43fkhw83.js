// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f}from"./chunk-wp37h1qm.js";import{yc}from"./chunk-hyvfy8xz.js";import{T}from"./chunk-m0sj7y8g.js";import{nn,Nf}from"./chunk-v7f8j7cb.js";import{o,C,u}from"./chunk-6kgnb6mn.js";var l=f(()=>C(u({marketplace:o(),plugin:o()})));function PGn(){let e=T("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function nL(){return!0}function cdt(){if(!T("tengu_harbor",!1))return!0;let e=Nf("allow_channels");return e!==null&&e!=="cache_miss"&&e!=="route_missing"}function ADt(e){if(!e)return!1;let{name:n,marketplace:r}=yc(e);if(!r)return!1;return PGn().some((t)=>t.plugin===n&&t.marketplace===r)}
export{PGn,nL,cdt,ADt};
