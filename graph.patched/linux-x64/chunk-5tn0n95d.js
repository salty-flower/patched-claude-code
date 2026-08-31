// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import"./chunk-30zk17wm.js";import"./chunk-7s3c5qqq.js";import"./chunk-rv2kd9jf.js";import"./chunk-d7ejrssq.js";import"./chunk-r1b219q3.js";import"./chunk-efckqwp7.js";import{n}from"./chunk-d0cr5d2v.js";import"./chunk-sgsf5yd5.js";import"./chunk-bvdq8tnt.js";import"./chunk-764j5mtt.js";import"./chunk-qd43z1g9.js";import"./chunk-j55vqm69.js";import"./chunk-e7r3n0fy.js";import"./chunk-wsjwtx5h.js";import"./chunk-asme1eq2.js";import"./chunk-j35pah18.js";import"./chunk-w8ppmegc.js";import"./chunk-m9gbfvns.js";import"./chunk-jpen6jwm.js";import"./chunk-ma4xtxwv.js";import"./chunk-1ttwv9fk.js";import"./chunk-vv42w3zb.js";import"./chunk-eeg0krn4.js";import{zK}from"./chunk-0dq7dpz2.js";import"./chunk-mh9ebzs1.js";import"./chunk-7ntmrqet.js";import"./chunk-edxkqkcr.js";import"./chunk-6c8t6gsc.js";import"./chunk-er188mb2.js";var m={name:"MCP Task",type:"mcp_task",async kill(a,i,p,d,r){let e=i.get(a),s=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();i.update(a,(t)=>{if(t.notified||t.status!=="running")return t;return{...t,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await zK(a,r,s,o)})().catch((t)=>n(`McpTask.kill deleteMcpTaskMetadata: ${String(t)}`))}};export{m as MCP_TASK};
