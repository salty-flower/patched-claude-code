// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{d}from"./chunk-76anb6yt.js";import{i}from"./chunk-4nygtnjw.js";import{g}from"./chunk-2hb5361r.js";import{pde,HTe,y_r}from"./chunk-9vcaezw1.js";import{dM,i0}from"./chunk-xv9wnb67.js";import{NJo,AI}from"./chunk-sfn1dbxq.js";import{oWo}from"./chunk-a0vsphaw.js";import{Dj,UBt}from"./chunk-nw76x9y3.js";function U1r(o,e,{trigger:a,offerBypass:s=!0}={}){let t=B1r(o,e,{offerBypass:s});return{level:o,currentMode:e.mode,nextMode:t,context:i0(e.mode,t,e,a)}}function B1r(o,e,{offerBypass:a=!0}={}){let s=y_r()!==void 0,t=e.mode==="plan"?e.prePlanMode??"plan":e.mode,r=pde(o,{isAutoModeAvailable:Dj(e),isBypassPermissionsModeAvailable:a&&UBt(e)&&(!s||t==="bypassPermissions")},e.proactivityBaseline?.mode),n=e.proactivityBaseline?.mode,c=r==="acceptEdits"&&n==="acceptEdits"?n:AI(e)?void 0:t;return HTe(o,r,c)===void 0?r:"default"}function tWo(o,e,a,{offerBypass:s=!0}={}){let t;if(e((r)=>{if(r.proactivityLevel===o)return r;let n=U1r(o,r.toolPermissionContext,{offerBypass:s});return t={from:r.proactivityLevel,toMode:n.nextMode,modeChanged:n.nextMode!==n.currentMode},{...r,proactivityLevel:o,toolPermissionContext:{...n.context,mode:n.nextMode,startupModeDecidedByProactivityLevel:void 0}}}),t===void 0)return;if(m(o,a,{source:"sdk_host",from:t.from,toMode:t.toMode}),t.modeChanged||NJo(t.from,o))setImmediate(()=>{dM.emit()})}function m(o,e,{source:a,from:s,toMode:t}){oWo(o,e),i("tengu_proactivity_cycle",{level:d(o),from:d(s),to_mode:d(t),source:d(a)}),g("proactivity_cycle")}
export{U1r,B1r,tWo};
