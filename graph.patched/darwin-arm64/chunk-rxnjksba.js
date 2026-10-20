// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Z,gEt,$5o}from"./chunk-kpqr86hf.js";import{c,de}from"./chunk-ny2cqbmq.js";import{i}from"./chunk-dj0gyv94.js";import{a}from"./chunk-h422gpw8.js";import{$U}from"./chunk-na9nw575.js";import{T2t}from"./chunk-yvscxre3.js";function t(){let e=$5o(),o=e===void 0?T2t():void 0,[r,s]=e!==void 0?[Math.max(0,Date.now()-e),"session_switch"]:o!==void 0?[Math.max(0,Date.now()-o),"spawn_stamp"]:[Z()?void 0:Math.round(process.uptime()*1000),"process_start"];return{msSinceSessionStart:r,startAnchor:c(s),isRemoteSession:Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)}}function n(e){let o=gEt();if(o.has(e))return!1;return o.add(e),!0}function VHn(e,o){if(e===0||!n("tools_added"))return;i("tengu_chrome_tools_added",{...t(),toolCount:e,discoverySource:c(o)})}function KHn(e){if(!n("tool_attempted"))return;i("tengu_chrome_tool_attempted",{...t(),...e&&{messageClientPlatform:$U(e)}})}function Dgs(e){if(!n("bridge_connected"))return;i("tengu_chrome_bridge_connected",{...t(),bridgeStatus:de(e)})}function Lgs(){if(!n("extension_connected"))return;i("tengu_chrome_extension_connected",t())}function Ngs(e){i("tengu_chrome_tool_call_disconnected",{...t(),tokenAccountMismatch:e})}
export{VHn,KHn,Dgs,Lgs,Ngs};
