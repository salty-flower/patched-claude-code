// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-7ap5zh1s.js";import{qo}from"./chunk-v7hbfjc2.js";import{o,O,u,Or,T}from"./chunk-m507bxk0.js";function J8t(e,t){return t?`Create the project \u201C${e}\u201D and send this message?`:`Send this message to ${e}?`}var Q8t="Choose Send again to confirm.",s=p(()=>u({projectName:o(),creates:O(),message:o()})),n=p(()=>Or("choice",[u({choice:T("send")}),u({choice:T("cancel")})])),oqa=qo({kind:"continue_in_projects_message",payload:s,result:n,default:{choice:"cancel"},hideWhile:[]});
export{J8t,Q8t,oqa};
