// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{VCn}from"./chunk-1j0ppntz.js";import{mRt}from"./chunk-qh3d0k2y.js";import{H4n}from"./chunk-qwkze07d.js";import{I4n}from"./chunk-yxxjck7k.js";import{Ki}from"./chunk-z63fttm6.js";import{L4n}from"./chunk-axygzfx8.js";import{Ef}from"./chunk-30yzdvqs.js";import{DAe}from"./chunk-2byjyg85.js";function a(e,r){return Object.entries(e.frameUrls??{}).find(([i,s])=>s?.url!==void 0&&!DAe(i)&&Ki(s.url)===r)?.[0]}function l(e,r){return(e.workshopVerifiedSlugs??[]).includes(r)||Object.entries(e.frameUrls??{}).some(([i,s])=>s?.url!==void 0&&Ki(s.url)===r&&mRt(i))}function ede(e,r){return{ownPublishes:VCn(e,r),workshopTelemetry:L4n(e,r),whiteboardTelemetry:I4n(e,r),prReviewTargets:H4n(e,r),recordedPages:{isWorkshopPage:(i)=>l(e(),i),localSourcePath:(i)=>a(e(),i)}}}function qdt(){let e={};return ede(()=>e,(r)=>{e=r(e)})}var Vdt={assign:()=>Ef[0],get:()=>{return}};function tde(e){return{assign(r){let i=e.get(),s=i.assignments.get(r);if(s)return s;let t=Ef[i.index%Ef.length];return e.set((o)=>{if(o.assignments.has(r))return o;let n=new Map(o.assignments);return n.set(r,t),{assignments:n,index:o.index+1}}),t},get(r){return e.get().assignments.get(r)}}}var CX=Object.freeze({bridge:void 0,channel:void 0});class tFt{#e=void 0;#r=void 0;get bridge(){return this.#e}get channel(){return this.#r}connectBridge(e){this.#e=e}disconnectBridge(){this.#e=void 0}setChannel(e){this.#r=e}}
export{ede,qdt,Vdt,tde,CX,tFt};
