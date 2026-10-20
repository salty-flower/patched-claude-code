// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{p}from"./chunk-949csv87.js";import{yc}from"./chunk-ww4tybgt.js";import{k}from"./chunk-7p6jp6kj.js";import{rn,xp}from"./chunk-6qx5mjec.js";import{o,T,u}from"./chunk-mqaa2rrp.js";var l=p(()=>T(u({marketplace:o(),plugin:o()})));function sur(){let e=k("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function yU(){return!0}function HAt(){if(!k("tengu_harbor",!1))return!0;let e=xp("allow_channels");return e!==null&&e!=="cache_miss"&&e!=="route_missing"}function v6t(e){if(!e)return!1;let{name:n,marketplace:r}=yc(e);if(!r)return!1;return sur().some((t)=>t.plugin===n&&t.marketplace===r)}
export{sur,yU,HAt,v6t};
