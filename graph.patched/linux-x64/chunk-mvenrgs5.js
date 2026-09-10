// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import"./chunk-t8q7n4ta.js";import"./chunk-a7esebzw.js";import"./chunk-m3k3498d.js";import"./chunk-rfvh2b8a.js";import"./chunk-vfrpernt.js";import"./chunk-vkfaczp9.js";import{t}from"./chunk-fy3j7rz0.js";import"./chunk-qsnhycbm.js";import"./chunk-xdb7bs7g.js";import"./chunk-xj9n0xxp.js";import"./chunk-me2q8h8a.js";import"./chunk-zfc5b4tv.js";import"./chunk-y4ms75k8.js";import"./chunk-4te7e7q8.js";import"./chunk-7tpgnqqk.js";import"./chunk-ydsbq05f.js";import"./chunk-9f6zczff.js";import"./chunk-9fmxymtw.js";import"./chunk-wchdjfbm.js";import"./chunk-jvycdhmw.js";import"./chunk-ckb6ttfs.js";import"./chunk-dm1d67j0.js";import"./chunk-mrpx4hqy.js";import{V6}from"./chunk-qsc9p34w.js";import"./chunk-h24gntsh.js";import"./chunk-q2svqtr6.js";import"./chunk-k9qk789z.js";var m={name:"MCP Task",type:"mcp_task",async kill(i,r,p,d,s){let e=r.get(i),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();r.update(i,(a)=>{if(a.notified||a.status!=="running")return a;return{...a,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await V6(i,s,n,o)})().catch((a)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(a)}`))}};export{m as MCP_TASK};
