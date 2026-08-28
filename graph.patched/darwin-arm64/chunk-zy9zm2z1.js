// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import"./chunk-g4zaymy2.js";import"./chunk-vpkz5m05.js";import"./chunk-v5t1qnj3.js";import"./chunk-jqgad8sa.js";import"./chunk-e5bq01yj.js";import{n}from"./chunk-cmkfpkth.js";import"./chunk-j6bwf1es.js";import"./chunk-8w8hykva.js";import"./chunk-fnn4jyg7.js";import"./chunk-hp9wjta4.js";import"./chunk-9qmdhtt2.js";import"./chunk-71kt42f0.js";import"./chunk-q2p37kwf.js";import"./chunk-3vs63y6b.js";import"./chunk-s0y4aasp.js";import"./chunk-nw6r1618.js";import"./chunk-0ve316az.js";import"./chunk-bn8q5mbz.js";import"./chunk-n5p9w775.js";import"./chunk-w2hwjymv.js";import"./chunk-xv0afvwf.js";import"./chunk-71nbrcp0.js";import"./chunk-paqnf24w.js";import{M5}from"./chunk-vzk8m4gb.js";import"./chunk-pc4rrbmy.js";import"./chunk-8sfg3638.js";import"./chunk-xhxj67xc.js";import"./chunk-9q51f9rr.js";var m={name:"MCP Task",type:"mcp_task",async kill(a,i,p,d,r){let e=i.get(a),s=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();i.update(a,(t)=>{if(t.notified||t.status!=="running")return t;return{...t,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await M5(a,r,s,o)})().catch((t)=>n(`McpTask.kill deleteMcpTaskMetadata: ${String(t)}`))}};export{m as MCP_TASK};
