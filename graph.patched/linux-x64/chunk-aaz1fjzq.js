// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{un,S}from"./chunk-a5a37ds7.js";import{Pe}from"./chunk-732yb76j.js";import{i}from"./chunk-5g5ea6r9.js";import{R}from"./chunk-xezjycv8.js";import{G_}from"./chunk-dk7m8jrw.js";function fd(e="send"){if(e==="send"&&G_().messagingBeyondOwnAgentsDisabled)return!1;let r=i.CLAUDE_CODE_HARBOR_KITE;if(r!==void 0)return Pe(r);if(R()==="windows"&&!S("tengu_harbor_kite_win",!0))return!1;return S("tengu_harbor_kite",!0)}function Vge(e){if(e?.flagsSettled===!1&&un("tengu_cuddly_willow",!0).source==="fallback")return!1;return S("tengu_cuddly_willow",!0)}var j3n="Cross-session messaging is not available in this session.";
export{fd,Vge,j3n};
