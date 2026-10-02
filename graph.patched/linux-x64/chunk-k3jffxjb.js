// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import"./chunk-b1a55n2g.js";import"./chunk-fkak21hw.js";import"./chunk-bxhyh54r.js";import"./chunk-k3gp1qmc.js";import"./chunk-aap6zsd0.js";import"./chunk-vqpmen5t.js";import"./chunk-dmpcy5p5.js";import"./chunk-actz3rxp.js";import{t}from"./chunk-055ns4k8.js";import"./chunk-v34cw0y6.js";import"./chunk-jsyn1gcs.js";import"./chunk-rg63yke9.js";import{u}from"./chunk-hjabkkf1.js";import"./chunk-agdg3czn.js";import"./chunk-aqx56v12.js";import"./chunk-1m79ycfm.js";import"./chunk-z10rc4tf.js";import"./chunk-5cmjjb37.js";import"./chunk-bgchm1w8.js";import"./chunk-wzht8hyn.js";import{v5}from"./chunk-nvf6z5m7.js";import"./chunk-a6rmrye9.js";import"./chunk-n12wgbvr.js";var T={name:"MCP Task",type:"mcp_task",async kill(a,o,d,k,s){let e=o.get(a),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,p=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();let i=!1;if(o.update(a,(r)=>{if(r.notified||r.status!=="running")return r;return i=!0,{...r,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),i&&e?.type==="mcp_task")try{e.onWorkerWakeOutcome?.({kind:"stopped"})}catch(r){t("McpTask.kill: onWorkerWakeOutcome threw, the stop continues"),u(r)}(async()=>{await c,await v5(a,s,n,p)})().catch((r)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(r)}`))}};export{T as MCP_TASK};
