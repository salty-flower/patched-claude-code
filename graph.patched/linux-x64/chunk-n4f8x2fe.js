// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{U}from"./chunk-bj7g1p32.js";import{Zp}from"./chunk-em2nh00t.js";import{a}from"./chunk-td8fcebs.js";import{V}from"./chunk-30dff23n.js";import{du}from"./chunk-j8jhb83r.js";import{Cqn,F9}from"./chunk-y3swhsrk.js";import{dirname as o,join as t}from"path";var FMn=1e4;function BMn(e){try{let n=Zp(a.CLAUDE_CODE_REMOTE_SESSION_ID??"","remote session id");return{sessionId:n,path:t(o(e),".ccr-dir-sync",`worker-${n}.json`)}}catch{return null}}function UMn(e){let n=Cqn(e,(r)=>{V("error","dir_sync_lane_verdict_listener_threw",{verdict:e,rejected:!0,first:r})});switch(n.kind){case"delivered":if(n.threw.length>0)V("error","dir_sync_lane_verdict_listener_threw",{verdict:e,listeners:n.listeners,threw:n.threw.length,first:n.threw[0]});return;case"out_of_order":V("error","dir_sync_lane_verdict_out_of_order",{verdict:e,basis:n.basis});return;case"repeat":case"queued":return}}function Ort(e){F9.of(U()).stage(e)}function jMn(e){F9.of(U()).markCopyCleared(e)}async function QXt(){let e=await du();if(e)F9.of(U()).openGate();return e}
export{FMn,BMn,UMn,Ort,jMn,QXt};
