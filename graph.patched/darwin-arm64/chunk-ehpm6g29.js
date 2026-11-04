// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{rb}from"./chunk-ecyypctx.js";import{te,XM}from"./chunk-6hd729pr.js";import{ca}from"./chunk-pbhb4gc5.js";var n="Error POSTing to endpoint: MCP server not allowed";function WDi(t){if(!(t instanceof Error))return!1;let e=t.message.trimEnd();if(e===`Streamable HTTP error: ${n}`)return"code"in t&&t.code===403;if(e!==n)return!1;return"status"in t?t.status===403:("telemetryMessage"in t)&&typeof t.telemetryMessage==="string"&&t.telemetryMessage.startsWith("SdkHttpError ")}function kDe(){return(rb()??[]).find((t)=>t.name===ca)}function hgs(){return XM()?te().mcpEntryRowNotServed:null}function kCe(t){return hgs()===t}
export{WDi,kDe,hgs,kCe};
