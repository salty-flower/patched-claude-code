// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{d}from"./chunk-eak61y8v.js";import{i}from"./chunk-ne43gjnt.js";import{y}from"./chunk-hz0a4zf6.js";import{gle,SCe,Lpr}from"./chunk-a6m0cyhg.js";import{lY,QI}from"./chunk-55mz6czc.js";import{IKo,pP}from"./chunk-nwqfvmza.js";import{QDo}from"./chunk-21qnpyga.js";import{wB,oFt}from"./chunk-vg0f9ex4.js";function MMr(o,e,{trigger:a,offerBypass:s=!0}={}){let t=DMr(o,e,{offerBypass:s});return{level:o,currentMode:e.mode,nextMode:t,context:QI(e.mode,t,e,a)}}function DMr(o,e,{offerBypass:a=!0}={}){let s=Lpr()!==void 0,t=e.mode==="plan"?e.prePlanMode??"plan":e.mode,r=gle(o,{isAutoModeAvailable:wB(e),isBypassPermissionsModeAvailable:a&&oFt(e)&&(!s||t==="bypassPermissions")},e.proactivityBaseline?.mode),n=e.proactivityBaseline?.mode,c=r==="acceptEdits"&&n==="acceptEdits"?n:pP(e)?void 0:t;return SCe(o,r,c)===void 0?r:"default"}function YDo(o,e,a,{offerBypass:s=!0}={}){let t;if(e((r)=>{if(r.proactivityLevel===o)return r;let n=MMr(o,r.toolPermissionContext,{offerBypass:s});return t={from:r.proactivityLevel,toMode:n.nextMode,modeChanged:n.nextMode!==n.currentMode},{...r,proactivityLevel:o,toolPermissionContext:{...n.context,mode:n.nextMode,startupModeDecidedByProactivityLevel:void 0}}}),t===void 0)return;if(m(o,a,{source:"sdk_host",from:t.from,toMode:t.toMode}),t.modeChanged||IKo(t.from,o))setImmediate(()=>{lY.emit()})}function m(o,e,{source:a,from:s,toMode:t}){QDo(o,e),i("tengu_proactivity_cycle",{level:d(o),from:d(s),to_mode:d(t),source:d(a)}),y("proactivity_cycle")}
export{MMr,DMr,YDo};
