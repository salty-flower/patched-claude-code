// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import"./chunk-sgyvc67j.js";import"./chunk-8yfx63va.js";import"./chunk-95e36pja.js";import"./chunk-0yrss36a.js";import"./chunk-rgs4nrpq.js";import"./chunk-am8gnetv.js";import{t}from"./chunk-wbbe5mtc.js";import"./chunk-g6gcsnnp.js";import"./chunk-kr797g3g.js";import"./chunk-knxbj6dd.js";import"./chunk-9r5vc452.js";import"./chunk-hv7xv8k9.js";import"./chunk-d6akndrs.js";import"./chunk-vp9rx3bq.js";import"./chunk-fk28fhjr.js";import"./chunk-2c9ntqb3.js";import"./chunk-dv6tepz3.js";import"./chunk-3rs4ng0x.js";import"./chunk-2rebt4am.js";import"./chunk-c30w2k35.js";import"./chunk-2dxb0egv.js";import"./chunk-1vqgbqb9.js";import{SK}from"./chunk-mj8dteqe.js";import"./chunk-ppts8a45.js";import"./chunk-pe85fsd6.js";import"./chunk-10wetekf.js";var m={name:"MCP Task",type:"mcp_task",async kill(i,r,p,d,s){let e=r.get(i),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();r.update(i,(a)=>{if(a.notified||a.status!=="running")return a;return{...a,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await SK(i,s,n,o)})().catch((a)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(a)}`))}};export{m as MCP_TASK};
