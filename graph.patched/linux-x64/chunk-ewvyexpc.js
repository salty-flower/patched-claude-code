// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ge}from"./chunk-r3adsed5.js";import{at,lt,S,jc}from"./chunk-a5a37ds7.js";import{i}from"./chunk-5g5ea6r9.js";function n(t){let e=t?.pewter_owl_model;if(typeof e==="string"&&e!=="")return e;return S("tengu_pewter_owl_model","")}function o(t){if(i.CLAUDE_CODE_PEWTER_OWL!==void 0)return i.CLAUDE_CODE_PEWTER_OWL;if(ge())return!1;let e=jc(),r=n(e);if(r!==""&&!lt(at()).includes(r))return!1;return S(`tengu_${t}`,!1)||e?.[t]===!0}function Mnt(){if(i.CLAUDE_CODE_PEWTER_OWL_TOOL!==void 0)return i.CLAUDE_CODE_PEWTER_OWL_TOOL;return o("pewter_owl_tool")}function ZLs(){return o("pewter_owl_brief")}
export{Mnt,ZLs};
