// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ce,Ebt,Szo}from"./chunk-eqmywwjn.js";import{c,pe}from"./chunk-fr28a3he.js";import{i}from"./chunk-h723y8sa.js";import{a}from"./chunk-xwn0mfnc.js";import{sK}from"./chunk-38nf1dnm.js";import{XBt}from"./chunk-xyn7gydh.js";function t(){let e=Szo(),o=e===void 0?XBt():void 0,[r,s]=e!==void 0?[Math.max(0,Date.now()-e),"session_switch"]:o!==void 0?[Math.max(0,Date.now()-o),"spawn_stamp"]:[ce()?void 0:Math.round(process.uptime()*1000),"process_start"];return{msSinceSessionStart:r,startAnchor:c(s),isRemoteSession:Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)}}function n(e){let o=Ebt();if(o.has(e))return!1;return o.add(e),!0}function oTn(e,o){if(e===0||!n("tools_added"))return;i("tengu_chrome_tools_added",{...t(),toolCount:e,discoverySource:c(o)})}function sTn(e){if(!n("tool_attempted"))return;i("tengu_chrome_tool_attempted",{...t(),...e&&{messageClientPlatform:sK(e)}})}function i7o(e){if(!n("bridge_connected"))return;i("tengu_chrome_bridge_connected",{...t(),bridgeStatus:pe(e)})}function a7o(){if(!n("extension_connected"))return;i("tengu_chrome_extension_connected",t())}function l7o(e){i("tengu_chrome_tool_call_disconnected",{...t(),tokenAccountMismatch:e})}
export{oTn,sTn,i7o,a7o,l7o};
