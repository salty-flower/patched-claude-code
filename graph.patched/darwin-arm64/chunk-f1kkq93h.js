// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{vDe}from"./chunk-8n5p5wzk.js";import{qEt}from"./chunk-yfkxpgh0.js";import{gWn}from"./chunk-fdzh60qb.js";import{fWn}from"./chunk-q1ce3era.js";import{Ua}from"./chunk-gz6bzkxe.js";import{bWn}from"./chunk-8yrak6jv.js";import{df}from"./chunk-x9bmv596.js";import{wbe}from"./chunk-nzvg77nd.js";function a(e,r){return Object.entries(e.frameUrls??{}).find(([i,s])=>s?.url!==void 0&&!wbe(i)&&Ua(s.url)===r)?.[0]}function l(e,r){return(e.workshopVerifiedSlugs??[]).includes(r)||Object.entries(e.frameUrls??{}).some(([i,s])=>s?.url!==void 0&&Ua(s.url)===r&&qEt(i))}function pce(e,r){return{ownPublishes:vDe(e,r),workshopTelemetry:bWn(e,r),whiteboardTelemetry:fWn(e,r),prReviewTargets:gWn(e,r),recordedPages:{isWorkshopPage:(i)=>l(e(),i),localSourcePath:(i)=>a(e(),i)}}}function clt(){let e={};return pce(()=>e,(r)=>{e=r(e)})}var ult={assign:()=>df[0],get:()=>{return}};function fce(e){return{assign(r){let i=e.get(),s=i.assignments.get(r);if(s)return s;let t=df[i.index%df.length];return e.set((o)=>{if(o.assignments.has(r))return o;let n=new Map(o.assignments);return n.set(r,t),{assignments:n,index:o.index+1}}),t},get(r){return e.get().assignments.get(r)}}}var x7=Object.freeze({bridge:void 0,channel:void 0});class eLt{#e=void 0;#r=void 0;get bridge(){return this.#e}get channel(){return this.#r}connectBridge(e){this.#e=e}disconnectBridge(){this.#e=void 0}setChannel(e){this.#r=e}}
export{pce,clt,ult,fce,x7,eLt};
