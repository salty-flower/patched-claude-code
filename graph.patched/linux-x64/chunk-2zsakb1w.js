// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Ha,Oe}from"./chunk-zaxe68t4.js";import{Ao}from"./chunk-0hwrtpff.js";import{randomUUID as a}from"crypto";var u="repl-error-";function ZXt(e,{clientsDrawCalls:t,shownOnCall:s,stoppedBy:o,withheldScriptToolUseId:r}){let n=`${u}${a()}`,i=t&&{visibleToRemoteClients:!0};return[{...Ha({content:[{type:"tool_use",id:n,name:Ao,input:{}}],isVirtual:!0}),...i,...s&&{scriptErrorCopy:!0}},{...Oe({content:[{type:"tool_result",tool_use_id:n,content:e,is_error:!0}],toolUseResult:{error:e,...o!==void 0&&{stoppedBy:o},...s&&{shownOnCall:!0}},isVirtual:!0}),turnCompanion:!0,...i,...t&&{remoteToolResult:{kind:"stored",text:e}},...r!==void 0&&{withheldScriptToolUseId:r}}]}
export{ZXt};
