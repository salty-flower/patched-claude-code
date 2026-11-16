// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Zn}from"./chunk-b5xhmzas.js";import{PX,WDe}from"./chunk-jwn3rcdm.js";var e=/[\p{Cc}\p{Cf}\p{Cs}\p{Mn}\p{Me}\p{Default_Ignorable_Code_Point}\u2028\u2029]/u;function kpe(t,n){if(typeof t!=="string")return"";let r=Zn(t).replace(/\r$/,"");if(e.test(r))return"";if(n!==void 0)return r.trim()===""?"":WDe(r,n).trim();return r.trim()===""?"":PX(r).trim()}
export{kpe};
