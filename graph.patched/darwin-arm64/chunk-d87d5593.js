// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{ke}from"./chunk-zhtwayh2.js";import{nt,Ue,I,Nl}from"./chunk-n495pc0t.js";import{a}from"./chunk-dq2s4wjn.js";function o(){let e=Nl()?.pewter_owl_model;if(typeof e==="string"&&e!=="")return e;return I("tengu_pewter_owl_model","")}function r(e){if(a.CLAUDE_CODE_PEWTER_OWL!==void 0)return a.CLAUDE_CODE_PEWTER_OWL;if(ke())return!1;let t=o();if(t!==""&&!Ue(nt()).includes(t))return!1;return I(`tengu_${e}`,!1)||Nl()?.[e]===!0}function _pe(){if(a.CLAUDE_CODE_PEWTER_OWL_TOOL!==void 0)return a.CLAUDE_CODE_PEWTER_OWL_TOOL;return r("pewter_owl_tool")}function tyn(){return r("pewter_owl_brief")}
export{_pe,tyn};
