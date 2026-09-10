// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{zvn}from"./chunk-aertbmaz.js";import{qTt}from"./chunk-xhjkfwqt.js";import{y3n}from"./chunk-dydcn20s.js";import{g3n}from"./chunk-5akqwq6j.js";import{zi}from"./chunk-7zp201hw.js";import{E3n}from"./chunk-8v3jkxqh.js";import{bf}from"./chunk-jpmzyet1.js";import{Nwe}from"./chunk-ftp19zxx.js";function a(e,r){return Object.entries(e.frameUrls??{}).find(([i,s])=>s?.url!==void 0&&!Nwe(i)&&zi(s.url)===r)?.[0]}function l(e,r){return(e.workshopVerifiedSlugs??[]).includes(r)||Object.entries(e.frameUrls??{}).some(([i,s])=>s?.url!==void 0&&zi(s.url)===r&&qTt(i))}function fue(e,r){return{ownPublishes:zvn(e,r),workshopTelemetry:E3n(e,r),whiteboardTelemetry:g3n(e,r),prReviewTargets:y3n(e,r),recordedPages:{isWorkshopPage:(i)=>l(e(),i),localSourcePath:(i)=>a(e(),i)}}}function vut(){let e={};return fue(()=>e,(r)=>{e=r(e)})}var Tut={assign:()=>bf[0],get:()=>{return}};function mue(e){return{assign(r){let i=e.get(),s=i.assignments.get(r);if(s)return s;let t=bf[i.index%bf.length];return e.set((o)=>{if(o.assignments.has(r))return o;let n=new Map(o.assignments);return n.set(r,t),{assignments:n,index:o.index+1}}),t},get(r){return e.get().assignments.get(r)}}}var h7=Object.freeze({bridge:void 0,channel:void 0});class bNt{#e=void 0;#r=void 0;get bridge(){return this.#e}get channel(){return this.#r}connectBridge(e){this.#e=e}disconnectBridge(){this.#e=void 0}setChannel(e){this.#r=e}}
export{fue,vut,Tut,mue,h7,bNt};
