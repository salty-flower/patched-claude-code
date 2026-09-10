// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{B}from"./chunk-sgyvc67j.js";import{Fm}from"./chunk-xn4w527t.js";import{a}from"./chunk-dv6tepz3.js";import{V}from"./chunk-40qbe5qj.js";import{Pu}from"./chunk-bf26k38d.js";import{i5,jer}from"./chunk-e55d0yhx.js";import{dirname as o,join as t}from"path";var gzn=1e4;function hzn(e){try{let n=Fm(a.CLAUDE_CODE_REMOTE_SESSION_ID??"","remote session id");return{sessionId:n,path:t(o(e),".ccr-dir-sync",`worker-${n}.json`)}}catch{return null}}function yzn(e){let n=jer(e,(r)=>{V("error","dir_sync_lane_verdict_listener_threw",{verdict:e,rejected:!0,first:r})});switch(n.kind){case"delivered":if(n.threw.length>0)V("error","dir_sync_lane_verdict_listener_threw",{verdict:e,listeners:n.listeners,threw:n.threw.length,first:n.threw[0]});return;case"out_of_order":V("error","dir_sync_lane_verdict_out_of_order",{verdict:e,basis:n.basis});return;case"repeat":case"queued":return}}function tut(e){i5.of(B()).stage(e)}function _zn(e){i5.of(B()).markCopyCleared(e)}async function Ron(){let e=await Pu();if(e)i5.of(B()).openGate();return e}
export{gzn,hzn,yzn,tut,_zn,Ron};
