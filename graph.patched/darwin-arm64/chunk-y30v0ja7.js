// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Jk}from"./chunk-bsdtxcdc.js";import{td}from"./chunk-p33zayst.js";import{yt}from"./chunk-k8vt31j7.js";var ti="Glob";function O_n(e){if(td(e))return'Fast file pattern matching. Supports glob patterns like "**/*.js" or "src/**/*.ts". Returns matching file paths sorted by modification time.';return Jk()==="default"?o:t}var t=`- Fast file pattern matching tool that works with any codebase size
- Supports glob patterns like "**/*.js" or "src/**/*.ts"
- Returns matching file paths sorted by modification time
- Use this tool when you need to find files by name patterns`,o=`${t}
- When you are doing an open ended search that may require multiple rounds of globbing and grepping, use the ${yt} tool instead (if available)`;var $s="REPL";
export{ti,O_n,$s};
