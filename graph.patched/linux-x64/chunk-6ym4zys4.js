// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-q8mq1ny3.js";import{Ko}from"./chunk-5y050cdx.js";import{u,Ir,T}from"./chunk-xrhk683g.js";var NJt="Remote Control is off, so this session can\u2019t be sent",FJt="/send-to-project needs Remote Control so a Claude Project can read this session.",Mio="Turn on Remote Control and send",o=p(()=>u({})),e=p(()=>Ir("choice",[u({choice:T("turn_on")}),u({choice:T("no")})])),qis=Ko({kind:"continue_in_projects_remote_control",payload:o,result:e,default:{choice:"no"},hideWhile:["panel","draft"]});
export{NJt,FJt,Mio,qis};
