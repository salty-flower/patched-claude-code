// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{H_r}from"./chunk-7d496qn0.js";import{Oun}from"./chunk-hvbqw811.js";import{Kro}from"./chunk-fgkw7xbq.js";import{Vro}from"./chunk-vkdp8335.js";import{ga}from"./chunk-kt9hyg55.js";import{dco}from"./chunk-ft7w961v.js";import{Fh}from"./chunk-swv3mpcg.js";import{ple}from"./chunk-kmg6r51d.js";import{IB}from"./chunk-8e9fn683.js";function a(e,r){return Object.entries(e.frameUrls??{}).find(([o,t])=>t?.url!==void 0&&!ple(o)&&ga(t.url)===r)?.[0]}function l(e,r){return(e.workshopVerifiedSlugs??[]).includes(r)||Object.entries(e.frameUrls??{}).some(([o,t])=>t?.url!==void 0&&ga(t.url)===r&&Oun(o))}var d=Object.freeze({}),m=IB("artifactReadConsentSlugs",d),c=IB("artifactConsentEpoch",0);function Mlr(e,r){return{ownPublishes:H_r(e,r),workshopTelemetry:dco(e,r),whiteboardTelemetry:Vro(e,r),prReviewTargets:Kro(e,r),recordedPages:{isWorkshopPage:(o)=>l(e(),o),localSourcePath:(o)=>a(e(),o)},sharedReadConsent:m(e,r),consentEpoch:c(e,r)}}function ZWe(){let e={};return Mlr(()=>e,(r)=>{e=r(e)})}var e6e={assign:()=>Fh[0],get:()=>{return}};function cHe(e){return{assign(r){let o=e.get(),t=o.assignments.get(r);if(t)return t;let i=Fh[o.index%Fh.length];return e.set((s)=>{if(s.assignments.has(r))return s;let n=new Map(s.assignments);return n.set(r,i),{assignments:n,index:s.index+1}}),i},get(r){return e.get().assignments.get(r)}}}var P8=Object.freeze({bridge:void 0,channel:void 0});class ARn{#e=void 0;#r=void 0;get bridge(){return this.#e}get channel(){return this.#r}connectBridge(e){this.#e=e}disconnectBridge(){this.#e=void 0}setChannel(e){this.#r=e}}
export{Mlr,ZWe,e6e,cHe,P8,ARn};
