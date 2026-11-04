// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{oy,j}from"./chunk-rt5zqm44.js";j();function PO(r){if(typeof r==="string")return r;if(typeof r==="number")return String(r);if(!r)return"";if(Array.isArray(r))return r.map(PO).join("");if(oy(r))return PO(r.props.children);return""}
export{PO};
