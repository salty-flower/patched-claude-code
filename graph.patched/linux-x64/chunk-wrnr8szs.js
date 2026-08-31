// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{W}from"./chunk-30zk17wm.js";import{bm}from"./chunk-m3zmmvh7.js";import{a}from"./chunk-m9gbfvns.js";import{X}from"./chunk-3qzpxayw.js";import{Ec}from"./chunk-8p98a477.js";import{N4}from"./chunk-h6btyxas.js";import{CYn}from"./chunk-ky1jd84q.js";import{dirname as o,join as t}from"path";var H0n=1e4;function w0n(e){try{let n=bm(a.CLAUDE_CODE_REMOTE_SESSION_ID??"","remote session id");return{sessionId:n,path:t(o(e),".ccr-dir-sync",`worker-${n}.json`)}}catch{return null}}function E0n(e){let n=CYn(e,(r)=>{X("error","dir_sync_lane_verdict_listener_threw",{verdict:e,rejected:!0,first:r})});switch(n.kind){case"delivered":if(n.threw.length>0)X("error","dir_sync_lane_verdict_listener_threw",{verdict:e,listeners:n.listeners,threw:n.threw.length,first:n.threw[0]});return;case"out_of_order":X("error","dir_sync_lane_verdict_out_of_order",{verdict:e,basis:n.basis});return;case"repeat":case"queued":return}}function Let(e){N4.of(W()).stage(e)}function A0n(e){N4.of(W()).markCopyCleared(e)}async function d6t(){let e=await Ec();if(e)N4.of(W()).openGate();return e}
export{H0n,w0n,E0n,Let,A0n,d6t};
