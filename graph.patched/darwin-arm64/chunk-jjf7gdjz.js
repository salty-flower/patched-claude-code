// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{jbr}from"./chunk-db6kxt0j.js";import{nnn}from"./chunk-fkya0v4e.js";import{Hzr}from"./chunk-j7y74hfc.js";import{Pzr}from"./chunk-sv42njem.js";import{ra}from"./chunk-hg1f9dgc.js";import{r3r}from"./chunk-vjmdxt9x.js";import{Xg}from"./chunk-qg652t2c.js";import{QSe}from"./chunk-h3bc7dkc.js";function a(e,r){return Object.entries(e.frameUrls??{}).find(([i,s])=>s?.url!==void 0&&!QSe(i)&&ra(s.url)===r)?.[0]}function l(e,r){return(e.workshopVerifiedSlugs??[]).includes(r)||Object.entries(e.frameUrls??{}).some(([i,s])=>s?.url!==void 0&&ra(s.url)===r&&nnn(i))}function NYn(e,r){return{ownPublishes:jbr(e,r),workshopTelemetry:r3r(e,r),whiteboardTelemetry:Pzr(e,r),prReviewTargets:Hzr(e,r),recordedPages:{isWorkshopPage:(i)=>l(e(),i),localSourcePath:(i)=>a(e(),i)}}}function G2t(){let e={};return NYn(()=>e,(r)=>{e=r(e)})}var z2t={assign:()=>Xg[0],get:()=>{return}};function hRe(e){return{assign(r){let i=e.get(),s=i.assignments.get(r);if(s)return s;let t=Xg[i.index%Xg.length];return e.set((o)=>{if(o.assignments.has(r))return o;let n=new Map(o.assignments);return n.set(r,t),{assignments:n,index:o.index+1}}),t},get(r){return e.get().assignments.get(r)}}}var rce=Object.freeze({bridge:void 0,channel:void 0});class fyn{#e=void 0;#r=void 0;get bridge(){return this.#e}get channel(){return this.#r}connectBridge(e){this.#e=e}disconnectBridge(){this.#e=void 0}setChannel(e){this.#r=e}}
export{NYn,G2t,z2t,hRe,rce,fyn};
