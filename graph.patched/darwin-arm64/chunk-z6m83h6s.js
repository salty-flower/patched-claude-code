// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{gn}from"./chunk-cxygx051.js";import{Re}from"./chunk-42sx5v11.js";import{Dvt,YB}from"./chunk-05bmcw96.js";function UCn(i){if(i.toolName===Re){if(!i.ruleContent)return{prefix:"Any Bash command"};if(i.ruleContent.endsWith(":*")||i.ruleContent.endsWith(" *"))return{prefix:"Any Bash command starting with ",emphasis:i.ruleContent.slice(0,-2)};return{prefix:"The Bash command ",emphasis:i.ruleContent}}if(YB(i))return{prefix:`This rule ${Dvt(gn(i),i.toolName)}`};if(!i.ruleContent)return{prefix:"Any use of the ",emphasis:i.toolName,suffix:" tool"};return null}
export{UCn};
