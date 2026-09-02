// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{yxn,Sxn}from"./chunk-38213y7h.js";import{s}from"./chunk-qw5jhqey.js";import{c,ke}from"./chunk-9rhc0mtn.js";import{a}from"./chunk-w3k8bej2.js";import{Izt}from"./chunk-b8r6yeec.js";function n(){let e=Sxn(),o=e===void 0?Izt():void 0,[r,i]=e!==void 0?[Math.max(0,Date.now()-e),"session_switch"]:o!==void 0?[Math.max(0,Date.now()-o),"spawn_stamp"]:[Math.round(process.uptime()*1000),"process_start"];return{msSinceSessionStart:r,startAnchor:c(i),isRemoteSession:Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)}}function t(e){let o=yxn();if(o.has(e))return!1;return o.add(e),!0}function Yot(e,o){if(e===0||!t("tools_added"))return;s("tengu_chrome_tools_added",{...n(),toolCount:e,discoverySource:c(o)})}function F1n(e){if(!t("bridge_connected"))return;s("tengu_chrome_bridge_connected",{...n(),bridgeStatus:ke(e)})}function $1n(){if(!t("extension_connected"))return;s("tengu_chrome_extension_connected",n())}function U1n(e){s("tengu_chrome_tool_call_disconnected",{...n(),tokenAccountMismatch:e})}
export{Yot,F1n,$1n,U1n};
