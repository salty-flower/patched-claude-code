// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{vNn,RNn}from"./chunk-yhfssb7x.js";import{s}from"./chunk-v5cr82c7.js";import{u,ke}from"./chunk-g1553wr3.js";import{a}from"./chunk-g2ngvza5.js";import{LXt}from"./chunk-t25bg6a5.js";function n(){let e=RNn(),o=e===void 0?LXt():void 0,[r,i]=e!==void 0?[Math.max(0,Date.now()-e),"session_switch"]:o!==void 0?[Math.max(0,Date.now()-o),"spawn_stamp"]:[Math.round(process.uptime()*1000),"process_start"];return{msSinceSessionStart:r,startAnchor:u(i),isRemoteSession:Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)}}function t(e){let o=vNn();if(o.has(e))return!1;return o.add(e),!0}function gut(e,o){if(e===0||!t("tools_added"))return;s("tengu_chrome_tools_added",{...n(),toolCount:e,discoverySource:u(o)})}function yjn(e){if(!t("bridge_connected"))return;s("tengu_chrome_bridge_connected",{...n(),bridgeStatus:ke(e)})}function Sjn(){if(!t("extension_connected"))return;s("tengu_chrome_extension_connected",n())}function bjn(e){s("tengu_chrome_tool_call_disconnected",{...n(),tokenAccountMismatch:e})}
export{gut,yjn,Sjn,bjn};
