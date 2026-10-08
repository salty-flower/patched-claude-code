// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{ict,Rvo}from"./chunk-vd0a9d2s.js";import{d,ue}from"./chunk-eak61y8v.js";import{i}from"./chunk-ne43gjnt.js";import{a}from"./chunk-70qqbqq4.js";import{UV}from"./chunk-nwqfvmza.js";import{dIt}from"./chunk-xxchs9s7.js";function t(){let e=Rvo(),o=e===void 0?dIt():void 0,[r,s]=e!==void 0?[Math.max(0,Date.now()-e),"session_switch"]:o!==void 0?[Math.max(0,Date.now()-o),"spawn_stamp"]:[Math.round(process.uptime()*1000),"process_start"];return{msSinceSessionStart:r,startAnchor:d(s),isRemoteSession:Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)}}function n(e){let o=ict();if(o.has(e))return!1;return o.add(e),!0}function odn(e,o){if(e===0||!n("tools_added"))return;i("tengu_chrome_tools_added",{...t(),toolCount:e,discoverySource:d(o)})}function sdn(e){if(!n("tool_attempted"))return;i("tengu_chrome_tool_attempted",{...t(),...e&&{messageClientPlatform:UV(e)}})}function sNo(e){if(!n("bridge_connected"))return;i("tengu_chrome_bridge_connected",{...t(),bridgeStatus:ue(e)})}function iNo(){if(!n("extension_connected"))return;i("tengu_chrome_extension_connected",t())}function aNo(e){i("tengu_chrome_tool_call_disconnected",{...t(),tokenAccountMismatch:e})}
export{odn,sdn,sNo,iNo,aNo};
