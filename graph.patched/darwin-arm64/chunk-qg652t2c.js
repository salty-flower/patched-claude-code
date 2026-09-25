// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{OGn}from"./chunk-s8xs8s76.js";var cP={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},Xg=Object.keys(cP);function oN(e){return e!==void 0&&Xg.includes(e)}function zwe(e){return e.userOverride??e.agentDefinitionColor}function Vwe(e){if(e==="general-purpose")return;let n=OGn().get(e);if(n&&Xg.includes(n))return cP[n];return}function eze(e,o){let n=OGn();if(!o){n.delete(e);return}if(Xg.includes(o))n.set(e,o)}
export{cP,Xg,oN,zwe,Vwe,eze};
