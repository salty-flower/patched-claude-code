// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import"./chunk-38213y7h.js";import"./chunk-5b2g0bc6.js";import"./chunk-tey8avmn.js";import"./chunk-92vbp1ze.js";import"./chunk-9rhc0mtn.js";import"./chunk-qr1avfxy.js";import{n}from"./chunk-ynzt0fm1.js";import"./chunk-4j4893mq.js";import"./chunk-1jtqmqar.js";import"./chunk-04aem4bh.js";import"./chunk-trd7c1xg.js";import"./chunk-yzssqtg9.js";import"./chunk-ns9e34z1.js";import"./chunk-8ath6mn8.js";import"./chunk-asme1eq2.js";import"./chunk-870sakbg.js";import"./chunk-nt3hxpjz.js";import"./chunk-w3k8bej2.js";import"./chunk-tb103f96.js";import"./chunk-qpcjd2zp.js";import"./chunk-jpjxepq9.js";import"./chunk-4ngx0mjr.js";import"./chunk-1x1tv6fk.js";import{zq}from"./chunk-7e5qdw2w.js";import"./chunk-ae7dqna1.js";import"./chunk-x46dbms4.js";import"./chunk-zyp65cht.js";import"./chunk-snzr790g.js";import"./chunk-6c8t6gsc.js";var m={name:"MCP Task",type:"mcp_task",async kill(a,i,p,d,r){let e=i.get(a),s=e?.type==="mcp_task"?e.sidecarSessionId:void 0,o=e?.type==="mcp_task"?e.sidecarProjectDir:void 0,c=e?.type==="mcp_task"?e.sidecarWrite:void 0;if(e?.type==="mcp_task")e.abortController?.abort(),e.driveAbortController?.abort(),e.sep2663Cancel?.();i.update(a,(t)=>{if(t.notified||t.status!=="running")return t;return{...t,status:"killed",endTime:Date.now(),parked:void 0,notified:!0}}),(async()=>{await c,await zq(a,r,s,o)})().catch((t)=>n(`McpTask.kill deleteMcpTaskMetadata: ${String(t)}`))}};export{m as MCP_TASK};
