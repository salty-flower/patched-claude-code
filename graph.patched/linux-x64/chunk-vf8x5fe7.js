// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
var r=null;function c1i(e){r=e}async function u1i(){if(r===null)return;let e=await r();return Array.isArray(e)?e.filter((n)=>typeof n?.tabId==="number"&&typeof n?.url==="string"):void 0}
export{c1i,u1i};
