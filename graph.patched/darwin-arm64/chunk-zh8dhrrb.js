// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import"./chunk-hdbxv3pp.js";import"./chunk-5e3knf27.js";import"./chunk-ma94d7pd.js";import"./chunk-gh3qnpny.js";import"./chunk-pc7b8z35.js";import"./chunk-2avye5sw.js";import{t}from"./chunk-t2jwg94b.js";import"./chunk-2cgtbdj1.js";import"./chunk-2mb81hfz.js";import"./chunk-qkcr56w2.js";import"./chunk-k3mxj323.js";import"./chunk-kzsh05tm.js";import"./chunk-p6qksxwe.js";import"./chunk-zjtbqw2e.js";import"./chunk-ffgkv432.js";import"./chunk-h2gsgpx0.js";import"./chunk-t1t1emvm.js";import"./chunk-pv906ex9.js";import"./chunk-88cgz317.js";import"./chunk-1mtde6n1.js";import"./chunk-qw2xqmjm.js";import"./chunk-0s8h31st.js";import"./chunk-9my8vw9v.js";import{Tz}from"./chunk-7pfe0vy2.js";import"./chunk-f6scc3e2.js";import"./chunk-bpk2rz0h.js";import"./chunk-gjjv0be0.js";var m={name:"MCP Task",type:"mcp_task",async kill(i,r,p,d,s){let e=r.get(i),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();r.update(i,(a)=>{if(a.notified||a.status!=="running")return a;return{...a,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await Tz(i,s,n,o)})().catch((a)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(a)}`))}};export{m as MCP_TASK};
