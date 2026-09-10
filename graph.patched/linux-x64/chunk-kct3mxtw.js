// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import"./chunk-6n7yk222.js";import"./chunk-d8qjp6nk.js";import"./chunk-mtqrv1h8.js";import"./chunk-xg0fb0fx.js";import"./chunk-59zxrwfh.js";import"./chunk-0rpkhv24.js";import{t}from"./chunk-cmg3b5hg.js";import"./chunk-1k8htemc.js";import"./chunk-c413mrzf.js";import"./chunk-np2nmzg7.js";import"./chunk-hep7dzja.js";import"./chunk-b71jaj6f.js";import"./chunk-qrernxw9.js";import"./chunk-vp9rx3bq.js";import"./chunk-dz6vh6s7.js";import"./chunk-xenybawd.js";import"./chunk-1bwwmttj.js";import"./chunk-kse90n8m.js";import"./chunk-p9k2m8jj.js";import"./chunk-4g3h89r1.js";import"./chunk-v365e4sa.js";import"./chunk-y8fvfzqc.js";import{d5}from"./chunk-7zqpkazr.js";import"./chunk-a2vwx1t4.js";import"./chunk-mvtzn48h.js";import"./chunk-5md0kwdx.js";var m={name:"MCP Task",type:"mcp_task",async kill(i,r,p,d,s){let e=r.get(i),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();r.update(i,(a)=>{if(a.notified||a.status!=="running")return a;return{...a,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await d5(i,s,n,o)})().catch((a)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(a)}`))}};export{m as MCP_TASK};
