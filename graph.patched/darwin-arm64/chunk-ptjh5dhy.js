// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{f}from"./chunk-ynakaye4.js";import{yc}from"./chunk-gzssw8ss.js";import{k}from"./chunk-bvn0epzr.js";import{rn,Rp}from"./chunk-x65hqvsd.js";import{o,C,u}from"./chunk-xv841za9.js";var l=f(()=>C(u({marketplace:o(),plugin:o()})));function vur(){let e=k("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function vU(){return!0}function UTt(){if(!k("tengu_harbor",!1))return!0;let e=Rp("allow_channels");return e!==null&&e!=="cache_miss"&&e!=="route_missing"}function I4t(e){if(!e)return!1;let{name:n,marketplace:r}=yc(e);if(!r)return!1;return vur().some((t)=>t.plugin===n&&t.marketplace===r)}
export{vur,vU,UTt,I4t};
