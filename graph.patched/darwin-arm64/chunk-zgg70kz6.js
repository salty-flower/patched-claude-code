// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import"./chunk-yhfssb7x.js";import"./chunk-h4q6j5r2.js";import"./chunk-0xdcm8sp.js";import"./chunk-p3vjhzt0.js";import"./chunk-dsb06hq9.js";import"./chunk-g1553wr3.js";import{t}from"./chunk-84crg0gy.js";import"./chunk-ty218y69.js";import"./chunk-8nmvz1t1.js";import"./chunk-y5gt0775.js";import"./chunk-dmh8g72f.js";import"./chunk-50pkxr1e.js";import"./chunk-7r0gxy5k.js";import"./chunk-a190bznh.js";import"./chunk-55w4bsdv.js";import"./chunk-2fnmmmh0.js";import"./chunk-rk5fkewn.js";import"./chunk-g2ngvza5.js";import"./chunk-2b9rpf69.js";import"./chunk-jx9d5yeb.js";import"./chunk-pdyrv9q9.js";import"./chunk-h9sag63s.js";import"./chunk-my9as4f3.js";import{rV}from"./chunk-mkc3c7pb.js";import"./chunk-vahmkvnz.js";import"./chunk-c77g0aqc.js";import"./chunk-fgjq2155.js";var m={name:"MCP Task",type:"mcp_task",async kill(i,r,p,d,s){let e=r.get(i),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();r.update(i,(a)=>{if(a.notified||a.status!=="running")return a;return{...a,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await rV(i,s,n,o)})().catch((a)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(a)}`))}};export{m as MCP_TASK};
