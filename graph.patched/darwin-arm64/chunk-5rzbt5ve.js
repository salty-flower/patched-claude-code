// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
var r=null;function Lri(e){r=e}async function Hri(){if(r===null)return;let e=await r();return Array.isArray(e)?e.filter((n)=>typeof n?.tabId==="number"&&typeof n?.url==="string"):void 0}
export{Lri,Hri};
