// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ee}from"./chunk-8mvda08c.js";import{rce}from"./chunk-5qeme8w3.js";import{a}from"./chunk-j77txbjn.js";import{O}from"./chunk-qfs4y3ww.js";import{ml}from"./chunk-9k1s2d1q.js";import{homedir as o}from"os";var fPr="CLAUDE_CODE_RELAUNCH_HOME_TRUST";async function zxo(){let r=await ml(process.pid);if(r===void 0)return{};return{[fPr]:`${process.pid}:${r}`}}async function Vxo(){let r=/^(\d{1,10}):(.{1,64})$/.exec(a.CLAUDE_CODE_RELAUNCH_HOME_TRUST??"");if(!r)return!1;let e=O()==="windows"?process.ppid:process.pid;if(Number(r[1])!==e)return!1;if(!rce(Ee(),o()))return!1;let t=await ml(e,{skipCache:!0});return t!==void 0&&t===r[2]}
export{fPr,zxo,Vxo};
