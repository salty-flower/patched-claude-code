// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import"./chunk-bj7g1p32.js";import"./chunk-mnk1rjxv.js";import"./chunk-h9wtyp3p.js";import"./chunk-3whp6z2x.js";import"./chunk-7s5qs9ea.js";import"./chunk-vx4qhc14.js";import{t}from"./chunk-1tk5haqn.js";import"./chunk-e1n9j4jc.js";import"./chunk-mzzfzvay.js";import"./chunk-hvf4zpd9.js";import"./chunk-dbn6fdze.js";import"./chunk-5k1pty0j.js";import"./chunk-wcpxyz2e.js";import"./chunk-fpk3t24b.js";import"./chunk-3qjd0g3g.js";import"./chunk-n17xw1z0.js";import"./chunk-efxr56q3.js";import"./chunk-td8fcebs.js";import"./chunk-hpnksvcw.js";import"./chunk-9g6v0ehs.js";import"./chunk-8mc66c3x.js";import"./chunk-4c106gcs.js";import"./chunk-842t038w.js";import{K4}from"./chunk-qnw5zb8m.js";import"./chunk-yqmm48c3.js";import"./chunk-429awvea.js";import"./chunk-y7bjs1t6.js";var m={name:"MCP Task",type:"mcp_task",async kill(i,r,p,d,s){let e=r.get(i),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();r.update(i,(a)=>{if(a.notified||a.status!=="running")return a;return{...a,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await K4(i,s,n,o)})().catch((a)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(a)}`))}};export{m as MCP_TASK};
