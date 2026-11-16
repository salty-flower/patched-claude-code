// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-q8mq1ny3.js";import{zc}from"./chunk-374g520d.js";import{S}from"./chunk-a5a37ds7.js";import{yn,za}from"./chunk-rb5kx98w.js";import{o,C,u}from"./chunk-xrhk683g.js";var l=p(()=>C(u({marketplace:o(),plugin:o()})));function fpo(){let e=S("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function jq(){return!0}function LQe(){if(!S("tengu_harbor",!1))return!0;let e=za("allow_channels");return e!==null&&e!=="cache_miss"&&e!=="route_missing"}function ULn(e){if(!e)return!1;let{name:n,marketplace:r}=zc(e);if(!r)return!1;return fpo().some((t)=>t.plugin===n&&t.marketplace===r)}
export{fpo,jq,LQe,ULn};
