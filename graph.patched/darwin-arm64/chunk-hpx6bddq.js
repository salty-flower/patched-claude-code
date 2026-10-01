// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import"./chunk-ypa64mmn.js";import"./chunk-g5e6pf8s.js";import"./chunk-a7cah040.js";import"./chunk-nynxm73s.js";import"./chunk-g9zw99sb.js";import"./chunk-hs50vfa7.js";import"./chunk-jm8r4kd0.js";import"./chunk-2j7zyd8v.js";import{t}from"./chunk-3wz0srxw.js";import"./chunk-h1eby6n2.js";import"./chunk-dard33vx.js";import"./chunk-62dhtzrb.js";import{u}from"./chunk-zwbw6dvp.js";import"./chunk-rdhfzq5v.js";import"./chunk-631kxjhr.js";import"./chunk-k7eq4ze9.js";import"./chunk-dsp1md5e.js";import"./chunk-ngfc6f6n.js";import"./chunk-3vg91ev9.js";import"./chunk-f3ctdkkt.js";import{PK}from"./chunk-km1khgk3.js";import"./chunk-0m0d8rmc.js";import"./chunk-r1n6vzwg.js";var T={name:"MCP Task",type:"mcp_task",async kill(a,o,d,k,s){let e=o.get(a),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,p=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();let i=!1;if(o.update(a,(r)=>{if(r.notified||r.status!=="running")return r;return i=!0,{...r,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),i&&e?.type==="mcp_task")try{e.onWorkerWakeOutcome?.({kind:"stopped"})}catch(r){t("McpTask.kill: onWorkerWakeOutcome threw, the stop continues"),u(r)}(async()=>{await c,await PK(a,s,n,p)})().catch((r)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(r)}`))}};export{T as MCP_TASK};
