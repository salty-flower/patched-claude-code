// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{xEr}from"./chunk-g79wjybr.js";var vH={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},h_=Object.keys(vH);function uj(e){return e!==void 0&&h_.includes(e)}function xHe(e){return e.userOverride??e.agentDefinitionColor}function PHe(e){if(e==="general-purpose")return;let n=xEr().get(e);if(n&&h_.includes(n))return vH[n];return}function jtt(e,o){let n=xEr();if(!o){n.delete(e);return}if(h_.includes(o))n.set(e,o)}
export{vH,h_,uj,xHe,PHe,jtt};
