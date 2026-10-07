// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{nyr}from"./chunk-8mvda08c.js";var G0={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},qy=Object.keys(G0);function bB(e){return e!==void 0&&qy.includes(e)}function TOe(e){return e.userOverride??e.agentDefinitionColor}function ROe(e){if(e==="general-purpose")return;let n=nyr().get(e);if(n&&qy.includes(n))return G0[n];return}function WQe(e,o){let n=nyr();if(!o){n.delete(e);return}if(qy.includes(o))n.set(e,o)}
export{G0,qy,bB,TOe,ROe,WQe};
