// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{m}from"./chunk-55w4bsdv.js";import{P}from"./chunk-vtwn1md5.js";import{Zt}from"./chunk-ayb9ctga.js";import{i,R,c}from"./chunk-7a4adv8j.js";var a=m(()=>R(c({marketplace:i(),plugin:i()})));function lFt(){let e=P("tengu_harbor_ledger",[]),n=a().safeParse(e);return n.success?n.data:[]}function B9(){return!0}function Pan(e){if(!e)return!1;let{name:n,marketplace:r}=Zt(e);if(!r)return!1;return lFt().some((t)=>t.plugin===n&&t.marketplace===r)}
export{lFt,B9,Pan};
