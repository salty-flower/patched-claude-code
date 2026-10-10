// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{$n,k}from"./chunk-bk5ct2gw.js";import{Ne}from"./chunk-fdxhcr6b.js";import{a}from"./chunk-yvnhkg35.js";import{Zh}from"./chunk-ezerben3.js";import{O}from"./chunk-xaes9ysz.js";function xi(){if(Zh().messagingBeyondOwnAgentsDisabled)return!1;let e=a.CLAUDE_CODE_HARBOR_KITE;if(e!==void 0)return Ne(e);if(O()==="windows"&&!k("tengu_harbor_kite_win",!0))return!1;return k("tengu_harbor_kite",!0)}function yde(e){if(e?.flagsSettled===!1&&$n("tengu_cuddly_willow",!0).source==="fallback")return!1;return k("tengu_cuddly_willow",!0)}var x7t="Cross-session messaging is not available in this session.";
export{xi,yde,x7t};
