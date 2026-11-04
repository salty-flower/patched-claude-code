// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{qn}from"./chunk-zmmnrc9r.js";import{X5,_Re}from"./chunk-53x2yxpb.js";var e=/[\p{Cc}\p{Cf}\p{Cs}\p{Mn}\p{Me}\p{Default_Ignorable_Code_Point}\u2028\u2029]/u;function Cae(t,n){if(typeof t!=="string")return"";let r=qn(t).replace(/\r$/,"");if(e.test(r))return"";if(n!==void 0)return r.trim()===""?"":_Re(r,n).trim();return r.trim()===""?"":X5(r).trim()}
export{Cae};
