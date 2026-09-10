// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Xtn}from"./chunk-sgyvc67j.js";var Uv={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},vf=Object.keys(Uv);function N0(e){return e!==void 0&&vf.includes(e)}function gie(e){return e.userOverride??e.agentDefinitionColor}function hie(e){if(e==="general-purpose")return;let n=Xtn().get(e);if(n&&vf.includes(n))return Uv[n];return}function wBe(e,o){let n=Xtn();if(!o){n.delete(e);return}if(vf.includes(o))n.set(e,o)}
export{Uv,vf,N0,gie,hie,wBe};
