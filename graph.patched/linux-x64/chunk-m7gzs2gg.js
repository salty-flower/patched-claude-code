// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import"./chunk-b1z7jvb2.js";import"./chunk-ycrs8y50.js";import"./chunk-y7x1gsy0.js";import"./chunk-td0fv71w.js";import"./chunk-xtc2dmbe.js";import"./chunk-mrh5xd2h.js";import{t}from"./chunk-5nyank6v.js";import"./chunk-0sa7g6pk.js";import"./chunk-pz607n7v.js";import"./chunk-ctshp37x.js";import"./chunk-9d3jb7ss.js";import"./chunk-pewb9akp.js";import"./chunk-t5j5p2ne.js";import"./chunk-fkh93x1w.js";import"./chunk-ffgkv432.js";import"./chunk-br7qz22q.js";import"./chunk-cw80kq1q.js";import"./chunk-sr28hb79.js";import"./chunk-twjxwmnx.js";import"./chunk-hfch6q45.js";import"./chunk-tdsxb2n6.js";import"./chunk-zmhk2tm0.js";import"./chunk-ercqfpse.js";import{p9}from"./chunk-e8gked8z.js";import"./chunk-e8s22d3s.js";import"./chunk-e979sk69.js";import"./chunk-dwwp0b8c.js";var m={name:"MCP Task",type:"mcp_task",async kill(i,r,p,d,s){let e=r.get(i),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();r.update(i,(a)=>{if(a.notified||a.status!=="running")return a;return{...a,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await p9(i,s,n,o)})().catch((a)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(a)}`))}};export{m as MCP_TASK};
