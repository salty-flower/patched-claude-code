// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{gcn}from"./chunk-tp1zt0km.js";var s=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-1j0tyz08.js"),_1s="FILE REFERENCES:";function y1s(){return s?.getTeleportCacheState().status==="active"}function a(n,t){return t.some((e)=>{if(e.type!=="attachment"||e.attachment.type!=="mcp_instructions_delta")return!1;let{addedNames:o,addedBlocks:i}=e.attachment,r=o?.indexOf(n)??-1;return r>=0&&i?.[r]?.includes(gcn)===!0})}function Oaa(n,t){try{let e=n.mcpInfo?.serverName;if(e!==void 0&&a(e,t.messages))return"in_note";if(y1s())return"relay_text_unread";if(t.sentToolDescription===void 0)return"unknown";let o=t.sentToolDescription(n.name);return o===void 0?"no_tool_text":o.includes(_1s)?"in_tool_text":"tool_text_without_hint"}catch{return"unknown"}}
export{_1s,y1s,Oaa};
