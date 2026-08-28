// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
var tn="Edit",Xgt="/.claude/**",Jgt="~/.claude/**",c6t="File has not been read yet. Read it first before writing to it.",S8e="File is in a directory that is denied by your permission settings.",Phn="File is covered by a Read deny rule in your permission settings and cannot be edited.",Ohn="File is covered by a Read deny rule in your permission settings and cannot be written.",u6t="File content has changed since it was last read. This commonly happens when a linter or formatter run via Bash rewrites the file. Call Read on this file to refresh, then retry the edit.";class g7 extends Error{constructor(e){super(e);this.name="FileStateError"}}var er="Write";
export{tn,Xgt,Jgt,c6t,S8e,Phn,Ohn,u6t,g7,er};
