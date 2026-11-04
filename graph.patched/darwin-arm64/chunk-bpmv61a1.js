// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{ke}from"./chunk-ecyypctx.js";import{GRe}from"./chunk-qedh1vmm.js";import{i}from"./chunk-n1cpnz94.js";import{P}from"./chunk-drmqng8t.js";import{Bd}from"./chunk-t906yk9f.js";import{homedir as o}from"os";var njo="CLAUDE_CODE_RELAUNCH_HOME_TRUST";async function CJs(){let r=await Bd(process.pid);if(r===void 0)return{};return{[njo]:`${process.pid}:${r}`}}async function TJs(){let r=/^(\d{1,10}):(.{1,64})$/.exec(i.CLAUDE_CODE_RELAUNCH_HOME_TRUST??"");if(!r)return!1;let e=P()==="windows"?process.ppid:process.pid;if(Number(r[1])!==e)return!1;if(!GRe(ke(),o()))return!1;let t=await Bd(e,{skipCache:!0});return t!==void 0&&t===r[2]}
export{njo,CJs,TJs};
