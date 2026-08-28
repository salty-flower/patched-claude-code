// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{V0e}from"./chunk-x6waayc7.js";import{Bmt}from"./chunk-jj2f6f5c.js";import{QOn}from"./chunk-ejpgg6c3.js";import{XOn}from"./chunk-fy40f10k.js";import{Rl}from"./chunk-72tw8dma.js";import{uHn}from"./chunk-bqyxmn8a.js";import{Bd}from"./chunk-qn0p3nv8.js";function a(e,r){return(e.workshopVerifiedSlugs??[]).includes(r)||Object.entries(e.frameUrls??{}).some(([i,s])=>s?.url!==void 0&&Rl(s.url)===r&&Bmt(i))}function uoe(e,r){return{ownPublishes:V0e(e,r),workshopTelemetry:uHn(e,r),whiteboardTelemetry:XOn(e,r),prReviewTargets:QOn(e,r),recordedPages:{isWorkshopPage:(i)=>a(e(),i)}}}function Fet(){let e={};return uoe(()=>e,(r)=>{e=r(e)})}var $et={assign:()=>Bd[0],get:()=>{return}};function gfe(e){return{assign(r){let i=e.get(),s=i.assignments.get(r);if(s)return s;let o=Bd[i.index%Bd.length];return e.set((t)=>{if(t.assignments.has(r))return t;let n=new Map(t.assignments);return n.set(r,o),{assignments:n,index:t.index+1}}),o},get(r){return e.get().assignments.get(r)}}}var UG=Object.freeze({bridge:void 0,channel:void 0});class rVt{#e=void 0;#r=void 0;get bridge(){return this.#e}get channel(){return this.#r}connectBridge(e){this.#e=e}disconnectBridge(){this.#e=void 0}setChannel(e){this.#r=e}}
export{uoe,Fet,$et,gfe,UG,rVt};
