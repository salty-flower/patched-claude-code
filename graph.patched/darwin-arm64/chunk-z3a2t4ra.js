// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{a}from"./chunk-bn8q5mbz.js";import{Ve}from"./chunk-jz0pchtb.js";function Sy(t){return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(t??Ve()).disableBundledSkills===!0}function M$t(t,e){return t.type==="prompt"&&t.source==="builtin"&&Sy(e)}
export{Sy,M$t};
