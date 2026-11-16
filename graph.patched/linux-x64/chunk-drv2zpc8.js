// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-q8mq1ny3.js";import{Ko}from"./chunk-5y050cdx.js";import{Zy}from"./chunk-a82ctk1k.js";var t="Claude wants to send this session\u2019s work to a Claude Project",r=Ko({kind:"permission_continue_in_projects",payload:p(()=>Zy((e)=>typeof e==="object"&&e!==null&&("requestId"in e)&&("toolName"in e)&&("permissionResult"in e))),result:p(()=>Zy((e)=>typeof e==="object"&&e!==null&&("behavior"in e))),default:{behavior:"cancelled"}});export{t as CONTINUE_NOTIFICATION,r as projectContinuePermissionDialog};
