// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f}from"./chunk-2pfss7d0.js";import{yc}from"./chunk-vhhr71m6.js";import{k}from"./chunk-s46qgfx7.js";import{nn,Nf}from"./chunk-2e9twphc.js";import{o,T,u}from"./chunk-seb9y51t.js";var l=f(()=>T(u({marketplace:o(),plugin:o()})));function JGn(){let e=k("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function aL(){return!0}function bdt(){if(!k("tengu_harbor",!1))return!0;let e=Nf("allow_channels");return e!==null&&e!=="cache_miss"&&e!=="route_missing"}function UMt(e){if(!e)return!1;let{name:n,marketplace:r}=yc(e);if(!r)return!1;return JGn().some((t)=>t.plugin===n&&t.marketplace===r)}
export{JGn,aL,bdt,UMt};
