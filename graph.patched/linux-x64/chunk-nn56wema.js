// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Ib}from"./chunk-hzf7t49x.js";import{p}from"./chunk-q8mq1ny3.js";import{Ko}from"./chunk-5y050cdx.js";import{o,E,I,C,u,Ir,B,T}from"./chunk-xrhk683g.js";var mDt=200;function WJt(e,t){return e===null?"no messages yet":`active ${Ib(new Date(e),{now:t})}`}var n=p(()=>u({sends:B(["message","brief"]),newProjectName:o(),projects:C(u({id:o(),name:o(),lastMessageAtMs:E().nullable()})).max(mDt),truncated:I(),listError:o().optional()})),r=p(()=>Ir("choice",[u({choice:T("new")}),u({choice:T("existing"),projectId:o()}),u({choice:T("cancel")})])),tas=Ko({kind:"continue_in_projects_target",payload:n,result:r,default:{choice:"cancel"},hideWhile:[]});
export{mDt,WJt,tas};
