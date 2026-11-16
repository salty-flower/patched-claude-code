// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Qd}from"./chunk-x39hzzj2.js";import{_}from"./chunk-bdfv2ky4.js";import{Qt}from"./chunk-pj4gmx93.js";function wds(e){let r=e.args!==void 0?`, args: ${_(e.args)}`:"";return`${Qd}({scriptPath: '${e.scriptPath}', resumeFromRunId: '${e.workflowRunId}'${r}})`}function dgr(e){return e.scriptPath!==void 0&&e.workflowRunId!==void 0?`
<recovery>${Qt(`Its finished agent calls are saved. Only if the user asks you to resume it, call: ${wds(e)}`)}</recovery>`:""}
export{wds,dgr};
