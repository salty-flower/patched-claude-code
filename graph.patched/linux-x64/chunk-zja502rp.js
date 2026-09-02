// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{NRe}from"./chunk-ad1ednc8.js";import{k_t}from"./chunk-txjw2z5s.js";import{PFn}from"./chunk-m3f5bst8.js";import{xFn}from"./chunk-qaedkr42.js";import{sl}from"./chunk-41nyh22r.js";import{WFn}from"./chunk-z3j5ftvc.js";import{tp}from"./chunk-267gdh09.js";function a(e,r){return(e.workshopVerifiedSlugs??[]).includes(r)||Object.entries(e.frameUrls??{}).some(([i,s])=>s?.url!==void 0&&sl(s.url)===r&&k_t(i))}function yse(e,r){return{ownPublishes:NRe(e,r),workshopTelemetry:WFn(e,r),whiteboardTelemetry:xFn(e,r),prReviewTargets:PFn(e,r),recordedPages:{isWorkshopPage:(i)=>a(e(),i)}}}function qnt(){let e={};return yse(()=>e,(r)=>{e=r(e)})}var Knt={assign:()=>tp[0],get:()=>{return}};function _se(e){return{assign(r){let i=e.get(),s=i.assignments.get(r);if(s)return s;let o=tp[i.index%tp.length];return e.set((t)=>{if(t.assignments.has(r))return t;let n=new Map(t.assignments);return n.set(r,o),{assignments:n,index:t.index+1}}),o},get(r){return e.get().assignments.get(r)}}}var O3=Object.freeze({bridge:void 0,channel:void 0});class vRt{#e=void 0;#r=void 0;get bridge(){return this.#e}get channel(){return this.#r}connectBridge(e){this.#e=e}disconnectBridge(){this.#e=void 0}setChannel(e){this.#r=e}}
export{yse,qnt,Knt,_se,O3,vRt};
