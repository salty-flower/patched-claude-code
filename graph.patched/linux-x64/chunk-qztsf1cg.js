// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{GPn,WPn}from"./chunk-bj7g1p32.js";import{i}from"./chunk-skkcgpsw.js";import{u,we}from"./chunk-vx4qhc14.js";import{a}from"./chunk-td8fcebs.js";import{E3t}from"./chunk-9p6z7v4m.js";function n(){let e=WPn(),o=e===void 0?E3t():void 0,[r,s]=e!==void 0?[Math.max(0,Date.now()-e),"session_switch"]:o!==void 0?[Math.max(0,Date.now()-o),"spawn_stamp"]:[Math.round(process.uptime()*1000),"process_start"];return{msSinceSessionStart:r,startAnchor:u(s),isRemoteSession:Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)}}function t(e){let o=GPn();if(o.has(e))return!1;return o.add(e),!0}function ilt(e,o){if(e===0||!t("tools_added"))return;i("tengu_chrome_tools_added",{...n(),toolCount:e,discoverySource:u(o)})}function jBn(e){if(!t("bridge_connected"))return;i("tengu_chrome_bridge_connected",{...n(),bridgeStatus:we(e)})}function GBn(){if(!t("extension_connected"))return;i("tengu_chrome_extension_connected",n())}function WBn(e){i("tengu_chrome_tool_call_disconnected",{...n(),tokenAccountMismatch:e})}
export{ilt,jBn,GBn,WBn};
