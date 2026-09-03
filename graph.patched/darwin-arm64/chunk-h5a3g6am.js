// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{G}from"./chunk-hdbxv3pp.js";import{ym}from"./chunk-04r19fmz.js";import{a}from"./chunk-pv906ex9.js";import{J}from"./chunk-yx1gn1w6.js";import{Ed}from"./chunk-dzdf70yw.js";import{mV,EVn}from"./chunk-darxmw8c.js";import{dirname as o,join as t}from"path";var YNn=1e4;function JNn(e){try{let n=ym(a.CLAUDE_CODE_REMOTE_SESSION_ID??"","remote session id");return{sessionId:n,path:t(o(e),".ccr-dir-sync",`worker-${n}.json`)}}catch{return null}}function QNn(e){let n=EVn(e,(r)=>{J("error","dir_sync_lane_verdict_listener_threw",{verdict:e,rejected:!0,first:r})});switch(n.kind){case"delivered":if(n.threw.length>0)J("error","dir_sync_lane_verdict_listener_threw",{verdict:e,listeners:n.listeners,threw:n.threw.length,first:n.threw[0]});return;case"out_of_order":J("error","dir_sync_lane_verdict_out_of_order",{verdict:e,basis:n.basis});return;case"repeat":case"queued":return}}function xot(e){mV.of(G()).stage(e)}function ZNn(e){mV.of(G()).markCopyCleared(e)}async function SJt(){let e=await Ed();if(e)mV.of(G()).openGate();return e}
export{YNn,JNn,QNn,xot,ZNn,SJt};
