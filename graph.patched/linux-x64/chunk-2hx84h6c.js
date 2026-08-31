// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{m}from"./chunk-asme1eq2.js";import{x}from"./chunk-1e5y3pjf.js";import{qt}from"./chunk-esrvwhf8.js";import{i,I,p}from"./chunk-kjzc23zf.js";var a=m(()=>I(p({marketplace:i(),plugin:i()})));function Z0t(){let e=x("tengu_harbor_ledger",[]),n=a().safeParse(e);return n.success?n.data:[]}function yG(){return!0}function ktn(e){if(!e)return!1;let{name:n,marketplace:r}=qt(e);if(!r)return!1;return Z0t().some((t)=>t.plugin===n&&t.marketplace===r)}
export{Z0t,yG,ktn};
