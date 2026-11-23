// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Jdn}from"./chunk-f1d0bkme.js";var s=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-18f1mg01.js"),MFs="FILE REFERENCES:";function DFs(){return s?.getTeleportCacheState().status==="active"}function a(n,t){return t.some((e)=>{if(e.type!=="attachment"||e.attachment.type!=="mcp_instructions_delta")return!1;let{addedNames:o,addedBlocks:i}=e.attachment,r=o?.indexOf(n)??-1;return r>=0&&i?.[r]?.includes(Jdn)===!0})}function Dia(n,t){try{let e=n.mcpInfo?.serverName;if(e!==void 0&&a(e,t.messages))return"in_note";if(DFs())return"relay_text_unread";if(t.sentToolDescription===void 0)return"unknown";let o=t.sentToolDescription(n.name);return o===void 0?"no_tool_text":o.includes(MFs)?"in_tool_text":"tool_text_without_hint"}catch{return"unknown"}}
export{MFs,DFs,Dia};
