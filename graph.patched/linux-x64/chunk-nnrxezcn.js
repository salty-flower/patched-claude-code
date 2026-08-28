// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import"./chunk-2vv5hpw3.js";import"./chunk-gqqx2ybk.js";import"./chunk-hjxpwbhy.js";import"./chunk-gt4btdxr.js";import"./chunk-7h2h1m4y.js";import{n}from"./chunk-akz0cj0f.js";import"./chunk-xj8gnzar.js";import"./chunk-qkpfba5t.js";import"./chunk-m09j9ze8.js";import"./chunk-2h7wbm8s.js";import"./chunk-ey3r955r.js";import"./chunk-4a808ek9.js";import"./chunk-apqzzgp2.js";import"./chunk-fz00m7zs.js";import"./chunk-s0y4aasp.js";import"./chunk-cgwm6n4d.js";import"./chunk-k69qdkv1.js";import"./chunk-g0kfvhx3.js";import"./chunk-kvgzj9kk.js";import"./chunk-6ce4s97h.js";import"./chunk-2t5hwcdv.js";import"./chunk-6ypvgjr3.js";import"./chunk-zmyynaq1.js";import{DW}from"./chunk-50b0ec7r.js";import"./chunk-k72050k1.js";import"./chunk-vt29yvxx.js";import"./chunk-f58mzqmc.js";import"./chunk-9q51f9rr.js";var m={name:"MCP Task",type:"mcp_task",async kill(a,i,p,d,r){let e=i.get(a),s=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();i.update(a,(t)=>{if(t.notified||t.status!=="running")return t;return{...t,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await DW(a,r,s,o)})().catch((t)=>n(`McpTask.kill deleteMcpTaskMetadata: ${String(t)}`))}};export{m as MCP_TASK};
