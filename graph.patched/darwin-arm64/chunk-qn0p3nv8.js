// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{L5t}from"./chunk-g4zaymy2.js";var $C={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},Bd=Object.keys($C);function pN(e){return e!==void 0&&Bd.includes(e)}function iee(e){return e.userOverride??e.agentDefinitionColor}function see(e){if(e==="general-purpose")return;let n=L5t().get(e);if(n&&Bd.includes(n))return $C[n];return}function pze(e,o){let n=L5t();if(!o){n.delete(e);return}if(Bd.includes(o))n.set(e,o)}
export{$C,Bd,pN,iee,see,pze};
