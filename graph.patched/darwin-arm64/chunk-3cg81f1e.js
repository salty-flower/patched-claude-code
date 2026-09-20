// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import"./chunk-sgamszzq.js";import"./chunk-vx7e38ke.js";import"./chunk-n93bke93.js";import"./chunk-q2h0fawe.js";import"./chunk-qq9jq5dz.js";import"./chunk-k6smmjsm.js";import{t}from"./chunk-qmm87fyw.js";import"./chunk-jxdnn2j1.js";import"./chunk-pfxvy4ay.js";import"./chunk-83fmeatd.js";import"./chunk-gyqjm99t.js";import"./chunk-aj022wxj.js";import"./chunk-67jj8qay.js";import"./chunk-7greh2d8.js";import"./chunk-wkhfcbsj.js";import"./chunk-tq3ft6e6.js";import"./chunk-vzm3bfp5.js";import"./chunk-n21rqdv9.js";import"./chunk-rffpe63a.js";import"./chunk-wh4168zx.js";import{c7}from"./chunk-6qk8regb.js";import"./chunk-jhbkm67b.js";import"./chunk-jm8tf5gf.js";var m={name:"MCP Task",type:"mcp_task",async kill(i,r,p,d,s){let e=r.get(i),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();r.update(i,(a)=>{if(a.notified||a.status!=="running")return a;return{...a,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await c7(i,s,n,o)})().catch((a)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(a)}`))}};export{m as MCP_TASK};
