// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{bn,k}from"./chunk-7p6jp6kj.js";import{Fe}from"./chunk-8nra9hkj.js";import{a}from"./chunk-cd1a8ced.js";import{M}from"./chunk-tbekftmt.js";import{Su}from"./chunk-k6w93v2g.js";function aa(e="send"){if(e==="send"&&Su().messagingBeyondOwnAgentsDisabled)return!1;let r=a.CLAUDE_CODE_HARBOR_KITE;if(r!==void 0)return Fe(r);if(M()==="windows"&&!k("tengu_harbor_kite_win",!0))return!1;return k("tengu_harbor_kite",!0)}function Ete(e){if(e?.flagsSettled===!1&&bn("tengu_cuddly_willow",!0).source==="fallback")return!1;return k("tengu_cuddly_willow",!0)}var Dln="Cross-session messaging is not available in this session.";
export{aa,Ete,Dln};
