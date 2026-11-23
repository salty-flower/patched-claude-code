// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{un,b}from"./chunk-e44qnbvj.js";import{Pe}from"./chunk-5p4f0tx0.js";import{i}from"./chunk-428zme0n.js";import{R}from"./chunk-shjgbbk7.js";import{W_}from"./chunk-2hbj888s.js";function fd(e="send"){if(e==="send"&&W_().messagingBeyondOwnAgentsDisabled)return!1;let r=i.CLAUDE_CODE_HARBOR_KITE;if(r!==void 0)return Pe(r);if(R()==="windows"&&!b("tengu_harbor_kite_win",!0))return!1;return b("tengu_harbor_kite",!0)}function e_e(e){if(e?.flagsSettled===!1&&un("tengu_cuddly_willow",!0).source==="fallback")return!1;return b("tengu_cuddly_willow",!0)}var c5n="Cross-session messaging is not available in this session.";
export{fd,e_e,c5n};
