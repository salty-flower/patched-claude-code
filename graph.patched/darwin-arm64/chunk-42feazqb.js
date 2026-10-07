// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{d}from"./chunk-hdvxmrfb.js";import{Q9,kI}from"./chunk-5vgtbtkf.js";import{i}from"./chunk-qbf9wv32.js";import{y}from"./chunk-e3gw32ew.js";import{Mie}from"./chunk-3f84vcqr.js";import{xBo}from"./chunk-y0b3kvx1.js";import{UAo}from"./chunk-ygzvy32p.js";import{vU,gMt}from"./chunk-z9krvjah.js";function bAr(e,o,{trigger:r,offerBypass:n=!0}={}){let t=wAr(e,o,{offerBypass:n});return{level:e,currentMode:o.mode,nextMode:t,context:kI(o.mode,t,o,r)}}function wAr(e,o,{offerBypass:r=!0}={}){return Mie(e,{isAutoModeAvailable:vU(o),isBypassPermissionsModeAvailable:r&&gMt(o)},o.proactivityBaseline?.mode)}function FAo(e,o,r,{offerBypass:n=!0}={}){let t;if(o((s)=>{if(s.proactivityLevel===e)return s;let a=bAr(e,s.toolPermissionContext,{offerBypass:n});return t={from:s.proactivityLevel,toMode:a.nextMode,modeChanged:a.nextMode!==a.currentMode},{...s,proactivityLevel:e,toolPermissionContext:{...a.context,mode:a.nextMode,startupModeDecidedByProactivityLevel:void 0}}}),t===void 0)return;if(c(e,r,{source:"sdk_host",from:t.from,toMode:t.toMode}),t.modeChanged||xBo(t.from,e))setImmediate(()=>{Q9.emit()})}function c(e,o,{source:r,from:n,toMode:t}){UAo(e,o),i("tengu_proactivity_cycle",{level:d(e),from:d(n),to_mode:d(t),source:d(r)}),y("proactivity_cycle")}
export{bAr,wAr,FAo};
