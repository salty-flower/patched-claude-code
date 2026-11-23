// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Oy}from"./chunk-r3adsed5.js";import{ee,qL}from"./chunk-wswyff5p.js";import{ui}from"./chunk-5nn8kpgn.js";var n="Error POSTing to endpoint: MCP server not allowed";function PSa(t){if(!(t instanceof Error))return!1;let e=t.message.trimEnd();if(e===`Streamable HTTP error: ${n}`)return"code"in t&&t.code===403;if(e!==n)return!1;return"status"in t?t.status===403:("telemetryMessage"in t)&&typeof t.telemetryMessage==="string"&&t.telemetryMessage.startsWith("SdkHttpError ")}function $Be(){return(Oy()??[]).find((t)=>t.name===ui)}function c6s(){return qL()?ee().mcpEntryRowNotServed:null}function dEe(t){return c6s()===t}
export{PSa,$Be,c6s,dEe};
