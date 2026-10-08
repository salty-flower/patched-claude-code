// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{ve}from"./chunk-g79wjybr.js";import{tt,Be,T,Jc}from"./chunk-cxjvwxsa.js";import{a}from"./chunk-rptge3r8.js";function o(){let e=Jc()?.pewter_owl_model;if(typeof e==="string"&&e!=="")return e;return T("tengu_pewter_owl_model","")}function r(e){if(a.CLAUDE_CODE_PEWTER_OWL!==void 0)return a.CLAUDE_CODE_PEWTER_OWL;if(ve())return!1;let t=o();if(t!==""&&!Be(tt()).includes(t))return!1;return T(`tengu_${e}`,!1)||Jc()?.[e]===!0}function ake(){if(a.CLAUDE_CODE_PEWTER_OWL_TOOL!==void 0)return a.CLAUDE_CODE_PEWTER_OWL_TOOL;return r("pewter_owl_tool")}function qQr(){return r("pewter_owl_brief")}
export{ake,qQr};
