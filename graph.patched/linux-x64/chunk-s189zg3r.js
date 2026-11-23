// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-q8mq1ny3.js";import{Ko}from"./chunk-5y050cdx.js";import{o,I,u,Ir,T}from"./chunk-xrhk683g.js";function U9t(e,t){return t?`Create the project \u201C${e}\u201D and send this message?`:`Send this message to ${e}?`}var B9t="Choose Send again to confirm.",s=p(()=>u({projectName:o(),creates:I(),message:o()})),n=p(()=>Ir("choice",[u({choice:T("send")}),u({choice:T("cancel")})])),g4a=Ko({kind:"continue_in_projects_message",payload:s,result:n,default:{choice:"cancel"},hideWhile:[]});
export{U9t,B9t,g4a};
