// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Ee}from"./chunk-g79wjybr.js";import{Dde}from"./chunk-gwj7v27h.js";import{a}from"./chunk-rptge3r8.js";import{O}from"./chunk-3s94kw4m.js";import{Tl}from"./chunk-9f88agae.js";import{homedir as o}from"os";var lLr="CLAUDE_CODE_RELAUNCH_HOME_TRUST";async function QLo(){let r=await Tl(process.pid);if(r===void 0)return{};return{[lLr]:`${process.pid}:${r}`}}async function ZLo(){let r=/^(\d{1,10}):(.{1,64})$/.exec(a.CLAUDE_CODE_RELAUNCH_HOME_TRUST??"");if(!r)return!1;let e=O()==="windows"?process.ppid:process.pid;if(Number(r[1])!==e)return!1;if(!Dde(Ee(),o()))return!1;let t=await Tl(e,{skipCache:!0});return t!==void 0&&t===r[2]}
export{lLr,QLo,ZLo};
