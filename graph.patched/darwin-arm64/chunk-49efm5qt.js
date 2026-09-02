// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{G}from"./chunk-38213y7h.js";import{bm}from"./chunk-nqg8bykp.js";import{a}from"./chunk-w3k8bej2.js";import{Y}from"./chunk-7v2mj9b2.js";import{Ec}from"./chunk-zs0e8hh2.js";import{BG}from"./chunk-fy12d89p.js";import{P7n}from"./chunk-ppya84z7.js";import{dirname as o,join as t}from"path";var vDn=1e4;function RDn(e){try{let n=bm(a.CLAUDE_CODE_REMOTE_SESSION_ID??"","remote session id");return{sessionId:n,path:t(o(e),".ccr-dir-sync",`worker-${n}.json`)}}catch{return null}}function kDn(e){let n=P7n(e,(r)=>{Y("error","dir_sync_lane_verdict_listener_threw",{verdict:e,rejected:!0,first:r})});switch(n.kind){case"delivered":if(n.threw.length>0)Y("error","dir_sync_lane_verdict_listener_threw",{verdict:e,listeners:n.listeners,threw:n.threw.length,first:n.threw[0]});return;case"out_of_order":Y("error","dir_sync_lane_verdict_out_of_order",{verdict:e,basis:n.basis});return;case"repeat":case"queued":return}}function Oet(e){BG.of(G()).stage(e)}function HDn(e){BG.of(G()).markCopyCleared(e)}async function g8t(){let e=await Ec();if(e)BG.of(G()).openGate();return e}
export{vDn,RDn,kDn,Oet,HDn,g8t};
