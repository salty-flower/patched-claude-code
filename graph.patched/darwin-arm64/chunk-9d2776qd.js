// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{ws}from"./chunk-agtq4j4g.js";import{E0,da}from"./chunk-y4qg9nre.js";async function ncn(n,i){if(await E0()===ws)return{cleared:!1,reason:"credential_store_failed"};let c=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-4c6tqfaw.js").mcpAuthModule(),t=new Set,e={cleared:!0};for(let r of i){if(r.type!=="http"&&r.type!=="sse")continue;let a=da(n,r);if(t.has(a))continue;t.add(a);let o=await c.revokeServerTokens(n,r);if(!o.cleared&&(e.cleared||o.reason==="credential_store_failed"))e=o}if(!e.cleared&&e.reason==="credential_store_failed")return e;let s=await E0();if(s===ws||[...t].some((r)=>s?.mcpOAuth?.[r]!==void 0))return{cleared:!1,reason:"credential_store_failed"};return e}
export{ncn};
