// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{f}from"./chunk-tkh9f09d.js";import{Bo}from"./chunk-c8ryve6d.js";import{o,I,u,Or,C}from"./chunk-97je7cvf.js";var P2r="What should the message say?";function O2r(e){return e.creates?`Sent as you to a new Claude Project, \u201C${e.projectName}\u201D, after you confirm it.`:`Sent as you to ${e.projectName}, after you confirm it.`}var t=f(()=>u({projectName:o(),creates:I()})),c=f(()=>Or("choice",[u({choice:C("send"),message:o()}),u({choice:C("cancel")})])),DUo=Bo({kind:"continue_in_projects_compose",payload:t,result:c,default:{choice:"cancel"},hideWhile:[]});
export{P2r,O2r,DUo};
