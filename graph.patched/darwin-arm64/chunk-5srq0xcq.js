// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{w1r}from"./chunk-xzypj06m.js";var lL={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},DS=Object.keys(lL);function fG(e){return e!==void 0&&DS.includes(e)}function UUe(e){return e.userOverride??e.agentDefinitionColor}function BUe(e){if(e==="general-purpose")return;let n=w1r().get(e);if(n&&DS.includes(n))return lL[n];return}function cut(e,o){let n=w1r();if(!o){n.delete(e);return}if(DS.includes(o))n.set(e,o)}
export{lL,DS,fG,UUe,BUe,cut};
