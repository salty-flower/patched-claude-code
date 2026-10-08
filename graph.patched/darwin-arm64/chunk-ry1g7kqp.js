// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import"./chunk-drh3s4e9.js";import"./chunk-63vja5td.js";import"./chunk-vd0a9d2s.js";import"./chunk-a48152q4.js";import"./chunk-eak61y8v.js";import"./chunk-tnh13g2g.js";import"./chunk-k2e8p61g.js";import"./chunk-9exgg8sx.js";import{t}from"./chunk-b5feae42.js";import"./chunk-ce4b81xm.js";import"./chunk-xaschh52.js";import"./chunk-cy0s0eq1.js";import"./chunk-v2r1tbj3.js";import{c}from"./chunk-tdmgys2e.js";import"./chunk-f51x0gch.js";import"./chunk-d9jpb7es.js";import"./chunk-sd0xvc0m.js";import"./chunk-y575z4xw.js";import"./chunk-ebsg4v3f.js";import"./chunk-pzha2ryw.js";import"./chunk-n2c703p7.js";import{W8}from"./chunk-tm4nkaga.js";import"./chunk-1dsbrtka.js";import"./chunk-d3pfyxhw.js";var T={name:"MCP Task",type:"mcp_task",async kill(a,o,k,l,s){let e=o.get(a),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,p=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,d=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();let i=!1;if(o.update(a,(r)=>{if(r.notified||r.status!=="running")return r;return i=!0,{...r,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),i&&e?.type==="mcp_task")try{e.onWorkerWakeOutcome?.({kind:"stopped"})}catch(r){t("McpTask.kill: onWorkerWakeOutcome threw, the stop continues"),c(r)}(async()=>{await d,await W8(a,s,n,p)})().catch((r)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(r)}`))}};export{T as MCP_TASK};
