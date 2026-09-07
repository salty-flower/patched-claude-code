// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{a}from"./chunk-td8fcebs.js";import{ze}from"./chunk-33bqb969.js";function P_(t){return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(t??ze()).disableBundledSkills===!0}function bVt(t,e){return t.type==="prompt"&&t.source==="builtin"&&P_(e)}
export{P_,bVt};
