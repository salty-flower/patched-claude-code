// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{W}from"./chunk-g4zaymy2.js";import{Uf}from"./chunk-j7mzcbtg.js";import{a}from"./chunk-bn8q5mbz.js";import{Y}from"./chunk-d1bcvf2q.js";import{Kl}from"./chunk-1phnr9a2.js";import{M9}from"./chunk-j5h9ds58.js";import{CWn}from"./chunk-cg1hdvg4.js";import{dirname as o,join as t}from"path";var q0n=1e4;function G0n(e){try{let n=Uf(a.CLAUDE_CODE_REMOTE_SESSION_ID??"","remote session id");return{sessionId:n,path:t(o(e),".ccr-dir-sync",`worker-${n}.json`)}}catch{return null}}function V0n(e){let n=CWn(e,(r)=>{Y("error","dir_sync_lane_verdict_listener_threw",{verdict:e,rejected:!0,first:r})});switch(n.kind){case"delivered":if(n.threw.length>0)Y("error","dir_sync_lane_verdict_listener_threw",{verdict:e,listeners:n.listeners,threw:n.threw.length,first:n.threw[0]});return;case"out_of_order":Y("error","dir_sync_lane_verdict_out_of_order",{verdict:e,basis:n.basis});return;case"repeat":case"queued":return}}function pJe(e){M9.of(W()).stage(e)}function K0n(e){M9.of(W()).markCopyCleared(e)}async function VWt(){let e=await Kl();if(e)M9.of(W()).openGate();return e}
export{q0n,G0n,V0n,pJe,K0n,VWt};
