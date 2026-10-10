// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"./chunk-fdwn5gdv.js";import{Gc}from"./chunk-nrk8z90j.js";import{k}from"./chunk-bk5ct2gw.js";import{sn,$p}from"./chunk-qq2mgstr.js";import{o,A,u}from"./chunk-9cmjz7j9.js";var l=p(()=>A(u({marketplace:o(),plugin:o()})));function kXn(){let e=k("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function rF(){return!0}function Oyt(){if(!k("tengu_harbor",!1))return!0;let e=$p("allow_channels");return e!==null&&e!=="cache_miss"&&e!=="route_missing"}function gjt(e){if(!e)return!1;let{name:n,marketplace:r}=Gc(e);if(!r)return!1;return kXn().some((t)=>t.plugin===n&&t.marketplace===r)}
export{kXn,rF,Oyt,gjt};
