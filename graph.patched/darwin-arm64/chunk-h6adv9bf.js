// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{f}from"./chunk-nyvhtfb3.js";import{mc}from"./chunk-qnvapa9t.js";import{k}from"./chunk-27xjmczp.js";import{on,Jc}from"./chunk-nmaeg6kv.js";import{o,C,u}from"./chunk-k395ayhm.js";var l=f(()=>C(u({marketplace:o(),plugin:o()})));function Ybr(){let e=k("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function oB(){return!0}function kOt(){if(!k("tengu_harbor",!1))return!0;let e=Jc("allow_channels");return e!==null&&e!=="cache_miss"&&e!=="route_missing"}function mJt(e){if(!e)return!1;let{name:n,marketplace:r}=mc(e);if(!r)return!1;return Ybr().some((t)=>t.plugin===n&&t.marketplace===r)}
export{Ybr,oB,kOt,mJt};
