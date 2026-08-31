// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{o5t}from"./chunk-38213y7h.js";var jv={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},ef=Object.keys(jv);function FF(e){return e!==void 0&&ef.includes(e)}function Rne(e){return e.userOverride??e.agentDefinitionColor}function kne(e){if(e==="general-purpose")return;let n=o5t().get(e);if(n&&ef.includes(n))return jv[n];return}function x5e(e,o){let n=o5t();if(!o){n.delete(e);return}if(ef.includes(o))n.set(e,o)}
export{jv,ef,FF,Rne,kne,x5e};
