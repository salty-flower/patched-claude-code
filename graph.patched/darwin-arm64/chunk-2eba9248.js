// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{ERn}from"./chunk-xjr78gbw.js";import{PRt}from"./chunk-rvrtf80e.js";import{cqn}from"./chunk-j1vx8dsw.js";import{aqn}from"./chunk-cfgxpsah.js";import{Ki}from"./chunk-pv7bzc31.js";import{fqn}from"./chunk-yfwqxask.js";import{vf}from"./chunk-d6mvvjc5.js";import{WCe}from"./chunk-e55d0yhx.js";function a(e,r){return Object.entries(e.frameUrls??{}).find(([i,s])=>s?.url!==void 0&&!WCe(i)&&Ki(s.url)===r)?.[0]}function l(e,r){return(e.workshopVerifiedSlugs??[]).includes(r)||Object.entries(e.frameUrls??{}).some(([i,s])=>s?.url!==void 0&&Ki(s.url)===r&&PRt(i))}function lde(e,r){return{ownPublishes:ERn(e,r),workshopTelemetry:fqn(e,r),whiteboardTelemetry:aqn(e,r),prReviewTargets:cqn(e,r),recordedPages:{isWorkshopPage:(i)=>l(e(),i),localSourcePath:(i)=>a(e(),i)}}}function apt(){let e={};return lde(()=>e,(r)=>{e=r(e)})}var lpt={assign:()=>vf[0],get:()=>{return}};function cde(e){return{assign(r){let i=e.get(),s=i.assignments.get(r);if(s)return s;let t=vf[i.index%vf.length];return e.set((o)=>{if(o.assignments.has(r))return o;let n=new Map(o.assignments);return n.set(r,t),{assignments:n,index:o.index+1}}),t},get(r){return e.get().assignments.get(r)}}}var L7=Object.freeze({bridge:void 0,channel:void 0});class _1t{#e=void 0;#r=void 0;get bridge(){return this.#e}get channel(){return this.#r}connectBridge(e){this.#e=e}disconnectBridge(){this.#e=void 0}setChannel(e){this.#r=e}}
export{lde,apt,lpt,cde,L7,_1t};
