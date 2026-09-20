// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{snr,inr}from"./chunk-txfrkyzp.js";import{i}from"./chunk-5a4y4a7y.js";import{c,he}from"./chunk-p9tbyvzw.js";import{a}from"./chunk-q2vrcqny.js";import{Ayn}from"./chunk-te6f9h8j.js";function n(){let e=inr(),o=e===void 0?Ayn():void 0,[r,s]=e!==void 0?[Math.max(0,Date.now()-e),"session_switch"]:o!==void 0?[Math.max(0,Date.now()-o),"spawn_stamp"]:[Math.round(process.uptime()*1000),"process_start"];return{msSinceSessionStart:r,startAnchor:c(s),isRemoteSession:Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)}}function t(e){let o=snr();if(o.has(e))return!1;return o.add(e),!0}function sTt(e,o){if(e===0||!t("tools_added"))return;i("tengu_chrome_tools_added",{...n(),toolCount:e,discoverySource:c(o)})}function xur(e){if(!t("bridge_connected"))return;i("tengu_chrome_bridge_connected",{...n(),bridgeStatus:he(e)})}function Iur(){if(!t("extension_connected"))return;i("tengu_chrome_extension_connected",n())}function Pur(e){i("tengu_chrome_tool_call_disconnected",{...n(),tokenAccountMismatch:e})}
export{sTt,xur,Iur,Pur};
