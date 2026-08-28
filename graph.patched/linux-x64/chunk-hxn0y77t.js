// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{V0}from"./chunk-ns0ekkj0.js";import{xu}from"./chunk-846tadzs.js";import{ft}from"./chunk-q5qa3gps.js";var Ps="REPL";var Xo="Glob";function Wdn(e){if(xu(e))return'Fast file pattern matching. Supports glob patterns like "**/*.js" or "src/**/*.ts". Returns matching file paths sorted by modification time.';return V0()==="default"?o:t}var t=`- Fast file pattern matching tool that works with any codebase size
- Supports glob patterns like "**/*.js" or "src/**/*.ts"
- Returns matching file paths sorted by modification time
- Use this tool when you need to find files by name patterns`,o=`${t}
- When you are doing an open ended search that may require multiple rounds of globbing and grepping, use the ${ft} tool instead (if available)`;
export{Ps,Xo,Wdn};
