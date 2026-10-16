// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{kn,k}from"./chunk-k16gymf7.js";import{$e}from"./chunk-rs6p8dg3.js";import{a}from"./chunk-xwn0mfnc.js";import{mm}from"./chunk-vnekd4yc.js";import{O}from"./chunk-29rv67gt.js";function Gi(){if(mm().messagingBeyondOwnAgentsDisabled)return!1;let e=a.CLAUDE_CODE_HARBOR_KITE;if(e!==void 0)return $e(e);if(O()==="windows"&&!k("tengu_harbor_kite_win",!0))return!1;return k("tengu_harbor_kite",!0)}function Kie(e){if(e?.flagsSettled===!1&&kn("tengu_cuddly_willow",!0).source==="fallback")return!1;return k("tengu_cuddly_willow",!0)}var von="Cross-session messaging is not available in this session.";
export{Gi,Kie,von};
