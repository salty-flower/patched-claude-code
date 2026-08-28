// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{OKa as y,QKa as R,hKa as d,kKa as h,lKa as g,mKa as p}from"./_444.js";import{n8a as i,s8a as f}from"./_474.js";import{cSb as m,lSb as c}from"./_588.js";import{Exd as s}from"./_839.js";function b(e,r){return{ownPublishes:m(e,r),workshopTelemetry:d(e,r),whiteboardTelemetry:g(e,r),prReviewTargets:y(e,r)}}function O(){let e={};return b(()=>e,(r)=>{e=r(e)})}var u=s(()=>{c();R();p();h()});function A(e){return{assign(r){let n=e.get(),o=n.assignments.get(r);if(o)return o;let a=i[n.index%i.length];return e.set((t)=>{if(t.assignments.has(r))return t;let l=new Map(t.assignments);return l.set(r,a),{assignments:l,index:t.index+1}}),a},get(r){return e.get().assignments.get(r)}}}var W;var T=s(()=>{f();W={assign:()=>i[0],get:()=>{return}}});class P{#e=void 0;#r=void 0;get bridge(){return this.#e}get channel(){return this.#r}connectBridge(e){this.#e=e}disconnectBridge(){this.#e=void 0}setChannel(e){this.#r=e}}var j;var C=s(()=>{j=Object.freeze({bridge:void 0,channel:void 0})});
export{b as XH,O as YH,u as ZH,W as _H,A as $H,T as aI,j as bI,P as cI,C as dI};
