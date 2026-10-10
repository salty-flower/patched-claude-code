// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Te,Gpt,DIo}from"./chunk-4bw62nzm.js";import{d,pe}from"./chunk-76anb6yt.js";import{i}from"./chunk-4nygtnjw.js";import{a}from"./chunk-yvnhkg35.js";import{sK}from"./chunk-sfn1dbxq.js";import{AMt}from"./chunk-y8g1gshe.js";function t(){let e=DIo(),o=e===void 0?AMt():void 0,[r,s]=e!==void 0?[Math.max(0,Date.now()-e),"session_switch"]:o!==void 0?[Math.max(0,Date.now()-o),"spawn_stamp"]:[Te()?void 0:Math.round(process.uptime()*1000),"process_start"];return{msSinceSessionStart:r,startAnchor:d(s),isRemoteSession:Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)}}function n(e){let o=Gpt();if(o.has(e))return!1;return o.add(e),!0}function lhn(e,o){if(e===0||!n("tools_added"))return;i("tengu_chrome_tools_added",{...t(),toolCount:e,discoverySource:d(o)})}function chn(e){if(!n("tool_attempted"))return;i("tengu_chrome_tool_attempted",{...t(),...e&&{messageClientPlatform:sK(e)}})}function EGo(e){if(!n("bridge_connected"))return;i("tengu_chrome_bridge_connected",{...t(),bridgeStatus:pe(e)})}function vGo(){if(!n("extension_connected"))return;i("tengu_chrome_extension_connected",t())}function kGo(e){i("tengu_chrome_tool_call_disconnected",{...t(),tokenAccountMismatch:e})}
export{lhn,chn,EGo,vGo,kGo};
