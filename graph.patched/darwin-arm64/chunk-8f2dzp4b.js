// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ge}from"./chunk-m8nhymg4.js";import{at,lt,b,jc}from"./chunk-e44qnbvj.js";import{i}from"./chunk-428zme0n.js";function n(t){let e=t?.pewter_owl_model;if(typeof e==="string"&&e!=="")return e;return b("tengu_pewter_owl_model","")}function o(t){if(i.CLAUDE_CODE_PEWTER_OWL!==void 0)return i.CLAUDE_CODE_PEWTER_OWL;if(ge())return!1;let e=jc(),r=n(e);if(r!==""&&!lt(at()).includes(r))return!1;return b(`tengu_${t}`,!1)||e?.[t]===!0}function jnt(){if(i.CLAUDE_CODE_PEWTER_OWL_TOOL!==void 0)return i.CLAUDE_CODE_PEWTER_OWL_TOOL;return o("pewter_owl_tool")}function HHs(){return o("pewter_owl_brief")}
export{jnt,HHs};
