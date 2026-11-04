// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Ya,Ie}from"./chunk-0x9x817t.js";import{co}from"./chunk-vwrk0vjp.js";import{randomUUID as a}from"crypto";var u="repl-error-";function $2t(e,{clientsDrawCalls:t,shownOnCall:s,stoppedBy:o,withheldScriptToolUseId:r}){let n=`${u}${a()}`,i=t&&{visibleToRemoteClients:!0};return[{...Ya({content:[{type:"tool_use",id:n,name:co,input:{}}],isVirtual:!0}),...i,...s&&{scriptErrorCopy:!0}},{...Ie({content:[{type:"tool_result",tool_use_id:n,content:e,is_error:!0}],toolUseResult:{error:e,...o!==void 0&&{stoppedBy:o},...s&&{shownOnCall:!0}},isVirtual:!0}),turnCompanion:!0,...i,...t&&{remoteToolResult:{kind:"stored",text:e}},...r!==void 0&&{withheldScriptToolUseId:r}}]}
export{$2t};
