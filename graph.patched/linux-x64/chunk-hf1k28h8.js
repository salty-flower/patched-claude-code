// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Zn}from"./chunk-h4js79s0.js";import{wX,UDe}from"./chunk-k0dvm1am.js";var e=/[\p{Cc}\p{Cf}\p{Cs}\p{Mn}\p{Me}\p{Default_Ignorable_Code_Point}\u2028\u2029]/u;function _pe(t,n){if(typeof t!=="string")return"";let r=Zn(t).replace(/\r$/,"");if(e.test(r))return"";if(n!==void 0)return r.trim()===""?"":UDe(r,n).trim();return r.trim()===""?"":wX(r).trim()}
export{_pe};
