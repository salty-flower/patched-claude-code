// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Qvr}from"./chunk-vd0a9d2s.js";var AH={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},y_=Object.keys(AH);function kj(e){return e!==void 0&&y_.includes(e)}function FHe(e){return e.userOverride??e.agentDefinitionColor}function $He(e){if(e==="general-purpose")return;let n=Qvr().get(e);if(n&&y_.includes(n))return AH[n];return}function Xtt(e,o){let n=Qvr();if(!o){n.delete(e);return}if(y_.includes(o))n.set(e,o)}
export{AH,y_,kj,FHe,$He,Xtt};
