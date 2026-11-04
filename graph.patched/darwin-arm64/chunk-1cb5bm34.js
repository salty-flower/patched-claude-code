// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{ye}from"./chunk-ecyypctx.js";import{it,et,k,oc}from"./chunk-axsjfnwn.js";import{i}from"./chunk-n1cpnz94.js";function n(t){let e=t?.pewter_owl_model;if(typeof e==="string"&&e!=="")return e;return k("tengu_pewter_owl_model","")}function o(t){if(i.CLAUDE_CODE_PEWTER_OWL!==void 0)return i.CLAUDE_CODE_PEWTER_OWL;if(ye())return!1;let e=oc(),r=n(e);if(r!==""&&!et(it()).includes(r))return!1;return k(`tengu_${t}`,!1)||e?.[t]===!0}function O8e(){if(i.CLAUDE_CODE_PEWTER_OWL_TOOL!==void 0)return i.CLAUDE_CODE_PEWTER_OWL_TOOL;return o("pewter_owl_tool")}function Aas(){return o("pewter_owl_brief")}
export{O8e,Aas};
