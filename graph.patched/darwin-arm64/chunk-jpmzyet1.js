// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{yZt}from"./chunk-cet8na02.js";var vC={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},bf=Object.keys(vC);function E0(e){return e!==void 0&&bf.includes(e)}function Hse(e){return e.userOverride??e.agentDefinitionColor}function Ise(e){if(e==="general-purpose")return;let n=yZt().get(e);if(n&&bf.includes(n))return vC[n];return}function Z$e(e,o){let n=yZt();if(!o){n.delete(e);return}if(bf.includes(o))n.set(e,o)}
export{vC,bf,E0,Hse,Ise,Z$e};
