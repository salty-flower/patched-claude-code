// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{c}from"./chunk-ny2cqbmq.js";import{i}from"./chunk-dj0gyv94.js";import{g}from"./chunk-53e7d9dh.js";import{pge,cMe,cDr}from"./chunk-cnymzkdz.js";import{nL,nH}from"./chunk-k5vb4gwq.js";import{yEs,gM}from"./chunk-na9nw575.js";import{Tis}from"./chunk-93acyv6h.js";import{J2,i4t}from"./chunk-gs8h5etb.js";function KQr(o,e,{trigger:a,offerBypass:s=!0}={}){let t=qQr(o,e,{offerBypass:s});return{level:o,currentMode:e.mode,nextMode:t,context:nH(e.mode,t,e,a)}}function qQr(o,e,{offerBypass:a=!0}={}){let s=cDr()!==void 0,t=e.mode==="plan"?e.prePlanMode??"plan":e.mode,r=pge(o,{isAutoModeAvailable:J2(e),isBypassPermissionsModeAvailable:a&&i4t(e)&&(!s||t==="bypassPermissions")},e.proactivityBaseline?.mode),n=e.proactivityBaseline?.mode,d=r==="acceptEdits"&&n==="acceptEdits"?n:gM(e)?void 0:t;return cMe(o,r,d)===void 0?r:"default"}function vis(o,e,a,{offerBypass:s=!0}={}){let t;if(e((r)=>{if(r.proactivityLevel===o)return r;let n=KQr(o,r.toolPermissionContext,{offerBypass:s});return t={from:r.proactivityLevel,toMode:n.nextMode,modeChanged:n.nextMode!==n.currentMode},{...r,proactivityLevel:o,toolPermissionContext:{...n.context,mode:n.nextMode,startupModeDecidedByProactivityLevel:void 0}}}),t===void 0)return;if(m(o,a,{source:"sdk_host",from:t.from,toMode:t.toMode}),t.modeChanged||yEs(t.from,o))setImmediate(()=>{nL.emit()})}function m(o,e,{source:a,from:s,toMode:t}){Tis(o,e),i("tengu_proactivity_cycle",{level:c(o),from:c(s),to_mode:c(t),source:c(a)}),g("proactivity_cycle")}
export{KQr,qQr,vis};
