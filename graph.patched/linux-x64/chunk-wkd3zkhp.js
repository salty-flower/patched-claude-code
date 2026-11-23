// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Te}from"./chunk-r3adsed5.js";import{Fie}from"./chunk-e5p1adf2.js";import{i}from"./chunk-5g5ea6r9.js";import{R}from"./chunk-xezjycv8.js";import{Pc}from"./chunk-5z5dtbrz.js";import{homedir as o}from"os";var lds="CLAUDE_CODE_RELAUNCH_HOME_TRUST";async function kDi(){let r=await Pc(process.pid);if(r===void 0)return{};return{[lds]:`${process.pid}:${r}`}}async function EDi(){let r=/^(\d{1,10}):(.{1,64})$/.exec(i.CLAUDE_CODE_RELAUNCH_HOME_TRUST??"");if(!r)return!1;let e=R()==="windows"?process.ppid:process.pid;if(Number(r[1])!==e)return!1;if(!Fie(Te(),o()))return!1;let t=await Pc(e,{skipCache:!0});return t!==void 0&&t===r[2]}
export{lds,kDi,EDi};
