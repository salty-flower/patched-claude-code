// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{q8n}from"./chunk-en4g449d.js";import{x_}from"./chunk-kmgwwaz2.js";function xU(o,n){let e=x_(o,"fable_5_mitigations",n);if(e!==void 0)return e;if(o==="claude-mythos-5")return!0;return!1}function AIe(o){return!q8n()&&x_(o,"fable_5_1_prompt_bundle")===!0}function e1e(o){return o.startsWith("claude-fable-")}function rHs(o){return o.startsWith("claude-mythos-")}function y2n(o){return!1}
export{xU,AIe,e1e,rHs,y2n};
