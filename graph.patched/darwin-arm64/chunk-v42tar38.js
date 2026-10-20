// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{t3s}from"./chunk-bvn0epzr.js";import{ql}from"./chunk-gzssw8ss.js";import{Gu,zY}from"./chunk-na9nw575.js";import{$p}from"./chunk-wapchjag.js";function ZCt(e,n,t){return()=>{if(t?.aborted===!0)return;let r=n();return e.getCommandQueueSnapshot().some(s)||e.someSubmissionInFlight((i)=>o(i,r))||(t===void 0?e.getInFlightDrainBatchStanding()!=="appended"&&e.someInFlightDrainCommand((i)=>o(i,r)):e.getInFlightDrainBatchStanding()==="passed-over"&&e.someInFlightDrainCommand(s))?void 0:r}}function o(e,n){return s(e)&&(e.uuid===void 0||n.findLast((t)=>t.uuid===e.uuid)===void 0)}function s(e){if(!Gu(e))return!1;switch(e.mode){case"task-notification":return!1;case"poll-event":{let n=e.pollEvent?.provenance?.authority;return n!==void 0&&n!=="peer-agent"&&n!=="world-event"}case"prompt":case"bash":return t3s(e);case"orphaned-permission":return!0}return!0}function IAn({recipientName:e,leaderMode:n,leaderAutoPickedByLevel:t,proactivityLevel:r,tasks:i}){let d=m(e,i)?n:zY(n,r,t),a=ql(d);return a==="plan"?"default":a}function m(e,n){return Object.values(n).some((t)=>$p(t)&&t.status==="running"&&t.identity.agentName===e&&t.paneTeardown===void 0&&t.identity.resumableAgentId!==void 0)}
export{ZCt,IAn};
