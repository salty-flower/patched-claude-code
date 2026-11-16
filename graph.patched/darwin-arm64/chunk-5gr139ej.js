// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-7ap5zh1s.js";import{zc}from"./chunk-gywtf5sd.js";import{b}from"./chunk-e44qnbvj.js";import{yn,za}from"./chunk-ft922s45.js";import{o,A,u}from"./chunk-m507bxk0.js";var l=p(()=>A(u({marketplace:o(),plugin:o()})));function gpo(){let e=b("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function zV(){return!0}function NQe(){if(!b("tengu_harbor",!1))return!0;let e=za("allow_channels");return e!==null&&e!=="cache_miss"&&e!=="route_missing"}function $Ln(e){if(!e)return!1;let{name:n,marketplace:r}=zc(e);if(!r)return!1;return gpo().some((t)=>t.plugin===n&&t.marketplace===r)}
export{gpo,zV,NQe,$Ln};
