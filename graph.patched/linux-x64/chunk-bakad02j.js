// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import"./chunk-k6vqz9fa.js";import"./chunk-8a7jwk3w.js";import"./chunk-m3vzz9tz.js";import"./chunk-r8601mcq.js";import"./chunk-06whp1c5.js";import"./chunk-1m0n2kwr.js";import{n}from"./chunk-mh9y4c2z.js";import"./chunk-jmxayrtv.js";import"./chunk-w8jp0t25.js";import"./chunk-kqpqzcmv.js";import"./chunk-v916jarm.js";import"./chunk-ke36szyq.js";import"./chunk-zqzrgb20.js";import"./chunk-ctrs6tfh.js";import"./chunk-78nzsrc6.js";import"./chunk-z4h5ym44.js";import"./chunk-yqdggex4.js";import"./chunk-bxegdt3f.js";import"./chunk-1p8thh7t.js";import"./chunk-r1xh498w.js";import"./chunk-kxdybkam.js";import"./chunk-55s6k4f0.js";import"./chunk-prpv604z.js";import{x9}from"./chunk-6rx2x9cj.js";import"./chunk-famz7zjy.js";import"./chunk-rpnwkr8a.js";import"./chunk-vmja0gjy.js";var m={name:"MCP Task",type:"mcp_task",async kill(a,i,p,d,r){let e=i.get(a),s=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();i.update(a,(t)=>{if(t.notified||t.status!=="running")return t;return{...t,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await x9(a,r,s,o)})().catch((t)=>n(`McpTask.kill deleteMcpTaskMetadata: ${String(t)}`))}};export{m as MCP_TASK};
