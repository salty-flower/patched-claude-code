// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{w$}from"./chunk-bz953swv.js";function kZ(n){if(n?.kind!=="task-notification")return n;let e=w$(n.runId);return{kind:"task-notification",...n.subkind!==void 0&&{subkind:n.subkind},...n.fireReason!==void 0&&{fireReason:n.fireReason},...n.producer!==void 0&&{producer:n.producer},...e!==void 0&&{runId:e},...n.taskKind==="mcp-task"&&{taskKind:n.taskKind}}}function vW(n,e,t){let i=kZ(n)??(e==="task-notification"?{kind:"task-notification"}:void 0),d=w$(t);return d!==void 0&&i?.kind==="task-notification"&&i.runId===void 0?{...i,runId:d}:i}function FY(n){return n?.kind==="task-notification"&&n.producer==="session-task"}function k4(n){return n?.kind==="task-notification"&&Object.keys(n).every((e)=>e==="kind"||e==="producer"||e==="runId"||e==="taskKind")}function wCe(n,e){return k4(n)&&(FY(n)||e===!0)}
export{kZ,vW,FY,k4,wCe};
