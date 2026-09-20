// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import"./chunk-txfrkyzp.js";import"./chunk-gj513b2z.js";import"./chunk-qztrb7e5.js";import"./chunk-d3xvzk7s.js";import"./chunk-cnzbk8gg.js";import"./chunk-p9tbyvzw.js";import{t}from"./chunk-847hpqqs.js";import"./chunk-k4wnp212.js";import"./chunk-hdk9febf.js";import"./chunk-vd2nxbng.js";import"./chunk-d6f1t6sb.js";import"./chunk-679ytzs5.js";import"./chunk-67jj8qay.js";import"./chunk-q3f1bdx8.js";import"./chunk-q2vrcqny.js";import"./chunk-40wq8hf6.js";import"./chunk-kh3dq6rw.js";import"./chunk-zf4yx99n.js";import"./chunk-4knvtbyn.js";import"./chunk-1t2j04wn.js";import{nX}from"./chunk-50hqmj7g.js";import"./chunk-e9feafz0.js";import"./chunk-gyh40pz1.js";var m={name:"MCP Task",type:"mcp_task",async kill(i,r,p,d,s){let e=r.get(i),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();r.update(i,(a)=>{if(a.notified||a.status!=="running")return a;return{...a,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await nX(i,s,n,o)})().catch((a)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(a)}`))}};export{m as MCP_TASK};
