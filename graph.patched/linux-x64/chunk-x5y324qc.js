// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Re}from"./chunk-6n7yk222.js";import{et,Be,I,Il}from"./chunk-ce4ppmnp.js";import{a}from"./chunk-1bwwmttj.js";function o(){let e=Il()?.pewter_owl_model;if(typeof e==="string"&&e!=="")return e;return I("tengu_pewter_owl_model","")}function r(e){if(a.CLAUDE_CODE_PEWTER_OWL!==void 0)return a.CLAUDE_CODE_PEWTER_OWL;if(Re())return!1;let t=o();if(t!==""&&!Be(et()).includes(t))return!1;return I(`tengu_${e}`,!1)||Il()?.[e]===!0}function Ege(){if(a.CLAUDE_CODE_PEWTER_OWL_TOOL!==void 0)return a.CLAUDE_CODE_PEWTER_OWL_TOOL;return r("pewter_owl_tool")}function eTn(){return r("pewter_owl_brief")}
export{Ege,eTn};
