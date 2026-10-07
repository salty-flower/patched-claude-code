// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{d}from"./chunk-yffha6me.js";import{K5,EI}from"./chunk-qg5t30n7.js";import{i}from"./chunk-s90w5q15.js";import{y}from"./chunk-tzahwj8w.js";import{Rie}from"./chunk-w05br7qr.js";import{GBo}from"./chunk-9wqh5j7s.js";import{pAo}from"./chunk-g07q648k.js";import{uB,tDt}from"./chunk-8zrcd7kp.js";function aAr(e,o,{trigger:r,offerBypass:n=!0}={}){let t=lAr(e,o,{offerBypass:n});return{level:e,currentMode:o.mode,nextMode:t,context:EI(o.mode,t,o,r)}}function lAr(e,o,{offerBypass:r=!0}={}){return Rie(e,{isAutoModeAvailable:uB(o),isBypassPermissionsModeAvailable:r&&tDt(o)},o.proactivityBaseline?.mode)}function dAo(e,o,r,{offerBypass:n=!0}={}){let t;if(o((s)=>{if(s.proactivityLevel===e)return s;let a=aAr(e,s.toolPermissionContext,{offerBypass:n});return t={from:s.proactivityLevel,toMode:a.nextMode,modeChanged:a.nextMode!==a.currentMode},{...s,proactivityLevel:e,toolPermissionContext:{...a.context,mode:a.nextMode,startupModeDecidedByProactivityLevel:void 0}}}),t===void 0)return;if(c(e,r,{source:"sdk_host",from:t.from,toMode:t.toMode}),t.modeChanged||GBo(t.from,e))setImmediate(()=>{K5.emit()})}function c(e,o,{source:r,from:n,toMode:t}){pAo(e,o),i("tengu_proactivity_cycle",{level:d(e),from:d(n),to_mode:d(t),source:d(r)}),y("proactivity_cycle")}
export{aAr,lAr,dAo};
