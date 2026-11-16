// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Cj}from"./chunk-5nn8kpgn.js";import{i}from"./chunk-5g5ea6r9.js";var ujs="no_reply_needed",sun=`__${ujs}`,l=`mcp__${Cj}${sun}`,fjs=["__message_coordinator","__message_thread"];function pjs(e){return!fjs.some((s)=>e.endsWith(s))}function jIe(){return new Set((i.CLAUDE_CODE_TERMINAL_MCP_TOOLS||"").split(",").map((e)=>e.trim()).filter(Boolean))}function g$r(){return jIe().values().some((e)=>e.endsWith(sun)&&e!==l)}function l2t(e){let s=jIe();if(s.size===0)return!1;let _=new Set;for(let r=e.length-1;r>=0;r--){let o=e[r];if(o.type==="user"){if(o.isMeta)continue;let t=o.message.content;if(!Array.isArray(t))return!1;let a=!1;for(let n of t)if(n.type==="tool_result"){if(a=!0,!n.is_error)_.add(n.tool_use_id)}if(!a)return!1}else if(o.type==="assistant"){for(let t of o.message.content)if(t.type==="tool_use"&&_.has(t.id)&&s.has(t.name))return!0}}return!1}
export{ujs,sun,fjs,pjs,jIe,g$r,l2t};
