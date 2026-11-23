// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{GD}from"./chunk-r3adsed5.js";import{owa,xa}from"./chunk-zpnx6gcm.js";function igr(t,r){xa("user_prompt",{prompt_length:String(r?.length??0),...owa(r,t.origin),...t.attributes})}function xmt(t,r){let o=GD();if(r===void 0){igr(t,t.text);return}r({text:t.text,attributes:{...o&&{"prompt.id":o},...t.attributes},origin:t.origin})}
export{igr,xmt};
