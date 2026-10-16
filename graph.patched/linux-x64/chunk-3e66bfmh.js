// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{p}from"./chunk-he0s6sfd.js";import{dc}from"./chunk-hc3mrz77.js";import{k}from"./chunk-k16gymf7.js";import{on,pp}from"./chunk-we926ymf.js";import{o,T,u}from"./chunk-zypddzr3.js";var l=p(()=>T(u({marketplace:o(),plugin:o()})));function Wsr(){let e=k("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function RF(){return!0}function bkt(){if(!k("tengu_harbor",!1))return!0;let e=pp("allow_channels");return e!==null&&e!=="cache_miss"&&e!=="route_missing"}function Aqt(e){if(!e)return!1;let{name:n,marketplace:r}=dc(e);if(!r)return!1;return Wsr().some((t)=>t.plugin===n&&t.marketplace===r)}
export{Wsr,RF,bkt,Aqt};
