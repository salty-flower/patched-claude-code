// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{a8}from"./chunk-x9kh8z5w.js";import{mSe}from"./chunk-da62ka0z.js";import{jl}from"./chunk-na9nw575.js";function fTt(e,o,r){if(jl(e.decisionReason,a8)!==void 0||mSe(r))return!0;if(o.requiresUserInteraction?.())return!0;return e.forcedByCaller===!0||e.personOnly===!0}
export{fTt};
