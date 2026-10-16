// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ce}from"./chunk-xzypj06m.js";import{Vhe}from"./chunk-r0a9v21k.js";import{a}from"./chunk-k4g6y57j.js";import{ql}from"./chunk-0dnnva21.js";import{O}from"./chunk-c1a9wnpp.js";import{homedir as o}from"os";var Y8r="CLAUDE_CODE_RELAUNCH_HOME_TRUST";async function GZo(){let r=await ql(process.pid);if(r===void 0)return{};return{[Y8r]:`${process.pid}:${r}`}}async function zZo(){let r=/^(\d{1,10}):(.{1,64})$/.exec(a.CLAUDE_CODE_RELAUNCH_HOME_TRUST??"");if(!r)return!1;let e=O()==="windows"?process.ppid:process.pid;if(Number(r[1])!==e)return!1;if(!Vhe(Ce(),o()))return!1;let t=await ql(e,{skipCache:!0});return t!==void 0&&t===r[2]}
export{Y8r,GZo,zZo};
