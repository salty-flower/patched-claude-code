// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{z}from"./chunk-2vv5hpw3.js";import{Bf}from"./chunk-keye04cq.js";import{a}from"./chunk-g0kfvhx3.js";import{Y}from"./chunk-b16q8tvv.js";import{Kl}from"./chunk-4epqxaqg.js";import{D5}from"./chunk-hrvkymct.js";import{cqn}from"./chunk-9cqgggwr.js";import{dirname as o,join as t}from"path";var B0n=1e4;function U0n(e){try{let n=Bf(a.CLAUDE_CODE_REMOTE_SESSION_ID??"","remote session id");return{sessionId:n,path:t(o(e),".ccr-dir-sync",`worker-${n}.json`)}}catch{return null}}function j0n(e){let n=cqn(e,(r)=>{Y("error","dir_sync_lane_verdict_listener_threw",{verdict:e,rejected:!0,first:r})});switch(n.kind){case"delivered":if(n.threw.length>0)Y("error","dir_sync_lane_verdict_listener_threw",{verdict:e,listeners:n.listeners,threw:n.threw.length,first:n.threw[0]});return;case"out_of_order":Y("error","dir_sync_lane_verdict_out_of_order",{verdict:e,basis:n.basis});return;case"repeat":case"queued":return}}function cJe(e){D5.of(z()).stage(e)}function z0n(e){D5.of(z()).markCopyCleared(e)}async function W3t(){let e=await Kl();if(e)D5.of(z()).openGate();return e}
export{B0n,U0n,j0n,cJe,z0n,W3t};
