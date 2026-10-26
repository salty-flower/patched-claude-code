// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{eg}from"./chunk-ersar6wn.js";import{Z,mj}from"./chunk-bxg8d6dd.js";import{Id}from"./chunk-hdf6qbgr.js";var n="Error POSTing to endpoint: MCP server not allowed";function JKs(t){if(!(t instanceof Error))return!1;let e=t.message.trimEnd();if(e===`Streamable HTTP error: ${n}`)return"code"in t&&t.code===403;if(e!==n)return!1;return"status"in t?t.status===403:("telemetryMessage"in t)&&typeof t.telemetryMessage==="string"&&t.telemetryMessage.startsWith("SdkHttpError ")}function Wun(){return(eg()??[]).find((t)=>t.name===Id)}function TFo(){return mj()?Z().mcpEntryRowNotServed:null}function HGe(t){return TFo()===t}
export{JKs,Wun,TFo,HGe};
