// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{h}from"./chunk-s0y4aasp.js";import{x}from"./chunk-ghnc2x4f.js";import{Wt}from"./chunk-9e33b7k0.js";import{i,k,m}from"./chunk-ca00k0wg.js";var a=h(()=>k(m({marketplace:i(),plugin:i()})));function wxt(){let e=x("tengu_harbor_ledger",[]),n=a().safeParse(e);return n.success?n.data:[]}function _6(){return!0}function iXt(e){if(!e)return!1;let{name:n,marketplace:r}=Wt(e);if(!r)return!1;return wxt().some((t)=>t.plugin===n&&t.marketplace===r)}
export{wxt,_6,iXt};
