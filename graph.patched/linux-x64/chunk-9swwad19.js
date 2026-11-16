// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
function FY(t){let r=t.startsWith("/")?t.slice(1):t,s=r.search(/\s/);if(s===-1)return{name:r,args:""};return{name:r.slice(0,s),args:r.slice(s+1).trim()}}function U_(t){if(typeof t==="string")return t.trim().startsWith("/");if(!Array.isArray(t))return!1;let r=t.at(-1);return r?.type==="text"&&typeof r.text==="string"&&r.text.trim().startsWith("/")}
export{FY,U_};
