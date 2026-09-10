// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{a}from"./chunk-1bwwmttj.js";import{qe}from"./chunk-sp4f0zv3.js";function dh(t){return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(t??qe()).disableBundledSkills===!0}function B8t(t,e){return t.type==="prompt"&&t.source==="builtin"&&dh(e)}
export{dh,B8t};
