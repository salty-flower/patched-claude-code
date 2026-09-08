// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import"./chunk-2x3q7cfh.js";import"./chunk-207999qb.js";import"./chunk-h62vxw7j.js";import"./chunk-510m1t2d.js";import"./chunk-h4f48kbj.js";import"./chunk-w76kejwn.js";import{n}from"./chunk-38sny42z.js";import"./chunk-5ndhfaq9.js";import"./chunk-z5vtnzjg.js";import"./chunk-1wezmyx2.js";import"./chunk-h64ek850.js";import"./chunk-862jyk0r.js";import"./chunk-km6n9zrg.js";import"./chunk-qe04h4c5.js";import"./chunk-78nzsrc6.js";import"./chunk-01cse5zg.js";import"./chunk-3g334xwq.js";import"./chunk-zqr5ctyf.js";import"./chunk-9g2q4bjq.js";import"./chunk-27ncq5fr.js";import"./chunk-twnwwsbr.js";import"./chunk-mkmy4cx2.js";import"./chunk-thxapyam.js";import{U4}from"./chunk-xcbagjx9.js";import"./chunk-tznd4407.js";import"./chunk-qng0dgw4.js";import"./chunk-13kdp2ag.js";var m={name:"MCP Task",type:"mcp_task",async kill(a,i,p,d,r){let e=i.get(a),s=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();i.update(a,(t)=>{if(t.notified||t.status!=="running")return t;return{...t,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await U4(a,r,s,o)})().catch((t)=>n(`McpTask.kill deleteMcpTaskMetadata: ${String(t)}`))}};export{m as MCP_TASK};
