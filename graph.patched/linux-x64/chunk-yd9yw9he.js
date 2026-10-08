// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import"./chunk-28fj72x7.js";import"./chunk-ndcqd6bh.js";import"./chunk-g79wjybr.js";import"./chunk-4p5wb748.js";import"./chunk-bkr1h20c.js";import"./chunk-5g6j8x8p.js";import"./chunk-670y7hd9.js";import"./chunk-gwj7v27h.js";import{t}from"./chunk-p46wpkfz.js";import"./chunk-4z5wz91m.js";import"./chunk-gx95ar6n.js";import"./chunk-j6z0j5vh.js";import"./chunk-2j48j0j1.js";import{c}from"./chunk-3s94kw4m.js";import"./chunk-syb80f1m.js";import"./chunk-hv4n1akt.js";import"./chunk-hrwjwwzw.js";import"./chunk-ras5x31x.js";import"./chunk-ag8h4tcz.js";import"./chunk-mb5hcwe1.js";import"./chunk-7qntjzak.js";import{N8}from"./chunk-1ts65b16.js";import"./chunk-1efntr6f.js";import"./chunk-ebvbbvjb.js";var T={name:"MCP Task",type:"mcp_task",async kill(a,o,k,l,s){let e=o.get(a),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,p=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,d=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();let i=!1;if(o.update(a,(r)=>{if(r.notified||r.status!=="running")return r;return i=!0,{...r,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),i&&e?.type==="mcp_task")try{e.onWorkerWakeOutcome?.({kind:"stopped"})}catch(r){t("McpTask.kill: onWorkerWakeOutcome threw, the stop continues"),c(r)}(async()=>{await d,await N8(a,s,n,p)})().catch((r)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(r)}`))}};export{T as MCP_TASK};
