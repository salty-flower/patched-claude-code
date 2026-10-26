// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{J,$At,iss}from"./chunk-ersar6wn.js";import{c,ce}from"./chunk-ydpbzmt4.js";import{a}from"./chunk-wq923bwc.js";import{i}from"./chunk-9a41hw1t.js";import{vB}from"./chunk-31gxg38t.js";import{a3t}from"./chunk-wpfb8m65.js";function t(){let e=iss(),o=e===void 0?a3t():void 0,[r,s]=e!==void 0?[Math.max(0,Date.now()-e),"session_switch"]:o!==void 0?[Math.max(0,Date.now()-o),"spawn_stamp"]:[J()?void 0:Math.round(process.uptime()*1000),"process_start"];return{msSinceSessionStart:r,startAnchor:c(s),isRemoteSession:Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID)}}function n(e){let o=$At();if(o.has(e))return!1;return o.add(e),!0}function ABn(e,o){if(e===0||!n("tools_added"))return;a("tengu_chrome_tools_added",{...t(),toolCount:e,discoverySource:c(o)})}function RBn(e){if(!n("tool_attempted"))return;a("tengu_chrome_tool_attempted",{...t(),...e&&{messageClientPlatform:vB(e)}})}function kxs(e){if(!n("bridge_connected"))return;a("tengu_chrome_bridge_connected",{...t(),bridgeStatus:ce(e)})}function Cxs(){if(!n("extension_connected"))return;a("tengu_chrome_extension_connected",t())}function Txs(e){a("tengu_chrome_tool_call_disconnected",{...t(),tokenAccountMismatch:e})}
export{ABn,RBn,kxs,Cxs,Txs};
