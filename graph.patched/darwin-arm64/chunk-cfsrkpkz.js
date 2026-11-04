// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{f_}from"./chunk-qf6jrnqc.js";import{f}from"./chunk-tkh9f09d.js";import{Bo}from"./chunk-c8ryve6d.js";import{o,E,I,T,u,Or,B,C}from"./chunk-97je7cvf.js";var kGt=200;function vGt(e,t){return e===null?"no messages yet":`active ${f_(new Date(e),{now:t})}`}var n=f(()=>u({sends:B(["message","brief"]),newProjectName:o(),projects:T(u({id:o(),name:o(),lastMessageAtMs:E().nullable()})).max(kGt),truncated:I(),listError:o().optional()})),r=f(()=>Or("choice",[u({choice:C("new")}),u({choice:C("existing"),projectId:o()}),u({choice:C("cancel")})])),zUo=Bo({kind:"continue_in_projects_target",payload:n,result:r,default:{choice:"cancel"},hideWhile:[]});
export{kGt,vGt,zUo};
