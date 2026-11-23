// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{P2}from"./chunk-e9bx9b60.js";import{i}from"./chunk-428zme0n.js";var y2s="no_reply_needed",hun=`__${y2s}`,l=`mcp__${P2}${hun}`,S2s=["__message_coordinator","__message_thread"];function b2s(e){return!S2s.some((s)=>e.endsWith(s))}function GOe(){return new Set((i.CLAUDE_CODE_TERMINAL_MCP_TOOLS||"").split(",").map((e)=>e.trim()).filter(Boolean))}function M1r(){return GOe().values().some((e)=>e.endsWith(hun)&&e!==l)}function aWt(e){let s=GOe();if(s.size===0)return!1;let _=new Set;for(let r=e.length-1;r>=0;r--){let o=e[r];if(o.type==="user"){if(o.isMeta)continue;let t=o.message.content;if(!Array.isArray(t))return!1;let a=!1;for(let n of t)if(n.type==="tool_result"){if(a=!0,!n.is_error)_.add(n.tool_use_id)}if(!a)return!1}else if(o.type==="assistant"){for(let t of o.message.content)if(t.type==="tool_use"&&_.has(t.id)&&s.has(t.name))return!0}}return!1}
export{y2s,hun,S2s,b2s,GOe,M1r,aWt};
