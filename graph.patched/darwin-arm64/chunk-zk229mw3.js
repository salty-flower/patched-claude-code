// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{mTo}from"./chunk-ecyypctx.js";var UH={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},nw=Object.keys(UH);function i4(e){return e!==void 0&&nw.includes(e)}function Uje(e){return e.userOverride??e.agentDefinitionColor}function Bje(e){if(e==="general-purpose")return;let n=mTo().get(e);if(n&&nw.includes(n))return UH[n];return}function aIt(e,o){let n=mTo();if(!o){n.delete(e);return}if(nw.includes(o))n.set(e,o)}
export{UH,nw,i4,Uje,Bje,aIt};
