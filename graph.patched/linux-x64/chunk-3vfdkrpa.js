// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-q8mq1ny3.js";import{Ko}from"./chunk-5y050cdx.js";import{o,I,u,Ir,T}from"./chunk-xrhk683g.js";var Iio="What should the message say?";function Oio(e){return e.creates?`Sent as you to a new Claude Project, \u201C${e.projectName}\u201D, after you confirm it.`:`Sent as you to ${e.projectName}, after you confirm it.`}var t=p(()=>u({projectName:o(),creates:I()})),c=p(()=>Ir("choice",[u({choice:T("send"),message:o()}),u({choice:T("cancel")})])),Vis=Ko({kind:"continue_in_projects_compose",payload:t,result:c,default:{choice:"cancel"},hideWhile:[]});
export{Iio,Oio,Vis};
