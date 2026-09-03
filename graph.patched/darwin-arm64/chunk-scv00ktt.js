// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Y7t}from"./chunk-hdbxv3pp.js";var uA={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},sf=Object.keys(uA);function BH(e){return e!==void 0&&sf.includes(e)}function qre(e){return e.userOverride??e.agentDefinitionColor}function zre(e){if(e==="general-purpose")return;let n=Y7t().get(e);if(n&&sf.includes(n))return uA[n];return}function f7e(e,o){let n=Y7t();if(!o){n.delete(e);return}if(sf.includes(o))n.set(e,o)}
export{uA,sf,BH,qre,zre,f7e};
