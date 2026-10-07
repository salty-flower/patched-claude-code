// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ust,Bmo}from"./chunk-aywwjcwq.js";import{d,ue}from"./chunk-yffha6me.js";import{i}from"./chunk-s90w5q15.js";import{a}from"./chunk-869zfth6.js";import{wq}from"./chunk-9wqh5j7s.js";import{wCt}from"./chunk-jb27eay5.js";function t(){let e=Bmo(),o=e===void 0?wCt():void 0,[r,s]=e!==void 0?[Math.max(0,Date.now()-e),"session_switch"]:o!==void 0?[Math.max(0,Date.now()-o),"spawn_stamp"]:[Math.round(process.uptime()*1000),"process_start"];return{msSinceSessionStart:r,startAnchor:d(s),isRemoteSession:Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)}}function n(e){let o=Ust();if(o.has(e))return!1;return o.add(e),!0}function fsn(e,o){if(e===0||!n("tools_added"))return;i("tengu_chrome_tools_added",{...t(),toolCount:e,discoverySource:d(o)})}function msn(e){if(!n("tool_attempted"))return;i("tengu_chrome_tool_attempted",{...t(),...e&&{messageClientPlatform:wq(e)}})}function MRo(e){if(!n("bridge_connected"))return;i("tengu_chrome_bridge_connected",{...t(),bridgeStatus:ue(e)})}function HRo(){if(!n("extension_connected"))return;i("tengu_chrome_extension_connected",t())}function DRo(e){i("tengu_chrome_tool_call_disconnected",{...t(),tokenAccountMismatch:e})}
export{fsn,msn,MRo,HRo,DRo};
