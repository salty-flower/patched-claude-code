// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Te}from"./chunk-dxktn51d.js";import{t_e}from"./chunk-h9cj3xp8.js";import{a}from"./chunk-cd1a8ced.js";import{M}from"./chunk-tbekftmt.js";import{nd}from"./chunk-b7dsynzj.js";import{homedir as o}from"os";var MZr="CLAUDE_CODE_RELAUNCH_HOME_TRUST";async function nas(){let r=await nd(process.pid);if(r===void 0)return{};return{[MZr]:`${process.pid}:${r}`}}async function ras(){let r=/^(\d{1,10}):(.{1,64})$/.exec(a.CLAUDE_CODE_RELAUNCH_HOME_TRUST??"");if(!r)return!1;let e=M()==="windows"?process.ppid:process.pid;if(Number(r[1])!==e)return!1;if(!t_e(Te(),o()))return!1;let t=await nd(e,{skipCache:!0});return t!==void 0&&t===r[2]}
export{MZr,nas,ras};
