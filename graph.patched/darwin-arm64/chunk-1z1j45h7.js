// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{fPr}from"./chunk-4bw62nzm.js";var BM={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},B_=Object.keys(BM);function D2(e){return e!==void 0&&B_.includes(e)}function bLe(e){return e.userOverride??e.agentDefinitionColor}function wLe(e){if(e==="general-purpose")return;let n=fPr().get(e);if(n&&B_.includes(n))return BM[n];return}function Jot(e,o){let n=fPr();if(!o){n.delete(e);return}if(B_.includes(o))n.set(e,o)}
export{BM,B_,D2,bLe,wLe,Jot};
