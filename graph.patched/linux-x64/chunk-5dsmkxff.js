// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{c}from"./chunk-fr28a3he.js";import{i}from"./chunk-h723y8sa.js";import{g}from"./chunk-rhe3yjtx.js";import{Lfe,TIe,bxr}from"./chunk-2m9cwk86.js";import{w0,SH}from"./chunk-511q1ycy.js";import{Tps,VO}from"./chunk-38nf1dnm.js";import{qJo}from"./chunk-1a9y4pzj.js";import{rz,nqt}from"./chunk-357vgdxy.js";function m5r(o,e,{trigger:a,offerBypass:s=!0}={}){let t=g5r(o,e,{offerBypass:s});return{level:o,currentMode:e.mode,nextMode:t,context:SH(e.mode,t,e,a)}}function g5r(o,e,{offerBypass:a=!0}={}){let s=bxr()!==void 0,t=e.mode==="plan"?e.prePlanMode??"plan":e.mode,r=Lfe(o,{isAutoModeAvailable:rz(e),isBypassPermissionsModeAvailable:a&&nqt(e)&&(!s||t==="bypassPermissions")},e.proactivityBaseline?.mode),n=e.proactivityBaseline?.mode,d=r==="acceptEdits"&&n==="acceptEdits"?n:VO(e)?void 0:t;return TIe(o,r,d)===void 0?r:"default"}function GJo(o,e,a,{offerBypass:s=!0}={}){let t;if(e((r)=>{if(r.proactivityLevel===o)return r;let n=m5r(o,r.toolPermissionContext,{offerBypass:s});return t={from:r.proactivityLevel,toMode:n.nextMode,modeChanged:n.nextMode!==n.currentMode},{...r,proactivityLevel:o,toolPermissionContext:{...n.context,mode:n.nextMode,startupModeDecidedByProactivityLevel:void 0}}}),t===void 0)return;if(m(o,a,{source:"sdk_host",from:t.from,toMode:t.toMode}),t.modeChanged||Tps(t.from,o))setImmediate(()=>{w0.emit()})}function m(o,e,{source:a,from:s,toMode:t}){qJo(o,e),i("tengu_proactivity_cycle",{level:c(o),from:c(s),to_mode:c(t),source:c(a)}),g("proactivity_cycle")}
export{m5r,g5r,GJo};
