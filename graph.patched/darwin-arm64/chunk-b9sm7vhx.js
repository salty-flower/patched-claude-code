// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{f}from"./chunk-tkh9f09d.js";import{Bo}from"./chunk-c8ryve6d.js";import{Ly}from"./chunk-sz4d47fv.js";var t="Claude wants to send this session\u2019s work to a Claude Project",r=Bo({kind:"permission_continue_in_projects",payload:f(()=>Ly((e)=>typeof e==="object"&&e!==null&&("requestId"in e)&&("toolName"in e)&&("permissionResult"in e))),result:f(()=>Ly((e)=>typeof e==="object"&&e!==null&&("behavior"in e))),default:{behavior:"cancelled"}});export{t as CONTINUE_NOTIFICATION,r as projectContinuePermissionDialog};
