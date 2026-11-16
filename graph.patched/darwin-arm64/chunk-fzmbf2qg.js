// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{d}from"./chunk-wryttfdq.js";import{t}from"./chunk-bdfv2ky4.js";async function gpt(n,e){return(await Eno(n,e))?.tags??null}async function Eno(n,e){try{let s=e.getAccessToken?await e.getAccessToken():void 0,{getBridgeSessionOrStatus:i}=await import("./chunk-k1rstw7a.js"),{session:r}=await i(n,{baseUrl:e.baseUrl,...s&&{getAccessToken:()=>s},credentials:e.credentials,useV2:!0});if(!r||!Array.isArray(r.tags))return null;let a=typeof r.created_at==="string"?Date.parse(r.created_at):Number.NaN;return{tags:r.tags,createdAtMs:Number.isNaN(a)?void 0:a}}catch(s){return t(`[bridge:session] session tag read failed: ${d(s)}`,{level:"warn"}),null}}
export{gpt,Eno};
