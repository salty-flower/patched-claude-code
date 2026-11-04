// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{yn,k}from"./chunk-axsjfnwn.js";import{De}from"./chunk-w5484khd.js";import{i}from"./chunk-n1cpnz94.js";import{P}from"./chunk-drmqng8t.js";import{dg}from"./chunk-35p1z6a0.js";function Ja(e="send"){if(e==="send"&&dg().messagingBeyondOwnAgentsDisabled)return!1;let r=i.CLAUDE_CODE_HARBOR_KITE;if(r!==void 0)return De(r);if(P()==="windows"&&!k("tengu_harbor_kite_win",!0))return!1;return k("tengu_harbor_kite",!0)}function Tce(e){if(e?.flagsSettled===!1&&yn("tengu_cuddly_willow",!0).source==="fallback")return!1;return k("tengu_cuddly_willow",!0)}var U0n="Cross-session messaging is not available in this session.";
export{Ja,Tce,U0n};
