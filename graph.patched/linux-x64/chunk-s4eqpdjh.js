// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{De}from"./chunk-2vv5hpw3.js";import{st,Ye,x,uc}from"./chunk-ns0ekkj0.js";import{a}from"./chunk-g0kfvhx3.js";function o(){let e=uc()?.pewter_owl_model;if(typeof e==="string"&&e!=="")return e;return x("tengu_pewter_owl_model","")}function r(e){if(a.CLAUDE_CODE_PEWTER_OWL!==void 0)return a.CLAUDE_CODE_PEWTER_OWL;if(De())return!1;let t=o();if(t!==""&&!Ye(st()).includes(t))return!1;return x(`tengu_${e}`,!1)||uc()?.[e]===!0}function Dae(){if(a.CLAUDE_CODE_PEWTER_OWL_TOOL!==void 0)return a.CLAUDE_CODE_PEWTER_OWL_TOOL;return r("pewter_owl_tool")}function Xan(){return r("pewter_owl_brief")}
export{Dae,Xan};
