// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ce,xSt,z2o}from"./chunk-xzypj06m.js";import{c,pe}from"./chunk-dnq93t1z.js";import{i}from"./chunk-52pf9qag.js";import{a}from"./chunk-k4g6y57j.js";import{mV}from"./chunk-996thspe.js";import{sBt}from"./chunk-zak8j3he.js";function t(){let e=z2o(),o=e===void 0?sBt():void 0,[r,s]=e!==void 0?[Math.max(0,Date.now()-e),"session_switch"]:o!==void 0?[Math.max(0,Date.now()-o),"spawn_stamp"]:[ce()?void 0:Math.round(process.uptime()*1000),"process_start"];return{msSinceSessionStart:r,startAnchor:c(s),isRemoteSession:Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)}}function n(e){let o=xSt();if(o.has(e))return!1;return o.add(e),!0}function CCn(e,o){if(e===0||!n("tools_added"))return;i("tengu_chrome_tools_added",{...t(),toolCount:e,discoverySource:c(o)})}function ACn(e){if(!n("tool_attempted"))return;i("tengu_chrome_tool_attempted",{...t(),...e&&{messageClientPlatform:mV(e)}})}function VQo(e){if(!n("bridge_connected"))return;i("tengu_chrome_bridge_connected",{...t(),bridgeStatus:pe(e)})}function qQo(){if(!n("extension_connected"))return;i("tengu_chrome_extension_connected",t())}function KQo(e){i("tengu_chrome_tool_call_disconnected",{...t(),tokenAccountMismatch:e})}
export{CCn,ACn,VQo,qQo,KQo};
