// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{My}from"./chunk-m8nhymg4.js";import{ee,XL}from"./chunk-m9wmj1k9.js";import{ui}from"./chunk-e9bx9b60.js";var n="Error POSTing to endpoint: MCP server not allowed";function Swa(t){if(!(t instanceof Error))return!1;let e=t.message.trimEnd();if(e===`Streamable HTTP error: ${n}`)return"code"in t&&t.code===403;if(e!==n)return!1;return"status"in t?t.status===403:("telemetryMessage"in t)&&typeof t.telemetryMessage==="string"&&t.telemetryMessage.startsWith("SdkHttpError ")}function jBe(){return(My()??[]).find((t)=>t.name===ui)}function Wqs(){return XL()?ee().mcpEntryRowNotServed:null}function _ke(t){return Wqs()===t}
export{Swa,jBe,Wqs,_ke};
