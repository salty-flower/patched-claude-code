// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{d}from"./chunk-bkr1h20c.js";import{i}from"./chunk-nayw0pf7.js";import{y}from"./chunk-68vq239n.js";import{cle,pTe,gpr}from"./chunk-hxnfcf28.js";import{i9,XI}from"./chunk-pbrbnfk3.js";import{VKo,cP}from"./chunk-g263vvvn.js";import{E0o}from"./chunk-sc157kfd.js";import{c1,zNt}from"./chunk-38gbh28d.js";function _Dr(o,e,{trigger:a,offerBypass:s=!0}={}){let t=bDr(o,e,{offerBypass:s});return{level:o,currentMode:e.mode,nextMode:t,context:XI(e.mode,t,e,a)}}function bDr(o,e,{offerBypass:a=!0}={}){let s=gpr()!==void 0,t=e.mode==="plan"?e.prePlanMode??"plan":e.mode,r=cle(o,{isAutoModeAvailable:c1(e),isBypassPermissionsModeAvailable:a&&zNt(e)&&(!s||t==="bypassPermissions")},e.proactivityBaseline?.mode),n=e.proactivityBaseline?.mode,c=r==="acceptEdits"&&n==="acceptEdits"?n:cP(e)?void 0:t;return pTe(o,r,c)===void 0?r:"default"}function S0o(o,e,a,{offerBypass:s=!0}={}){let t;if(e((r)=>{if(r.proactivityLevel===o)return r;let n=_Dr(o,r.toolPermissionContext,{offerBypass:s});return t={from:r.proactivityLevel,toMode:n.nextMode,modeChanged:n.nextMode!==n.currentMode},{...r,proactivityLevel:o,toolPermissionContext:{...n.context,mode:n.nextMode,startupModeDecidedByProactivityLevel:void 0}}}),t===void 0)return;if(m(o,a,{source:"sdk_host",from:t.from,toMode:t.toMode}),t.modeChanged||VKo(t.from,o))setImmediate(()=>{i9.emit()})}function m(o,e,{source:a,from:s,toMode:t}){E0o(o,e),i("tengu_proactivity_cycle",{level:d(o),from:d(s),to_mode:d(t),source:d(a)}),y("proactivity_cycle")}
export{_Dr,bDr,S0o};
