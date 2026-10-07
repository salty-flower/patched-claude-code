// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ve}from"./chunk-aywwjcwq.js";import{Jle}from"./chunk-gf0t3nd9.js";import{a}from"./chunk-869zfth6.js";import{O}from"./chunk-z9b8syjk.js";import{fl}from"./chunk-7ha2yydy.js";import{homedir as o}from"os";var Fxr="CLAUDE_CODE_RELAUNCH_HOME_TRUST";async function axo(){let r=await fl(process.pid);if(r===void 0)return{};return{[Fxr]:`${process.pid}:${r}`}}async function lxo(){let r=/^(\d{1,10}):(.{1,64})$/.exec(a.CLAUDE_CODE_RELAUNCH_HOME_TRUST??"");if(!r)return!1;let e=O()==="windows"?process.ppid:process.pid;if(Number(r[1])!==e)return!1;if(!Jle(ve(),o()))return!1;let t=await fl(e,{skipCache:!0});return t!==void 0&&t===r[2]}
export{Fxr,axo,lxo};
