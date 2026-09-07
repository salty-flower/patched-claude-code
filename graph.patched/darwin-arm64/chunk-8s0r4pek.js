// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{B}from"./chunk-zhtwayh2.js";import{tm}from"./chunk-7z7x82kj.js";import{a}from"./chunk-dq2s4wjn.js";import{z}from"./chunk-0qz53fdq.js";import{fu}from"./chunk-cthk1mhy.js";import{iqn,Vz}from"./chunk-1692k4g5.js";import{dirname as o,join as t}from"path";var gNn=1e4;function hNn(e){try{let n=tm(a.CLAUDE_CODE_REMOTE_SESSION_ID??"","remote session id");return{sessionId:n,path:t(o(e),".ccr-dir-sync",`worker-${n}.json`)}}catch{return null}}function _Nn(e){let n=iqn(e,(r)=>{z("error","dir_sync_lane_verdict_listener_threw",{verdict:e,rejected:!0,first:r})});switch(n.kind){case"delivered":if(n.threw.length>0)z("error","dir_sync_lane_verdict_listener_threw",{verdict:e,listeners:n.listeners,threw:n.threw.length,first:n.threw[0]});return;case"out_of_order":z("error","dir_sync_lane_verdict_out_of_order",{verdict:e,basis:n.basis});return;case"repeat":case"queued":return}}function Jrt(e){Vz.of(B()).stage(e)}function yNn(e){Vz.of(B()).markCopyCleared(e)}async function TYt(){let e=await fu();if(e)Vz.of(B()).openGate();return e}
export{gNn,hNn,_Nn,Jrt,yNn,TYt};
