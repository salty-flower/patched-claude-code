// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{t8t}from"./chunk-30zk17wm.js";var Bk={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},tp=Object.keys(Bk);function $F(e){return e!==void 0&&tp.includes(e)}function wne(e){return e.userOverride??e.agentDefinitionColor}function Ene(e){if(e==="general-purpose")return;let n=t8t().get(e);if(n&&tp.includes(n))return Bk[n];return}function m8e(e,o){let n=t8t();if(!o){n.delete(e);return}if(tp.includes(o))n.set(e,o)}
export{Bk,tp,$F,wne,Ene,m8e};
