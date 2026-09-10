// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{B}from"./chunk-cet8na02.js";import{Im}from"./chunk-12bhy101.js";import{a}from"./chunk-qymratxs.js";import{G}from"./chunk-7rf51wwn.js";import{Ru}from"./chunk-80gey2qt.js";import{j5,AJn}from"./chunk-tavwd3sq.js";import{dirname as o,join as t}from"path";var vjn=1e4;function Tjn(e){try{let n=Im(a.CLAUDE_CODE_REMOTE_SESSION_ID??"","remote session id");return{sessionId:n,path:t(o(e),".ccr-dir-sync",`worker-${n}.json`)}}catch{return null}}function kjn(e){let n=AJn(e,(r)=>{G("error","dir_sync_lane_verdict_listener_threw",{verdict:e,rejected:!0,first:r})});switch(n.kind){case"delivered":if(n.threw.length>0)G("error","dir_sync_lane_verdict_listener_threw",{verdict:e,listeners:n.listeners,threw:n.threw.length,first:n.threw[0]});return;case"out_of_order":G("error","dir_sync_lane_verdict_out_of_order",{verdict:e,basis:n.basis});return;case"repeat":case"queued":return}}function Slt(e){j5.of(B()).stage(e)}function Rjn(e){j5.of(B()).markCopyCleared(e)}async function ynn(){let e=await Ru();if(e)j5.of(B()).openGate();return e}
export{vjn,Tjn,kjn,Slt,Rjn,ynn};
