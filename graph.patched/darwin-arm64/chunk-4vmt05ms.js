// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{m}from"./chunk-asme1eq2.js";import{I}from"./chunk-bsdtxcdc.js";import{Vt}from"./chunk-h4hvhzbw.js";import{i,H,f}from"./chunk-skrj2yn0.js";var a=m(()=>H(f({marketplace:i(),plugin:i()})));function jDt(){let e=I("tengu_harbor_ledger",[]),n=a().safeParse(e);return n.success?n.data:[]}function bW(){return!0}function _tn(e){if(!e)return!1;let{name:n,marketplace:r}=Vt(e);if(!r)return!1;return jDt().some((t)=>t.plugin===n&&t.marketplace===r)}
export{jDt,bW,_tn};
