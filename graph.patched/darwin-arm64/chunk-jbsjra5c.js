// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{f}from"./chunk-y575z4xw.js";import{xc}from"./chunk-zza0b6kj.js";import{C}from"./chunk-gcyvvtkw.js";import{on,Vf}from"./chunk-cns0hna9.js";import{o,A,u}from"./chunk-hcyr0654.js";var l=f(()=>A(u({marketplace:o(),plugin:o()})));function W3n(){let e=C("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function KL(){return!0}function Lft(){if(!C("tengu_harbor",!1))return!0;let e=Vf("allow_channels");return e!==null&&e!=="cache_miss"&&e!=="route_missing"}function xFt(e){if(!e)return!1;let{name:n,marketplace:r}=xc(e);if(!r)return!1;return W3n().some((t)=>t.plugin===n&&t.marketplace===r)}
export{W3n,KL,Lft,xFt};
