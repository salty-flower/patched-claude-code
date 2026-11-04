// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{f}from"./chunk-tkh9f09d.js";import{sc}from"./chunk-h21zbzen.js";import{k}from"./chunk-axsjfnwn.js";import{mn,Fc}from"./chunk-7kqjk52g.js";import{o,T,u}from"./chunk-97je7cvf.js";var l=f(()=>T(u({marketplace:o(),plugin:o()})));function pzr(){let e=k("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function nG(){return!0}function lzt(){if(!k("tengu_harbor",!1))return!0;let e=Fc("allow_channels");return e!==null&&e!=="cache_miss"&&e!=="route_missing"}function qhn(e){if(!e)return!1;let{name:n,marketplace:r}=sc(e);if(!r)return!1;return pzr().some((t)=>t.plugin===n&&t.marketplace===r)}
export{pzr,nG,lzt,qhn};
