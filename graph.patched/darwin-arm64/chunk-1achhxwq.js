// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import"./chunk-nfna65jh.js";import"./chunk-fdxhcr6b.js";import"./chunk-4bw62nzm.js";import"./chunk-k1419ccf.js";import"./chunk-76anb6yt.js";import"./chunk-886tf6ja.js";import"./chunk-yjc18bey.js";import"./chunk-ae84tp6z.js";import{t}from"./chunk-gyf58rwf.js";import"./chunk-nqc6v990.js";import"./chunk-tat46164.js";import"./chunk-ax7r0qj7.js";import{c}from"./chunk-gsnbskq4.js";import"./chunk-1t033v1j.js";import"./chunk-yn0pfn70.js";import"./chunk-nv1qvpv3.js";import"./chunk-fdwn5gdv.js";import"./chunk-1tsh4em7.js";import"./chunk-nca5bd28.js";import"./chunk-9em13yqt.js";import{Vie}from"./chunk-hxgefxf8.js";import"./chunk-e0gkzwq9.js";import"./chunk-nkvcn1t9.js";import"./chunk-xaes9ysz.js";var T={name:"MCP Task",type:"mcp_task",async kill(a,o,k,l,s){let e=o.get(a),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,p=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,d=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();let i=!1;if(o.update(a,(r)=>{if(r.notified||r.status!=="running")return r;return i=!0,{...r,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),i&&e?.type==="mcp_task")try{e.onWorkerWakeOutcome?.({kind:"stopped"})}catch(r){t("McpTask.kill: onWorkerWakeOutcome threw, the stop continues"),c(r)}(async()=>{await d,await Vie(a,s,n,p)})().catch((r)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(r)}`))}};export{T as MCP_TASK};
