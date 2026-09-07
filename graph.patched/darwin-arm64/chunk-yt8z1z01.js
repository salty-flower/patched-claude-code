// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{q8t}from"./chunk-zhtwayh2.js";var IE={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},Xp=Object.keys(IE);function yH(e){return e!==void 0&&Xp.includes(e)}function mre(e){return e.userOverride??e.agentDefinitionColor}function gre(e){if(e==="general-purpose")return;let n=q8t().get(e);if(n&&Xp.includes(n))return IE[n];return}function uNe(e,o){let n=q8t();if(!o){n.delete(e);return}if(Xp.includes(o))n.set(e,o)}
export{IE,Xp,yH,mre,gre,uNe};
