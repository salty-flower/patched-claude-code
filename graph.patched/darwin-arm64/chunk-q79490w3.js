// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Sn,k}from"./chunk-bvn0epzr.js";import{$e}from"./chunk-bjnpzyk4.js";import{a}from"./chunk-h422gpw8.js";import{M}from"./chunk-x352w4g5.js";import{wu}from"./chunk-ts26kr2k.js";function aa(e="send"){if(e==="send"&&wu().messagingBeyondOwnAgentsDisabled)return!1;let r=a.CLAUDE_CODE_HARBOR_KITE;if(r!==void 0)return $e(r);if(M()==="windows"&&!k("tengu_harbor_kite_win",!0))return!1;return k("tengu_harbor_kite",!0)}function Pte(e){if(e?.flagsSettled===!1&&Sn("tengu_cuddly_willow",!0).source==="fallback")return!1;return k("tengu_cuddly_willow",!0)}var Xln="Cross-session messaging is not available in this session.";
export{aa,Pte,Xln};
