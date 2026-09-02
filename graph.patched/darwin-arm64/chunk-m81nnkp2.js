// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{UHe}from"./chunk-qdveya8g.js";import{Hyt}from"./chunk-1t93c45w.js";import{$Fn}from"./chunk-gg4fvkv4.js";import{NFn}from"./chunk-wes91187.js";import{sl}from"./chunk-0m09sk6y.js";import{JFn}from"./chunk-yxrzt55v.js";import{ef}from"./chunk-x2nkzh3v.js";function a(e,r){return(e.workshopVerifiedSlugs??[]).includes(r)||Object.entries(e.frameUrls??{}).some(([i,s])=>s?.url!==void 0&&sl(s.url)===r&&Hyt(i))}function _se(e,r){return{ownPublishes:UHe(e,r),workshopTelemetry:JFn(e,r),whiteboardTelemetry:NFn(e,r),prReviewTargets:$Fn(e,r),recordedPages:{isWorkshopPage:(i)=>a(e(),i)}}}function znt(){let e={};return _se(()=>e,(r)=>{e=r(e)})}var Vnt={assign:()=>ef[0],get:()=>{return}};function yse(e){return{assign(r){let i=e.get(),s=i.assignments.get(r);if(s)return s;let o=ef[i.index%ef.length];return e.set((t)=>{if(t.assignments.has(r))return t;let n=new Map(t.assignments);return n.set(r,o),{assignments:n,index:t.index+1}}),o},get(r){return e.get().assignments.get(r)}}}var UK=Object.freeze({bridge:void 0,channel:void 0});class AHt{#e=void 0;#r=void 0;get bridge(){return this.#e}get channel(){return this.#r}connectBridge(e){this.#e=e}disconnectBridge(){this.#e=void 0}setChannel(e){this.#r=e}}
export{_se,znt,Vnt,yse,UK,AHt};
