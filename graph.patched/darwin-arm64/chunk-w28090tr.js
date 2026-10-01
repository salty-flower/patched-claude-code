// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{ve}from"./chunk-a7cah040.js";import{_oe}from"./chunk-2j7zyd8v.js";import{a}from"./chunk-1fpwxv0g.js";import{H}from"./chunk-zwbw6dvp.js";import{oc}from"./chunk-jqre7qs5.js";import{homedir as o}from"os";var Zlr="CLAUDE_CODE_RELAUNCH_HOME_TRUST";async function doo(){let r=await oc(process.pid);if(r===void 0)return{};return{[Zlr]:`${process.pid}:${r}`}}async function uoo(){let r=/^(\d{1,10}):(.{1,64})$/.exec(a.CLAUDE_CODE_RELAUNCH_HOME_TRUST??"");if(!r)return!1;let e=H()==="windows"?process.ppid:process.pid;if(Number(r[1])!==e)return!1;if(!_oe(ve(),o()))return!1;let t=await oc(e,{skipCache:!0});return t!==void 0&&t===r[2]}
export{Zlr,doo,uoo};
