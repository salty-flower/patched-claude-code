// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{ye}from"./chunk-ersar6wn.js";import{it,Xe,k,nd}from"./chunk-27xjmczp.js";import{i}from"./chunk-9a41hw1t.js";function o(){let e=nd()?.pewter_owl_model;if(typeof e==="string"&&e!=="")return e;return k("tengu_pewter_owl_model","")}function r(e){if(i.CLAUDE_CODE_PEWTER_OWL!==void 0)return i.CLAUDE_CODE_PEWTER_OWL;if(ye())return!1;let t=o();if(t!==""&&!Xe(it()).includes(t))return!1;return k(`tengu_${e}`,!1)||nd()?.[e]===!0}function cGe(){if(i.CLAUDE_CODE_PEWTER_OWL_TOOL!==void 0)return i.CLAUDE_CODE_PEWTER_OWL_TOOL;return r("pewter_owl_tool")}function LLo(){return r("pewter_owl_brief")}
export{cGe,LLo};
