// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{yGn}from"./chunk-0a9fy477.js";import{mUt}from"./chunk-5wznwy1x.js";import{cpr}from"./chunk-fzd26p8d.js";import{apr}from"./chunk-e8enxfny.js";import{ra}from"./chunk-pgetpn99.js";import{fpr}from"./chunk-t26emt81.js";import{Rm}from"./chunk-r75dbkc6.js";import{bue}from"./chunk-nq62bgfy.js";function a(e,r){return Object.entries(e.frameUrls??{}).find(([i,s])=>s?.url!==void 0&&!bue(i)&&ra(s.url)===r)?.[0]}function l(e,r){return(e.workshopVerifiedSlugs??[]).includes(r)||Object.entries(e.frameUrls??{}).some(([i,s])=>s?.url!==void 0&&ra(s.url)===r&&mUt(i))}function WCn(e,r){return{ownPublishes:yGn(e,r),workshopTelemetry:fpr(e,r),whiteboardTelemetry:apr(e,r),prReviewTargets:cpr(e,r),recordedPages:{isWorkshopPage:(i)=>l(e(),i),localSourcePath:(i)=>a(e(),i)}}}function rAt(){let e={};return WCn(()=>e,(r)=>{e=r(e)})}var oAt={assign:()=>Rm[0],get:()=>{return}};function Aye(e){return{assign(r){let i=e.get(),s=i.assignments.get(r);if(s)return s;let t=Rm[i.index%Rm.length];return e.set((o)=>{if(o.assignments.has(r))return o;let n=new Map(o.assignments);return n.set(r,t),{assignments:n,index:o.index+1}}),t},get(r){return e.get().assignments.get(r)}}}var bee=Object.freeze({bridge:void 0,channel:void 0});class lKt{#e=void 0;#r=void 0;get bridge(){return this.#e}get channel(){return this.#r}connectBridge(e){this.#e=e}disconnectBridge(){this.#e=void 0}setChannel(e){this.#r=e}}
export{WCn,rAt,oAt,Aye,bee,lKt};
