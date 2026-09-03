// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{VPe}from"./chunk-hgrr0xwr.js";import{nwt}from"./chunk-5z2v5rxd.js";import{WBn}from"./chunk-hddmtt3h.js";import{BBn}from"./chunk-rwrb3kpd.js";import{Ma}from"./chunk-sw1cad4q.js";import{KBn}from"./chunk-bvfn8qzj.js";import{sf}from"./chunk-scv00ktt.js";import{lSe}from"./chunk-z6rpfy1x.js";function a(e,r){return Object.entries(e.frameUrls??{}).find(([i,s])=>s?.url!==void 0&&!lSe(i)&&Ma(s.url)===r)?.[0]}function l(e,r){return(e.workshopVerifiedSlugs??[]).includes(r)||Object.entries(e.frameUrls??{}).some(([i,s])=>s?.url!==void 0&&Ma(s.url)===r&&nwt(i))}function fle(e,r){return{ownPublishes:VPe(e,r),workshopTelemetry:KBn(e,r),whiteboardTelemetry:BBn(e,r),prReviewTargets:WBn(e,r),recordedPages:{isWorkshopPage:(i)=>l(e(),i),localSourcePath:(i)=>a(e(),i)}}}function Sst(){let e={};return fle(()=>e,(r)=>{e=r(e)})}var bst={assign:()=>sf[0],get:()=>{return}};function mle(e){return{assign(r){let i=e.get(),s=i.assignments.get(r);if(s)return s;let t=sf[i.index%sf.length];return e.set((o)=>{if(o.assignments.has(r))return o;let n=new Map(o.assignments);return n.set(r,t),{assignments:n,index:o.index+1}}),t},get(r){return e.get().assignments.get(r)}}}var W8=Object.freeze({bridge:void 0,channel:void 0});class NPt{#e=void 0;#r=void 0;get bridge(){return this.#e}get channel(){return this.#r}connectBridge(e){this.#e=e}disconnectBridge(){this.#e=void 0}setChannel(e){this.#r=e}}
export{fle,Sst,bst,mle,W8,NPt};
