// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Kst,ygo}from"./chunk-8mvda08c.js";import{d,ue}from"./chunk-hdvxmrfb.js";import{i}from"./chunk-qbf9wv32.js";import{a}from"./chunk-j77txbjn.js";import{Pz}from"./chunk-y0b3kvx1.js";import{HTt}from"./chunk-fpm199ny.js";function t(){let e=ygo(),o=e===void 0?HTt():void 0,[r,s]=e!==void 0?[Math.max(0,Date.now()-e),"session_switch"]:o!==void 0?[Math.max(0,Date.now()-o),"spawn_stamp"]:[Math.round(process.uptime()*1000),"process_start"];return{msSinceSessionStart:r,startAnchor:d(s),isRemoteSession:Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)}}function n(e){let o=Kst();if(o.has(e))return!1;return o.add(e),!0}function Osn(e,o){if(e===0||!n("tools_added"))return;i("tengu_chrome_tools_added",{...t(),toolCount:e,discoverySource:d(o)})}function Hsn(e){if(!n("tool_attempted"))return;i("tengu_chrome_tool_attempted",{...t(),...e&&{messageClientPlatform:Pz(e)}})}function yxo(e){if(!n("bridge_connected"))return;i("tengu_chrome_bridge_connected",{...t(),bridgeStatus:ue(e)})}function _xo(){if(!n("extension_connected"))return;i("tengu_chrome_extension_connected",t())}function Sxo(e){i("tengu_chrome_tool_call_disconnected",{...t(),tokenAccountMismatch:e})}
export{Osn,Hsn,yxo,_xo,Sxo};
