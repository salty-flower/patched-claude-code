// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{TOn,EOn}from"./chunk-zhtwayh2.js";import{i}from"./chunk-vtd04czk.js";import{u,Te}from"./chunk-gnrvsty9.js";import{a}from"./chunk-dq2s4wjn.js";import{X5t}from"./chunk-0masdjfa.js";function n(){let e=EOn(),o=e===void 0?X5t():void 0,[r,s]=e!==void 0?[Math.max(0,Date.now()-e),"session_switch"]:o!==void 0?[Math.max(0,Date.now()-o),"spawn_stamp"]:[Math.round(process.uptime()*1000),"process_start"];return{msSinceSessionStart:r,startAnchor:u(s),isRemoteSession:Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)}}function t(e){let o=TOn();if(o.has(e))return!1;return o.add(e),!0}function Tlt(e,o){if(e===0||!t("tools_added"))return;i("tengu_chrome_tools_added",{...n(),toolCount:e,discoverySource:u(o)})}function SUn(e){if(!t("bridge_connected"))return;i("tengu_chrome_bridge_connected",{...n(),bridgeStatus:Te(e)})}function bUn(){if(!t("extension_connected"))return;i("tengu_chrome_extension_connected",n())}function wUn(e){i("tengu_chrome_tool_call_disconnected",{...n(),tokenAccountMismatch:e})}
export{Tlt,SUn,bUn,wUn};
