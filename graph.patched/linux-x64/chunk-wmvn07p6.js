// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{h}from"./chunk-s0y4aasp.js";import{x}from"./chunk-ns0ekkj0.js";import{jt}from"./chunk-gr6k3107.js";import{i,H,m}from"./chunk-kfr3f08h.js";var a=h(()=>H(m({marketplace:i(),plugin:i()})));function yxt(){let e=x("tengu_harbor_ledger",[]),n=a().safeParse(e);return n.success?n.data:[]}function hj(){return!0}function Q7t(e){if(!e)return!1;let{name:n,marketplace:r}=jt(e);if(!r)return!1;return yxt().some((t)=>t.plugin===n&&t.marketplace===r)}
export{yxt,hj,Q7t};
