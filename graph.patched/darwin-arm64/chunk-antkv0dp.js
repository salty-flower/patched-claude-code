// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{f}from"./chunk-5r64b6x9.js";import{dc}from"./chunk-jmghkf3s.js";import{k}from"./chunk-1901fdh6.js";import{on,up}from"./chunk-a808z68x.js";import{o,C,u}from"./chunk-82bgdty3.js";var l=f(()=>C(u({marketplace:o(),plugin:o()})));function cir(){let e=k("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function M$(){return!0}function Pkt(){if(!k("tengu_harbor",!1))return!0;let e=up("allow_channels");return e!==null&&e!=="cache_miss"&&e!=="route_missing"}function Uqt(e){if(!e)return!1;let{name:n,marketplace:r}=dc(e);if(!r)return!1;return cir().some((t)=>t.plugin===n&&t.marketplace===r)}
export{cir,M$,Pkt,Uqt};
