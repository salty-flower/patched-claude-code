// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import"./chunk-b7wdy41p.js";import"./chunk-918t5khf.js";import"./chunk-aywwjcwq.js";import"./chunk-f16c4jnr.js";import"./chunk-yffha6me.js";import"./chunk-fdatg9ax.js";import"./chunk-0mwsqxme.js";import"./chunk-gf0t3nd9.js";import{t}from"./chunk-gvn18sr5.js";import"./chunk-bpkzpttw.js";import"./chunk-0z5rjdcn.js";import"./chunk-ky8zgwyh.js";import"./chunk-z6am4wsr.js";import{c}from"./chunk-z9b8syjk.js";import"./chunk-4hsn0a4s.js";import"./chunk-0qcng0ek.js";import"./chunk-7n5tp35k.js";import"./chunk-wp37h1qm.js";import"./chunk-z6jq2hwa.js";import"./chunk-h3056rfm.js";import"./chunk-83whr1kq.js";import{R5}from"./chunk-zsjpdk00.js";import"./chunk-bgj0wzbq.js";import"./chunk-hpdq1e8e.js";var T={name:"MCP Task",type:"mcp_task",async kill(a,o,k,l,s){let e=o.get(a),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,p=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,d=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();let i=!1;if(o.update(a,(r)=>{if(r.notified||r.status!=="running")return r;return i=!0,{...r,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),i&&e?.type==="mcp_task")try{e.onWorkerWakeOutcome?.({kind:"stopped"})}catch(r){t("McpTask.kill: onWorkerWakeOutcome threw, the stop continues"),c(r)}(async()=>{await d,await R5(a,s,n,p)})().catch((r)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(r)}`))}};export{T as MCP_TASK};
