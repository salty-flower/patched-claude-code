// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{i}from"./chunk-n1cpnz94.js";var fPn="__no_reply_needed";function Hre(){return new Set((i.CLAUDE_CODE_TERMINAL_MCP_TOOLS||"").split(",").map((e)=>e.trim()).filter(Boolean))}function Rhr(){return Hre().values().some((e)=>e.endsWith(fPn))}function VOt(e){let r=Hre();if(r.size===0)return!1;let l=new Set;for(let o=e.length-1;o>=0;o--){let s=e[o];if(s.type==="user"){if(s.isMeta)continue;let t=s.message.content;if(!Array.isArray(t))return!1;let a=!1;for(let n of t)if(n.type==="tool_result"){if(a=!0,!n.is_error)l.add(n.tool_use_id)}if(!a)return!1}else if(s.type==="assistant"){for(let t of s.message.content)if(t.type==="tool_use"&&l.has(t.id)&&r.has(t.name))return!0}}return!1}
export{fPn,Hre,Rhr,VOt};
