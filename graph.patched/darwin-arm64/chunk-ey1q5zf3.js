// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{t}from"./chunk-5nh49npx.js";import{i}from"./chunk-n1cpnz94.js";var Y6r="[3P telemetry] OTEL diag error:";class J2o{error(r,...e){if(i.CLAUDE_CODE_OTEL_DIAG_STDERR)process.stderr.write(`${Y6r} ${r}
`);t(`${Y6r} ${r}`,{level:"error"})}warn(r,...e){t(`[3P telemetry] OTEL diag warn: ${r}`,{level:"warn"})}info(r,...e){return}debug(r,...e){return}verbose(r,...e){return}}
export{Y6r,J2o};
