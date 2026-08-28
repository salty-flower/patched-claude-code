// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{W0e}from"./chunk-rzh355az.js";import{Fmt}from"./chunk-r1xxh7gx.js";import{WLn}from"./chunk-7hwgrq0e.js";import{zLn}from"./chunk-1w134cnd.js";import{Cl}from"./chunk-w0pbjm26.js";import{rDn}from"./chunk-qrc4ttba.js";import{Fd}from"./chunk-jxyaf9gv.js";function a(e,r){return(e.workshopVerifiedSlugs??[]).includes(r)||Object.entries(e.frameUrls??{}).some(([i,s])=>s?.url!==void 0&&Cl(s.url)===r&&Fmt(i))}function soe(e,r){return{ownPublishes:W0e(e,r),workshopTelemetry:rDn(e,r),whiteboardTelemetry:zLn(e,r),prReviewTargets:WLn(e,r),recordedPages:{isWorkshopPage:(i)=>a(e(),i)}}}function $et(){let e={};return soe(()=>e,(r)=>{e=r(e)})}var Net={assign:()=>Fd[0],get:()=>{return}};function pfe(e){return{assign(r){let i=e.get(),s=i.assignments.get(r);if(s)return s;let o=Fd[i.index%Fd.length];return e.set((t)=>{if(t.assignments.has(r))return t;let n=new Map(t.assignments);return n.set(r,o),{assignments:n,index:t.index+1}}),o},get(r){return e.get().assignments.get(r)}}}var $6=Object.freeze({bridge:void 0,channel:void 0});class t9t{#e=void 0;#r=void 0;get bridge(){return this.#e}get channel(){return this.#r}connectBridge(e){this.#e=e}disconnectBridge(){this.#e=void 0}setChannel(e){this.#r=e}}
export{soe,$et,Net,pfe,$6,t9t};
