// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{f}from"./chunk-tkh9f09d.js";import{Bo}from"./chunk-c8ryve6d.js";import{o,I,u,Or,C}from"./chunk-97je7cvf.js";function NBt(e,t){return t?`Create the project \u201C${e}\u201D and send this message?`:`Send this message to ${e}?`}var FBt="Choose Send again to confirm.",s=f(()=>u({projectName:o(),creates:I(),message:o()})),n=f(()=>Or("choice",[u({choice:C("send")}),u({choice:C("cancel")})])),boa=Bo({kind:"continue_in_projects_message",payload:s,result:n,default:{choice:"cancel"},hideWhile:[]});
export{NBt,FBt,boa};
