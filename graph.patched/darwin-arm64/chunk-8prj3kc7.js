// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{fn}from"./chunk-tftvcgfc.js";import{Pe}from"./chunk-6qcfjjmw.js";import{Hpt,nB}from"./chunk-0rfh1g70.js";function Gdn(i){if(i.toolName===Pe){if(!i.ruleContent)return{prefix:"Any Bash command"};if(i.ruleContent.endsWith(":*")||i.ruleContent.endsWith(" *"))return{prefix:"Any Bash command starting with ",emphasis:i.ruleContent.slice(0,-2)};return{prefix:"The Bash command ",emphasis:i.ruleContent}}if(nB(i))return{prefix:`This rule ${Hpt(fn(i),i.toolName)}`};if(!i.ruleContent)return{prefix:"Any use of the ",emphasis:i.toolName,suffix:" tool"};return null}
export{Gdn};
