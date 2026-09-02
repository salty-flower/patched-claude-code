// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{a}from"./chunk-m9gbfvns.js";function drt(_,E){if(_==="ANTHROPIC_DEFAULT_SONNET_MODEL")a.set("CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT",E);else if(_==="ANTHROPIC_DEFAULT_OPUS_MODEL")a.set("CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT",E)}function EK(_){let E=_==="sonnet"?a.ANTHROPIC_DEFAULT_SONNET_MODEL:a.ANTHROPIC_DEFAULT_OPUS_MODEL,O=_==="sonnet"?a.CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT:a.CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT;return E!==void 0&&E===O}
export{drt,EK};
