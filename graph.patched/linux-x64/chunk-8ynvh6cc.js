// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import"./chunk-x1rrg5j2.js";import"./chunk-jdw11prg.js";import"./chunk-56nvyfje.js";import"./chunk-1mrhsd7s.js";import"./chunk-058caznt.js";import"./chunk-97tbrkcc.js";import{t}from"./chunk-fzpv8ev5.js";import"./chunk-kn2qhfka.js";import"./chunk-xmrr4sh8.js";import"./chunk-ras23w04.js";import"./chunk-5dw4kvcq.js";import"./chunk-gxyczd8c.js";import"./chunk-h96shwz8.js";import"./chunk-ptdm1fhw.js";import"./chunk-55w4bsdv.js";import"./chunk-7y5wjz4e.js";import"./chunk-9fysw8jv.js";import"./chunk-m92n5xra.js";import"./chunk-m7w5m1w6.js";import"./chunk-6rkpsn9e.js";import"./chunk-bx79h7g8.js";import"./chunk-vdqz95a3.js";import"./chunk-zwtg7j89.js";import{Y9}from"./chunk-r35c3ahr.js";import"./chunk-e4vwkrtj.js";import"./chunk-my1n9ey3.js";import"./chunk-v10h0yg2.js";var m={name:"MCP Task",type:"mcp_task",async kill(i,r,p,d,s){let e=r.get(i),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();r.update(i,(a)=>{if(a.notified||a.status!=="running")return a;return{...a,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await Y9(i,s,n,o)})().catch((a)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(a)}`))}};export{m as MCP_TASK};
