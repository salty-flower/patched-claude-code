// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{qi,Z2,Ou}from"./chunk-jk3t30z5.js";async function EAn(s,i){if(await Z2()===qi)return{cleared:!1,reason:"credential_store_failed"};let c=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-80466egk.js").mcpAuthModule(),t=new Set,e={cleared:!0};for(let r of i){if(r.type!=="http"&&r.type!=="sse")continue;let a=Ou(s,r);if(t.has(a))continue;t.add(a);let o=await c.revokeServerTokens(s,r);if(!o.cleared&&(e.cleared||o.reason==="credential_store_failed"))e=o}if(!e.cleared&&e.reason==="credential_store_failed")return e;let n=await Z2();if(n===qi||[...t].some((r)=>!!n?.mcpOAuth?.[r]))return{cleared:!1,reason:"credential_store_failed"};return e}
export{EAn};
