// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Os,x}from"./chunk-er6f56rj.js";import{Le}from"./chunk-g5e6pf8s.js";import{a}from"./chunk-1fpwxv0g.js";import{H}from"./chunk-zwbw6dvp.js";function zs(){let e=a.CLAUDE_CODE_HARBOR_KITE;if(e!==void 0)return Le(e);if(H()==="windows"&&!x("tengu_harbor_kite_win",!0))return!1;return x("tengu_harbor_kite",!0)}function Ste(e){if(e?.flagsSettled===!1&&Os("tengu_cuddly_willow",!0).source==="fallback")return!1;return x("tengu_cuddly_willow",!0)}var hDt="Cross-session messaging is not available in this session.";
export{zs,Ste,hDt};
