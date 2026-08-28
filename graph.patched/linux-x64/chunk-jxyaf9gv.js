// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{HWt}from"./chunk-2vv5hpw3.js";var $k={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},Fd=Object.keys($k);function f1(e){return e!==void 0&&Fd.includes(e)}function iee(e){return e.userOverride??e.agentDefinitionColor}function see(e){if(e==="general-purpose")return;let n=HWt().get(e);if(n&&Fd.includes(n))return $k[n];return}function wqe(e,o){let n=HWt();if(!o){n.delete(e);return}if(Fd.includes(o))n.set(e,o)}
export{$k,Fd,f1,iee,see,wqe};
