// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ee}from"./chunk-4bw62nzm.js";import{sfe}from"./chunk-ae84tp6z.js";import{a}from"./chunk-yvnhkg35.js";import{Ul}from"./chunk-3sda67c1.js";import{O}from"./chunk-xaes9ysz.js";import{homedir as o}from"os";var Kjr="CLAUDE_CODE_RELAUNCH_HOME_TRUST";async function hzo(){let r=await Ul(process.pid);if(r===void 0)return{};return{[Kjr]:`${process.pid}:${r}`}}async function yzo(){let r=/^(\d{1,10}):(.{1,64})$/.exec(a.CLAUDE_CODE_RELAUNCH_HOME_TRUST??"");if(!r)return!1;let e=O()==="windows"?process.ppid:process.pid;if(Number(r[1])!==e)return!1;if(!sfe(Ee(),o()))return!1;let t=await Ul(e,{skipCache:!0});return t!==void 0&&t===r[2]}
export{Kjr,hzo,yzo};
