// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{GNe}from"./chunk-40zfdkve.js";import{nTt}from"./chunk-dn1ng2gf.js";import{lBn}from"./chunk-27hard4f.js";import{iBn}from"./chunk-dje8e1b5.js";import{Oi}from"./chunk-r147enn1.js";import{fBn}from"./chunk-2bm86z1h.js";import{Xp}from"./chunk-yt8z1z01.js";import{oSe}from"./chunk-nf802w0w.js";function a(e,r){return Object.entries(e.frameUrls??{}).find(([i,s])=>s?.url!==void 0&&!oSe(i)&&Oi(s.url)===r)?.[0]}function l(e,r){return(e.workshopVerifiedSlugs??[]).includes(r)||Object.entries(e.frameUrls??{}).some(([i,s])=>s?.url!==void 0&&Oi(s.url)===r&&nTt(i))}function qae(e,r){return{ownPublishes:GNe(e,r),workshopTelemetry:fBn(e,r),whiteboardTelemetry:iBn(e,r),prReviewTargets:lBn(e,r),recordedPages:{isWorkshopPage:(i)=>l(e(),i),localSourcePath:(i)=>a(e(),i)}}}function hit(){let e={};return qae(()=>e,(r)=>{e=r(e)})}var _it={assign:()=>Xp[0],get:()=>{return}};function zae(e){return{assign(r){let i=e.get(),s=i.assignments.get(r);if(s)return s;let t=Xp[i.index%Xp.length];return e.set((o)=>{if(o.assignments.has(r))return o;let n=new Map(o.assignments);return n.set(r,t),{assignments:n,index:o.index+1}}),t},get(r){return e.get().assignments.get(r)}}}var C8=Object.freeze({bridge:void 0,channel:void 0});class _Pt{#e=void 0;#r=void 0;get bridge(){return this.#e}get channel(){return this.#r}connectBridge(e){this.#e=e}disconnectBridge(){this.#e=void 0}setChannel(e){this.#r=e}}
export{qae,hit,_it,zae,C8,_Pt};
