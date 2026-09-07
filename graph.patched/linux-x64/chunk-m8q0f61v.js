// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{LOe}from"./chunk-en57rccx.js";import{FHt}from"./chunk-qma1wep1.js";import{S1n}from"./chunk-k9ftx27v.js";import{_1n}from"./chunk-me0f42p6.js";import{Pi}from"./chunk-cwves0z5.js";import{v1n}from"./chunk-tcsz6c95.js";import{Xf}from"./chunk-grcazzk3.js";import{q_e}from"./chunk-21knstes.js";function a(e,r){return Object.entries(e.frameUrls??{}).find(([i,s])=>s?.url!==void 0&&!q_e(i)&&Pi(s.url)===r)?.[0]}function l(e,r){return(e.workshopVerifiedSlugs??[]).includes(r)||Object.entries(e.frameUrls??{}).some(([i,s])=>s?.url!==void 0&&Pi(s.url)===r&&FHt(i))}function Nae(e,r){return{ownPublishes:LOe(e,r),workshopTelemetry:v1n(e,r),whiteboardTelemetry:_1n(e,r),prReviewTargets:S1n(e,r),recordedPages:{isWorkshopPage:(i)=>l(e(),i),localSourcePath:(i)=>a(e(),i)}}}function nit(){let e={};return Nae(()=>e,(r)=>{e=r(e)})}var rit={assign:()=>Xf[0],get:()=>{return}};function Fae(e){return{assign(r){let i=e.get(),s=i.assignments.get(r);if(s)return s;let t=Xf[i.index%Xf.length];return e.set((o)=>{if(o.assignments.has(r))return o;let n=new Map(o.assignments);return n.set(r,t),{assignments:n,index:o.index+1}}),t},get(r){return e.get().assignments.get(r)}}}var y6=Object.freeze({bridge:void 0,channel:void 0});class tPt{#e=void 0;#r=void 0;get bridge(){return this.#e}get channel(){return this.#r}connectBridge(e){this.#e=e}disconnectBridge(){this.#e=void 0}setChannel(e){this.#r=e}}
export{Nae,nit,rit,Fae,y6,tPt};
