// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{VD}from"./chunk-m8nhymg4.js";import{qwa,xa}from"./chunk-3ht6cwn3.js";function xgr(t,r){xa("user_prompt",{prompt_length:String(r?.length??0),...qwa(r,t.origin),...t.attributes})}function Lmt(t,r){let o=VD();if(r===void 0){xgr(t,t.text);return}r({text:t.text,attributes:{...o&&{"prompt.id":o},...t.attributes},origin:t.origin})}
export{xgr,Lmt};
