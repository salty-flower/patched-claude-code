// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{ve}from"./chunk-vd0a9d2s.js";import{Bde}from"./chunk-9exgg8sx.js";import{a}from"./chunk-70qqbqq4.js";import{O}from"./chunk-tdmgys2e.js";import{Al}from"./chunk-yxxcd79r.js";import{homedir as o}from"os";var LLr="CLAUDE_CODE_RELAUNCH_HOME_TRUST";async function LNo(){let r=await Al(process.pid);if(r===void 0)return{};return{[LLr]:`${process.pid}:${r}`}}async function NNo(){let r=/^(\d{1,10}):(.{1,64})$/.exec(a.CLAUDE_CODE_RELAUNCH_HOME_TRUST??"");if(!r)return!1;let e=O()==="windows"?process.ppid:process.pid;if(Number(r[1])!==e)return!1;if(!Bde(ve(),o()))return!1;let t=await Al(e,{skipCache:!0});return t!==void 0&&t===r[2]}
export{LLr,LNo,NNo};
