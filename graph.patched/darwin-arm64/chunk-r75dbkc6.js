// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{K_n}from"./chunk-sgamszzq.js";var OT={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},Rm=Object.keys(OT);function rO(e){return e!==void 0&&Rm.includes(e)}function Bde(e){return e.userOverride??e.agentDefinitionColor}function jde(e){if(e==="general-purpose")return;let n=K_n().get(e);if(n&&Rm.includes(n))return OT[n];return}function uVe(e,o){let n=K_n();if(!o){n.delete(e);return}if(Rm.includes(o))n.set(e,o)}
export{OT,Rm,rO,Bde,jde,uVe};
