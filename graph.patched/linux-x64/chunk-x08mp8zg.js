// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{c}from"./chunk-m3epja3j.js";import{i}from"./chunk-sr4gfmny.js";import{g}from"./chunk-yzndvntb.js";import{ige,rMe,jDr}from"./chunk-45bkz003.js";import{QL,ZH}from"./chunk-e2xykthf.js";import{Ows,uM}from"./chunk-rncrmfyt.js";import{Xss}from"./chunk-30q3v454.js";import{jG,qYt}from"./chunk-7nbwk7rn.js";function R7r(o,e,{trigger:a,offerBypass:s=!0}={}){let t=x7r(o,e,{offerBypass:s});return{level:o,currentMode:e.mode,nextMode:t,context:ZH(e.mode,t,e,a)}}function x7r(o,e,{offerBypass:a=!0}={}){let s=jDr()!==void 0,t=e.mode==="plan"?e.prePlanMode??"plan":e.mode,r=ige(o,{isAutoModeAvailable:jG(e),isBypassPermissionsModeAvailable:a&&qYt(e)&&(!s||t==="bypassPermissions")},e.proactivityBaseline?.mode),n=e.proactivityBaseline?.mode,d=r==="acceptEdits"&&n==="acceptEdits"?n:uM(e)?void 0:t;return rMe(o,r,d)===void 0?r:"default"}function Vss(o,e,a,{offerBypass:s=!0}={}){let t;if(e((r)=>{if(r.proactivityLevel===o)return r;let n=R7r(o,r.toolPermissionContext,{offerBypass:s});return t={from:r.proactivityLevel,toMode:n.nextMode,modeChanged:n.nextMode!==n.currentMode},{...r,proactivityLevel:o,toolPermissionContext:{...n.context,mode:n.nextMode,startupModeDecidedByProactivityLevel:void 0}}}),t===void 0)return;if(m(o,a,{source:"sdk_host",from:t.from,toMode:t.toMode}),t.modeChanged||Ows(t.from,o))setImmediate(()=>{QL.emit()})}function m(o,e,{source:a,from:s,toMode:t}){Xss(o,e),i("tengu_proactivity_cycle",{level:c(o),from:c(s),to_mode:c(t),source:c(a)}),g("proactivity_cycle")}
export{R7r,x7r,Vss};
