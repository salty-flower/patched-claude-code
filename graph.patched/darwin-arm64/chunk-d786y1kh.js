// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{f}from"./chunk-tkh9f09d.js";import{Bo}from"./chunk-c8ryve6d.js";import{u,Or,C}from"./chunk-97je7cvf.js";var I2r="Remote Control is off, so this session can\u2019t be sent",M2r="/send-to-project needs Remote Control so a Claude Project can read this session.",D2r="Turn on Remote Control and send",o=f(()=>u({})),e=f(()=>Or("choice",[u({choice:C("turn_on")}),u({choice:C("no")})])),LUo=Bo({kind:"continue_in_projects_remote_control",payload:o,result:e,default:{choice:"no"},hideWhile:["panel","draft"]});
export{I2r,M2r,D2r,LUo};
