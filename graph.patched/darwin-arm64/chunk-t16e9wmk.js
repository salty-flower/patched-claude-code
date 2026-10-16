// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{c}from"./chunk-dnq93t1z.js";import{i}from"./chunk-52pf9qag.js";import{g}from"./chunk-n1esck2w.js";import{jfe,OIe,Bxr}from"./chunk-1qk9hbqf.js";import{CD,vH}from"./chunk-vkm1r9kt.js";import{cfs,YO}from"./chunk-996thspe.js";import{kJo}from"./chunk-7bhff7ge.js";import{f2,hqt}from"./chunk-sgnw53ce.js";function I5r(o,e,{trigger:a,offerBypass:s=!0}={}){let t=O5r(o,e,{offerBypass:s});return{level:o,currentMode:e.mode,nextMode:t,context:vH(e.mode,t,e,a)}}function O5r(o,e,{offerBypass:a=!0}={}){let s=Bxr()!==void 0,t=e.mode==="plan"?e.prePlanMode??"plan":e.mode,r=jfe(o,{isAutoModeAvailable:f2(e),isBypassPermissionsModeAvailable:a&&hqt(e)&&(!s||t==="bypassPermissions")},e.proactivityBaseline?.mode),n=e.proactivityBaseline?.mode,d=r==="acceptEdits"&&n==="acceptEdits"?n:YO(e)?void 0:t;return OIe(o,r,d)===void 0?r:"default"}function wJo(o,e,a,{offerBypass:s=!0}={}){let t;if(e((r)=>{if(r.proactivityLevel===o)return r;let n=I5r(o,r.toolPermissionContext,{offerBypass:s});return t={from:r.proactivityLevel,toMode:n.nextMode,modeChanged:n.nextMode!==n.currentMode},{...r,proactivityLevel:o,toolPermissionContext:{...n.context,mode:n.nextMode,startupModeDecidedByProactivityLevel:void 0}}}),t===void 0)return;if(m(o,a,{source:"sdk_host",from:t.from,toMode:t.toMode}),t.modeChanged||cfs(t.from,o))setImmediate(()=>{CD.emit()})}function m(o,e,{source:a,from:s,toMode:t}){kJo(o,e),i("tengu_proactivity_cycle",{level:c(o),from:c(s),to_mode:c(t),source:c(a)}),g("proactivity_cycle")}
export{I5r,O5r,wJo};
