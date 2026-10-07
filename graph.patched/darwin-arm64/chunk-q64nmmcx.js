// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import"./chunk-12mdvf4x.js";import"./chunk-29aedz4e.js";import"./chunk-8mvda08c.js";import"./chunk-ht3pd6g4.js";import"./chunk-hdvxmrfb.js";import"./chunk-fqsygynq.js";import"./chunk-ws170zqm.js";import"./chunk-5qeme8w3.js";import{t}from"./chunk-f8eqwxpt.js";import"./chunk-xbg4a11x.js";import"./chunk-sgznn49v.js";import"./chunk-pey4mmsy.js";import"./chunk-fqzh3zpr.js";import{c}from"./chunk-qfs4y3ww.js";import"./chunk-wd4jmzs1.js";import"./chunk-1jrtnqew.js";import"./chunk-wq75sevg.js";import"./chunk-2pfss7d0.js";import"./chunk-egwr9wbg.js";import"./chunk-1affnqfa.js";import"./chunk-805xjggr.js";import{D9}from"./chunk-c7y1garc.js";import"./chunk-3qq6v9fe.js";import"./chunk-1d5bwndp.js";var T={name:"MCP Task",type:"mcp_task",async kill(a,o,k,l,s){let e=o.get(a),n=e?.type==="mcp_task"?e.sidecarSessionId:void 0,p=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,d=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();let i=!1;if(o.update(a,(r)=>{if(r.notified||r.status!=="running")return r;return i=!0,{...r,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),i&&e?.type==="mcp_task")try{e.onWorkerWakeOutcome?.({kind:"stopped"})}catch(r){t("McpTask.kill: onWorkerWakeOutcome threw, the stop continues"),c(r)}(async()=>{await d,await D9(a,s,n,p)})().catch((r)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(r)}`))}};export{T as MCP_TASK};
