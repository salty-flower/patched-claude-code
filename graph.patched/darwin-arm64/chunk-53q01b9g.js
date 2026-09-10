// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import"./chunk-cet8na02.js";import"./chunk-3k7pa7mk.js";import"./chunk-wmtek349.js";import"./chunk-awrvr02y.js";import"./chunk-wkyng8j1.js";import"./chunk-jxvdfgn0.js";import{t}from"./chunk-w930ag8r.js";import"./chunk-3kadfzjs.js";import"./chunk-fz55wskw.js";import"./chunk-0v0wzs89.js";import"./chunk-2e3zzta4.js";import"./chunk-pqwwfxy7.js";import"./chunk-az7e2tjv.js";import"./chunk-tfmhv9d3.js";import"./chunk-7tpgnqqk.js";import"./chunk-4kwsawbv.js";import"./chunk-w6n61axt.js";import"./chunk-qymratxs.js";import"./chunk-jww0ztav.js";import"./chunk-e0gvmsm3.js";import"./chunk-2kk5r9ez.js";import"./chunk-v6bnm6m1.js";import"./chunk-evxfwc2t.js";import{t5}from"./chunk-hc5fpvy6.js";import"./chunk-qkazermv.js";import"./chunk-m13zrw5b.js";import"./chunk-5dnafksn.js";var m={name:"MCP Task",type:"mcp_task",async kill(i,r,p,d,s){let e=r.get(i),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();r.update(i,(a)=>{if(a.notified||a.status!=="running")return a;return{...a,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await t5(i,s,n,o)})().catch((a)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(a)}`))}};export{m as MCP_TASK};
