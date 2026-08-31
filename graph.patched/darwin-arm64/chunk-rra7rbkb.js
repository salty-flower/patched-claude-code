// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Le}from"./chunk-38213y7h.js";import{at,Ye,I,Fl}from"./chunk-bsdtxcdc.js";import{a}from"./chunk-w3k8bej2.js";function o(){let e=Fl()?.pewter_owl_model;if(typeof e==="string"&&e!=="")return e;return I("tengu_pewter_owl_model","")}function r(e){if(a.CLAUDE_CODE_PEWTER_OWL!==void 0)return a.CLAUDE_CODE_PEWTER_OWL;if(Le())return!1;let t=o();if(t!==""&&!Ye(at()).includes(t))return!1;return I(`tengu_${e}`,!1)||Fl()?.[e]===!0}function cue(){if(a.CLAUDE_CODE_PEWTER_OWL_TOOL!==void 0)return a.CLAUDE_CODE_PEWTER_OWL_TOOL;return r("pewter_owl_tool")}function dfn(){return r("pewter_owl_brief")}
export{cue,dfn};
