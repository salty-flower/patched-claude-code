// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import"./chunk-dn762950.js";import"./chunk-j27d47mr.js";import"./chunk-ctt36bn8.js";import"./chunk-fcerdfs3.js";import"./chunk-wkmq9ht0.js";import"./chunk-m1rt7wpr.js";import"./chunk-jtpfgrzr.js";import"./chunk-xgw72tt1.js";import{t}from"./chunk-bd805sh6.js";import"./chunk-6kc68p18.js";import"./chunk-24agvrd9.js";import"./chunk-qch5xj2a.js";import{c}from"./chunk-etbngzss.js";import"./chunk-n1z3wrvm.js";import"./chunk-223dyewd.js";import"./chunk-se8vehhp.js";import"./chunk-5k7wva7c.js";import"./chunk-h6pppnx2.js";import"./chunk-3fj60qgx.js";import"./chunk-y9c4grt0.js";import{Bie}from"./chunk-9evx3wkx.js";import"./chunk-4xz4ewb9.js";import"./chunk-nnawdxg4.js";import"./chunk-79wfew46.js";var T={name:"MCP Task",type:"mcp_task",async kill(a,o,k,l,s){let e=o.get(a),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,p=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,d=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();let i=!1;if(o.update(a,(r)=>{if(r.notified||r.status!=="running")return r;return i=!0,{...r,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),i&&e?.type==="mcp_task")try{e.onWorkerWakeOutcome?.({kind:"stopped"})}catch(r){t("McpTask.kill: onWorkerWakeOutcome threw, the stop continues"),c(r)}(async()=>{await d,await Bie(a,s,n,p)})().catch((r)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(r)}`))}};export{T as MCP_TASK};
