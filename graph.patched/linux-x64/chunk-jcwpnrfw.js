// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{f}from"./chunk-ras5x31x.js";import{xc}from"./chunk-wn3mk0qg.js";import{T}from"./chunk-cxjvwxsa.js";import{on,qf}from"./chunk-nd0jktes.js";import{o,A,u}from"./chunk-w8db6ytr.js";var l=f(()=>A(u({marketplace:o(),plugin:o()})));function vYn(){let e=T("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function WL(){return!0}function Tft(){if(!T("tengu_harbor",!1))return!0;let e=qf("allow_channels");return e!==null&&e!=="cache_miss"&&e!=="route_missing"}function g$t(e){if(!e)return!1;let{name:n,marketplace:r}=xc(e);if(!r)return!1;return vYn().some((t)=>t.plugin===n&&t.marketplace===r)}
export{vYn,WL,Tft,g$t};
