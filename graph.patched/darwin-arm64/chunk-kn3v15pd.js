// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{MS}from"./chunk-1f8jcja6.js";import{p}from"./chunk-7ap5zh1s.js";import{qo}from"./chunk-v7hbfjc2.js";import{o,k,O,A,u,Or,B,T}from"./chunk-m507bxk0.js";var yDt=200;function ZJt(e,t){return e===null?"no messages yet":`active ${MS(new Date(e),{now:t})}`}var n=p(()=>u({sends:B(["message","brief"]),newProjectName:o(),projects:A(u({id:o(),name:o(),lastMessageAtMs:k().nullable()})).max(yDt),truncated:O(),listError:o().optional()})),r=p(()=>Or("choice",[u({choice:T("new")}),u({choice:T("existing"),projectId:o()}),u({choice:T("cancel")})])),has=qo({kind:"continue_in_projects_target",payload:n,result:r,default:{choice:"cancel"},hideWhile:[]});
export{yDt,ZJt,has};
