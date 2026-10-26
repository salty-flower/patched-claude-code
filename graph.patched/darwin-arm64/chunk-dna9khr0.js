// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{gK}from"./chunk-8zvzpa8h.js";import{cEe}from"./chunk-rfc74vey.js";import{Hl}from"./chunk-31gxg38t.js";function XIt(e,o,r){if(Hl(e.decisionReason,gK)!==void 0||cEe(r))return!0;if(o.requiresUserInteraction?.())return!0;return e.forcedByCaller===!0||e.personOnly===!0}
export{XIt};
