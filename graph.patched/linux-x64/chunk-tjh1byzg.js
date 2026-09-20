// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{zGn}from"./chunk-dbsa1yc5.js";import{J1t}from"./chunk-g1ccvg33.js";import{Cdr}from"./chunk-03aqqdgn.js";import{Adr}from"./chunk-h26hzgj9.js";import{na}from"./chunk-2n66rk9w.js";import{Pdr}from"./chunk-nffpr3sm.js";import{Cm}from"./chunk-ck3gk161.js";import{fue}from"./chunk-v4zgc4qd.js";function a(e,r){return Object.entries(e.frameUrls??{}).find(([i,s])=>s?.url!==void 0&&!fue(i)&&na(s.url)===r)?.[0]}function l(e,r){return(e.workshopVerifiedSlugs??[]).includes(r)||Object.entries(e.frameUrls??{}).some(([i,s])=>s?.url!==void 0&&na(s.url)===r&&J1t(i))}function EAn(e,r){return{ownPublishes:zGn(e,r),workshopTelemetry:Pdr(e,r),whiteboardTelemetry:Adr(e,r),prReviewTargets:Cdr(e,r),recordedPages:{isWorkshopPage:(i)=>l(e(),i),localSourcePath:(i)=>a(e(),i)}}}function qEt(){let e={};return EAn(()=>e,(r)=>{e=r(e)})}var VEt={assign:()=>Cm[0],get:()=>{return}};function _ye(e){return{assign(r){let i=e.get(),s=i.assignments.get(r);if(s)return s;let t=Cm[i.index%Cm.length];return e.set((o)=>{if(o.assignments.has(r))return o;let n=new Map(o.assignments);return n.set(r,t),{assignments:n,index:o.index+1}}),t},get(r){return e.get().assignments.get(r)}}}var mee=Object.freeze({bridge:void 0,channel:void 0});class V3t{#e=void 0;#r=void 0;get bridge(){return this.#e}get channel(){return this.#r}connectBridge(e){this.#e=e}disconnectBridge(){this.#e=void 0}setChannel(e){this.#r=e}}
export{EAn,qEt,VEt,_ye,mee,V3t};
