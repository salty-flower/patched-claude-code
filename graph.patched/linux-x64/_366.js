// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Tbd as i}from"./_811.js";import{ncd as g}from"./_812.js";import{jhd as n,ohd as s}from"./_820.js";import{xxd as t}from"./_837.js";class a{error(r,...e){if(g.CLAUDE_CODE_OTEL_DIAG_STDERR)process.stderr.write(`${o} ${r}
`);n(`${o} ${r}`,{level:"error"})}warn(r,...e){n(`[3P telemetry] OTEL diag warn: ${r}`,{level:"warn"})}info(r,...e){return}debug(r,...e){return}verbose(r,...e){return}}var o="[3P telemetry] OTEL diag error:";var _=t(()=>{s();i()});
export{o as mM,a as nM,_ as oM};
