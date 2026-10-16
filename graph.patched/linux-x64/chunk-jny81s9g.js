// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Te}from"./chunk-eqmywwjn.js";import{Uhe}from"./chunk-pzq28dp7.js";import{a}from"./chunk-xwn0mfnc.js";import{Kl}from"./chunk-v55shcxh.js";import{O}from"./chunk-29rv67gt.js";import{homedir as o}from"os";var Y3r="CLAUDE_CODE_RELAUNCH_HOME_TRUST";async function G7o(){let r=await Kl(process.pid);if(r===void 0)return{};return{[Y3r]:`${process.pid}:${r}`}}async function V7o(){let r=/^(\d{1,10}):(.{1,64})$/.exec(a.CLAUDE_CODE_RELAUNCH_HOME_TRUST??"");if(!r)return!1;let e=O()==="windows"?process.ppid:process.pid;if(Number(r[1])!==e)return!1;if(!Uhe(Te(),o()))return!1;let t=await Kl(e,{skipCache:!0});return t!==void 0&&t===r[2]}
export{Y3r,G7o,V7o};
