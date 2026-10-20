// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Z,dvt,m5o}from"./chunk-dxktn51d.js";import{c,de}from"./chunk-m3epja3j.js";import{i}from"./chunk-sr4gfmny.js";import{a}from"./chunk-cd1a8ced.js";import{MU}from"./chunk-rncrmfyt.js";import{yGt}from"./chunk-sx3g9k86.js";function t(){let e=m5o(),o=e===void 0?yGt():void 0,[r,s]=e!==void 0?[Math.max(0,Date.now()-e),"session_switch"]:o!==void 0?[Math.max(0,Date.now()-o),"spawn_stamp"]:[Z()?void 0:Math.round(process.uptime()*1000),"process_start"];return{msSinceSessionStart:r,startAnchor:c(s),isRemoteSession:Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)}}function n(e){let o=dvt();if(o.has(e))return!1;return o.add(e),!0}function CDn(e,o){if(e===0||!n("tools_added"))return;i("tengu_chrome_tools_added",{...t(),toolCount:e,discoverySource:c(o)})}function RDn(e){if(!n("tool_attempted"))return;i("tengu_chrome_tool_attempted",{...t(),...e&&{messageClientPlatform:MU(e)}})}function Xms(e){if(!n("bridge_connected"))return;i("tengu_chrome_bridge_connected",{...t(),bridgeStatus:de(e)})}function Jms(){if(!n("extension_connected"))return;i("tengu_chrome_extension_connected",t())}function Qms(e){i("tengu_chrome_tool_call_disconnected",{...t(),tokenAccountMismatch:e})}
export{CDn,RDn,Xms,Jms,Qms};
