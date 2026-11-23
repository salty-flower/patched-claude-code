// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{t}from"./chunk-bdfv2ky4.js";import{i}from"./chunk-428zme0n.js";var pco="[3P telemetry] OTEL diag error:";class hfs{error(r,...e){if(i.CLAUDE_CODE_OTEL_DIAG_STDERR)process.stderr.write(`${pco} ${r}
`);t(`${pco} ${r}`,{level:"error"})}warn(r,...e){t(`[3P telemetry] OTEL diag warn: ${r}`,{level:"warn"})}info(r,...e){return}debug(r,...e){return}verbose(r,...e){return}}
export{pco,hfs};
