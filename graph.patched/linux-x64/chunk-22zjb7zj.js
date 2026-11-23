// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{t}from"./chunk-ray9kegj.js";import{i}from"./chunk-5g5ea6r9.js";var _co="[3P telemetry] OTEL diag error:";class Rfs{error(r,...e){if(i.CLAUDE_CODE_OTEL_DIAG_STDERR)process.stderr.write(`${_co} ${r}
`);t(`${_co} ${r}`,{level:"error"})}warn(r,...e){t(`[3P telemetry] OTEL diag warn: ${r}`,{level:"warn"})}info(r,...e){return}debug(r,...e){return}verbose(r,...e){return}}
export{_co,Rfs};
