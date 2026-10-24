// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{ke}from"./chunk-ersar6wn.js";import{nwe}from"./chunk-gp4v3dbd.js";import{i}from"./chunk-9a41hw1t.js";import{O}from"./chunk-dz0rx1wn.js";import{vd}from"./chunk-tzqhxyjb.js";import{homedir as o}from"os";var guo="CLAUDE_CODE_RELAUNCH_HOME_TRUST";async function hws(){let r=await vd(process.pid);if(r===void 0)return{};return{[guo]:`${process.pid}:${r}`}}async function yws(){let r=/^(\d{1,10}):(.{1,64})$/.exec(i.CLAUDE_CODE_RELAUNCH_HOME_TRUST??"");if(!r)return!1;let e=O()==="windows"?process.ppid:process.pid;if(Number(r[1])!==e)return!1;if(!nwe(ke(),o()))return!1;let t=await vd(e,{skipCache:!0});return t!==void 0&&t===r[2]}
export{guo,hws,yws};
