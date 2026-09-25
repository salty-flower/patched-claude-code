// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Ae}from"./chunk-s8xs8s76.js";import{it,je,x,uc}from"./chunk-twxt3h9y.js";import{a}from"./chunk-3a4khaz5.js";function o(){let e=uc()?.pewter_owl_model;if(typeof e==="string"&&e!=="")return e;return x("tengu_pewter_owl_model","")}function r(e){if(a.CLAUDE_CODE_PEWTER_OWL!==void 0)return a.CLAUDE_CODE_PEWTER_OWL;if(Ae())return!1;let t=o();if(t!==""&&!je(it()).includes(t))return!1;return x(`tengu_${e}`,!1)||uc()?.[e]===!0}function Rwe(){if(a.CLAUDE_CODE_PEWTER_OWL_TOOL!==void 0)return a.CLAUDE_CODE_PEWTER_OWL_TOOL;return r("pewter_owl_tool")}function Ryr(){return r("pewter_owl_brief")}
export{Rwe,Ryr};
