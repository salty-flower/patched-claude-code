// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{CDn,vDn}from"./chunk-hdbxv3pp.js";import{s}from"./chunk-kzyd0fd4.js";import{u,He}from"./chunk-2avye5sw.js";import{a}from"./chunk-pv906ex9.js";import{_8t}from"./chunk-qfzsdjtj.js";function n(){let e=vDn(),o=e===void 0?_8t():void 0,[r,i]=e!==void 0?[Math.max(0,Date.now()-e),"session_switch"]:o!==void 0?[Math.max(0,Date.now()-o),"spawn_stamp"]:[Math.round(process.uptime()*1000),"process_start"];return{msSinceSessionStart:r,startAnchor:u(i),isRemoteSession:Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)}}function t(e){let o=CDn();if(o.has(e))return!1;return o.add(e),!0}function Tlt(e,o){if(e===0||!t("tools_added"))return;s("tengu_chrome_tools_added",{...n(),toolCount:e,discoverySource:u(o)})}function JUn(e){if(!t("bridge_connected"))return;s("tengu_chrome_bridge_connected",{...n(),bridgeStatus:He(e)})}function QUn(){if(!t("extension_connected"))return;s("tengu_chrome_extension_connected",n())}function ZUn(e){s("tengu_chrome_tool_call_disconnected",{...n(),tokenAccountMismatch:e})}
export{Tlt,JUn,QUn,ZUn};
