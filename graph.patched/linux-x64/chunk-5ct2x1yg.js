// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{W}from"./chunk-txfrkyzp.js";import{tp}from"./chunk-x7wz4nc0.js";import{a}from"./chunk-q2vrcqny.js";import{K}from"./chunk-pe91jxt9.js";import{ad}from"./chunk-67apvsf6.js";import{f6,KEr}from"./chunk-v4zgc4qd.js";import{dirname as o,join as t}from"path";var Cor=1e4;function Ror(e){try{let n=tp(a.CLAUDE_CODE_REMOTE_SESSION_ID??"","remote session id");return{sessionId:n,path:t(o(e),".ccr-dir-sync",`worker-${n}.json`)}}catch{return null}}function xor(e){let n=KEr(e,(r)=>{K("error","dir_sync_lane_verdict_listener_threw",{verdict:e,rejected:!0,first:r})});switch(n.kind){case"delivered":if(n.threw.length>0)K("error","dir_sync_lane_verdict_listener_threw",{verdict:e,listeners:n.listeners,threw:n.threw.length,first:n.threw[0]});return;case"out_of_order":K("error","dir_sync_lane_verdict_out_of_order",{verdict:e,basis:n.basis});return;case"repeat":case"queued":return}}function WSt(e){f6.of(W()).stage(e)}function Ior(e){f6.of(W()).markCopyCleared(e)}async function KSn(){let e=await ad();if(e)f6.of(W()).openGate();return e}
export{Cor,Ror,xor,WSt,Ior,KSn};
