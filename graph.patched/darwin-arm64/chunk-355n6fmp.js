// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{c}from"./chunk-ydpbzmt4.js";import{a}from"./chunk-wq923bwc.js";import{g}from"./chunk-wn8xtaqg.js";import{i_e,RDe,D2r}from"./chunk-fdkh5k16.js";import{CN,wD}from"./chunk-nbjc7zk5.js";import{qHs,T0}from"./chunk-31gxg38t.js";import{fbs}from"./chunk-npdjjgp0.js";import{i6,W7t}from"./chunk-rjzvrqhh.js";function Ydo(o,e,{trigger:n,offerBypass:s=!0}={}){let t=Xdo(o,e,{offerBypass:s});return{level:o,currentMode:e.mode,nextMode:t,context:wD(e.mode,t,e,n)}}function Xdo(o,e,{offerBypass:n=!0}={}){let s=D2r()!==void 0,t=e.mode==="plan"?e.prePlanMode??"plan":e.mode,i=i_e(o,{isAutoModeAvailable:i6(e),isBypassPermissionsModeAvailable:n&&W7t(e)&&(!s||t==="bypassPermissions")},e.proactivityBaseline?.mode),r=e.proactivityBaseline?.mode,d=i==="acceptEdits"&&r==="acceptEdits"?r:T0(e)?void 0:t;return RDe(o,i,d)===void 0?i:"default"}function dbs(o,e,n,{offerBypass:s=!0}={}){let t;if(e((i)=>{if(i.proactivityLevel===o)return i;let r=Ydo(o,i.toolPermissionContext,{offerBypass:s});return t={from:i.proactivityLevel,toMode:r.nextMode,modeChanged:r.nextMode!==r.currentMode},{...i,proactivityLevel:o,toolPermissionContext:{...r.context,mode:r.nextMode,startupModeDecidedByProactivityLevel:void 0}}}),t===void 0)return;if(m(o,n,{source:"sdk_host",from:t.from,toMode:t.toMode}),t.modeChanged||qHs(t.from,o))setImmediate(()=>{CN.emit()})}function m(o,e,{source:n,from:s,toMode:t}){fbs(o,e),a("tengu_proactivity_cycle",{level:c(o),from:c(s),to_mode:c(t),source:c(n)}),g("proactivity_cycle")}
export{Ydo,Xdo,dbs};
