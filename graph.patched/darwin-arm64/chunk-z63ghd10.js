// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-7ap5zh1s.js";import{qo}from"./chunk-v7hbfjc2.js";import{o,O,u,Or,T}from"./chunk-m507bxk0.js";var Xio="What should the message say?";function Jio(e){return e.creates?`Sent as you to a new Claude Project, \u201C${e.projectName}\u201D, after you confirm it.`:`Sent as you to ${e.projectName}, after you confirm it.`}var t=p(()=>u({projectName:o(),creates:O()})),c=p(()=>Or("choice",[u({choice:T("send"),message:o()}),u({choice:T("cancel")})])),ias=qo({kind:"continue_in_projects_compose",payload:t,result:c,default:{choice:"cancel"},hideWhile:[]});
export{Xio,Jio,ias};
