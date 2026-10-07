// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ve}from"./chunk-8mvda08c.js";import{rt,Be,k,Nc}from"./chunk-s46qgfx7.js";import{a}from"./chunk-j77txbjn.js";function o(){let e=Nc()?.pewter_owl_model;if(typeof e==="string"&&e!=="")return e;return k("tengu_pewter_owl_model","")}function r(e){if(a.CLAUDE_CODE_PEWTER_OWL!==void 0)return a.CLAUDE_CODE_PEWTER_OWL;if(ve())return!1;let t=o();if(t!==""&&!Be(rt()).includes(t))return!1;return k(`tengu_${e}`,!1)||Nc()?.[e]===!0}function fEe(){if(a.CLAUDE_CODE_PEWTER_OWL_TOOL!==void 0)return a.CLAUDE_CODE_PEWTER_OWL_TOOL;return r("pewter_owl_tool")}function I4r(){return r("pewter_owl_brief")}
export{fEe,I4r};
