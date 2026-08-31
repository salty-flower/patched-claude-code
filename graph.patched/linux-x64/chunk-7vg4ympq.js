// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{YC}from"./chunk-1e5y3pjf.js";import{ed}from"./chunk-5x6q7pkz.js";import{_t}from"./chunk-b9f47e9z.js";var ti="Glob";function $yn(e){if(ed(e))return'Fast file pattern matching. Supports glob patterns like "**/*.js" or "src/**/*.ts". Returns matching file paths sorted by modification time.';return YC()==="default"?o:t}var t=`- Fast file pattern matching tool that works with any codebase size
- Supports glob patterns like "**/*.js" or "src/**/*.ts"
- Returns matching file paths sorted by modification time
- Use this tool when you need to find files by name patterns`,o=`${t}
- When you are doing an open ended search that may require multiple rounds of globbing and grepping, use the ${_t} tool instead (if available)`;var Fs="REPL";
export{ti,$yn,Fs};
