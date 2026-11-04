// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{f}from"./chunk-tkh9f09d.js";import{W3e}from"./chunk-0qfpb4k8.js";import{o,T,Fe}from"./chunk-97je7cvf.js";import{Je}from"./chunk-k6s5je75.js";var uSn=new Je(()=>({}));function pSn(n,r){let e=n?.servers.get(r.name);return e!==void 0&&r.config.type==="http"&&r.config.url===e.url&&n?.heldSinceBoot(r.name)===!0?e.server:void 0}var t=f(()=>o().regex(/^[A-Za-z_][A-Za-z0-9_]{0,31}$/).refine((n)=>!(n in Object.prototype))),i=f(()=>T(Fe({arg:t(),local:t(),ref:t()})).length(1));function ver(n){let r=i().safeParse(n?.[W3e]);if(!r.success)return;let[e]=r.data;return e!==void 0&&e.local!==e.ref?e:void 0}
export{uSn,pSn,ver};
