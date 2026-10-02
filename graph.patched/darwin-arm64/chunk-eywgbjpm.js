// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{p}from"./chunk-dsp1md5e.js";import{vd}from"./chunk-tzrm2y8w.js";import{x}from"./chunk-er6f56rj.js";import{o,k,d}from"./chunk-g4gq2k0z.js";var l=p(()=>k(d({marketplace:o(),plugin:o()})));function Ukn(){let e=x("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function jQ(){return!0}function oEt(e){if(!e)return!1;let{name:n,marketplace:t}=vd(e);if(!t)return!1;return Ukn().some((r)=>r.plugin===n&&r.marketplace===t)}
export{Ukn,jQ,oEt};
