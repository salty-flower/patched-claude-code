// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{gn}from"./chunk-k61f6b0h.js";import{Re}from"./chunk-gfn3gxth.js";import{xkt,VB}from"./chunk-qc23p4d3.js";function uAn(i){if(i.toolName===Re){if(!i.ruleContent)return{prefix:"Any Bash command"};if(i.ruleContent.endsWith(":*")||i.ruleContent.endsWith(" *"))return{prefix:"Any Bash command starting with ",emphasis:i.ruleContent.slice(0,-2)};return{prefix:"The Bash command ",emphasis:i.ruleContent}}if(VB(i))return{prefix:`This rule ${xkt(gn(i),i.toolName)}`};if(!i.ruleContent)return{prefix:"Any use of the ",emphasis:i.toolName,suffix:" tool"};return null}
export{uAn};
