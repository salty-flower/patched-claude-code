// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-7ap5zh1s.js";import{qo}from"./chunk-v7hbfjc2.js";import{u,Or,T}from"./chunk-m507bxk0.js";var qJt="Remote Control is off, so this session can\u2019t be sent",KJt="/send-to-project needs Remote Control so a Claude Project can read this session.",Qio="Turn on Remote Control and send",o=p(()=>u({})),e=p(()=>Or("choice",[u({choice:T("turn_on")}),u({choice:T("no")})])),aas=qo({kind:"continue_in_projects_remote_control",payload:o,result:e,default:{choice:"no"},hideWhile:["panel","draft"]});
export{qJt,KJt,Qio,aas};
