// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{my,j}from"./chunk-mp0bjfh5.js";j();function pN(r){if(typeof r==="string")return r;if(typeof r==="number")return String(r);if(!r)return"";if(Array.isArray(r))return r.map(pN).join("");if(my(r))return pN(r.props.children);return""}
export{pN};
