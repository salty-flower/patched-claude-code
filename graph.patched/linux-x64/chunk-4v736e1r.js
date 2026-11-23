// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Zd}from"./chunk-27acghp6.js";import{_}from"./chunk-ray9kegj.js";import{tn}from"./chunk-nd02r7dv.js";function Kls(e){let r=e.args!==void 0?`, args: ${_(e.args)}`:"";return`${Zd}({scriptPath: '${e.scriptPath}', resumeFromRunId: '${e.workflowRunId}'${r}})`}function $hr(e){return e.scriptPath!==void 0&&e.workflowRunId!==void 0?`
<recovery>${tn(`Its finished agent calls are saved. Only if the user asks you to resume it, call: ${Kls(e)}`)}</recovery>`:""}
export{Kls,$hr};
