// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{T,Fr}from"./chunk-cxjvwxsa.js";import{a}from"./chunk-rptge3r8.js";function yH(){return T("tengu_lantern_prism",!1)||a.CLAUDE_CODE_LANTERN_PRISM}function J_(){return mJr()||Fr("tengu_spicy_blossom",!1)===!0}function mJr(){return Fr("tengu_encapsulated_pebble",!0)!==!1}function GVt(){return!T("tengu_sharded_snowflake",!1)}function lAn(){if(GVt())return{enabled:!0,text:"`claude plugin eval` is available in this session (generally available; no enablement setting is needed on any client, including Bedrock/Vertex/Foundry, LLM gateways, telemetry-disabled clients and CI runners)."};return{enabled:!1,text:'`claude plugin eval` is generally available but switched OFF for this session by a server-side kill switch: it exists but prints "currently unavailable" here. If the user asks about it, say that plainly rather than that it does not exist; there is no setting or variable that turns it back on, and `claude update` plus a fresh session picks the command up again once the switch is lifted.'}}
export{yH,J_,mJr,GVt,lAn};
