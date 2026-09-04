// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{q}from"./chunk-yhfssb7x.js";import{bm}from"./chunk-nyt0ga9k.js";import{a}from"./chunk-g2ngvza5.js";import{Y}from"./chunk-w7eyakhd.js";import{Ru}from"./chunk-hw0vyvfv.js";import{XV,z8n}from"./chunk-5e9qk3ys.js";import{dirname as o,join as t}from"path";var rUn=1e4;function oUn(e){try{let n=bm(a.CLAUDE_CODE_REMOTE_SESSION_ID??"","remote session id");return{sessionId:n,path:t(o(e),".ccr-dir-sync",`worker-${n}.json`)}}catch{return null}}function iUn(e){let n=z8n(e,(r)=>{Y("error","dir_sync_lane_verdict_listener_threw",{verdict:e,rejected:!0,first:r})});switch(n.kind){case"delivered":if(n.threw.length>0)Y("error","dir_sync_lane_verdict_listener_threw",{verdict:e,listeners:n.listeners,threw:n.threw.length,first:n.threw[0]});return;case"out_of_order":Y("error","dir_sync_lane_verdict_out_of_order",{verdict:e,basis:n.basis});return;case"repeat":case"queued":return}}function lst(e){XV.of(q()).stage(e)}function sUn(e){XV.of(q()).markCopyCleared(e)}async function JZt(){let e=await Ru();if(e)XV.of(q()).openGate();return e}
export{rUn,oUn,iUn,lst,sUn,JZt};
