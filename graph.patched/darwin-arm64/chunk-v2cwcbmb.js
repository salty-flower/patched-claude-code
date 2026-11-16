// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Te}from"./chunk-m8nhymg4.js";import{Vie}from"./chunk-0sn0736b.js";import{i}from"./chunk-428zme0n.js";import{R}from"./chunk-shjgbbk7.js";import{Pc}from"./chunk-29cd2nzs.js";import{homedir as o}from"os";var Lds="CLAUDE_CODE_RELAUNCH_HOME_TRUST";async function QDi(){let r=await Pc(process.pid);if(r===void 0)return{};return{[Lds]:`${process.pid}:${r}`}}async function ZDi(){let r=/^(\d{1,10}):(.{1,64})$/.exec(i.CLAUDE_CODE_RELAUNCH_HOME_TRUST??"");if(!r)return!1;let e=R()==="windows"?process.ppid:process.pid;if(Number(r[1])!==e)return!1;if(!Vie(Te(),o()))return!1;let t=await Pc(e,{skipCache:!0});return t!==void 0&&t===r[2]}
export{Lds,QDi,ZDi};
