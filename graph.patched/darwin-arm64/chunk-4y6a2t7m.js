// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{kn,k}from"./chunk-1901fdh6.js";import{Fe}from"./chunk-3mdayxq0.js";import{a}from"./chunk-k4g6y57j.js";import{mm}from"./chunk-5kvhbyg2.js";import{O}from"./chunk-c1a9wnpp.js";function zi(){if(mm().messagingBeyondOwnAgentsDisabled)return!1;let e=a.CLAUDE_CODE_HARBOR_KITE;if(e!==void 0)return Fe(e);if(O()==="windows"&&!k("tengu_harbor_kite_win",!0))return!1;return k("tengu_harbor_kite",!0)}function Zie(e){if(e?.flagsSettled===!1&&kn("tengu_cuddly_willow",!0).source==="fallback")return!1;return k("tengu_cuddly_willow",!0)}var Non="Cross-session messaging is not available in this session.";
export{zi,Zie,Non};
