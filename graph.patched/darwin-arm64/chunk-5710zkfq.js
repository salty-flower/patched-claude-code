// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Gos}from"./chunk-ersar6wn.js";import{G}from"./chunk-36ysyspx.js";import{_t,_,ee}from"./chunk-d7b0m8qy.js";import{l}from"./chunk-thm21ca7.js";import{f}from"./chunk-nyvhtfb3.js";import{bl}from"./chunk-esvzd004.js";import{rc,_H}from"./chunk-27xjmczp.js";import{Rl}from"./chunk-yhsjqng1.js";import{UUe}from"./chunk-vcshmp6x.js";import{_s}from"./chunk-31gxg38t.js";import{o,E,Ue}from"./chunk-k395ayhm.js";import{rm as a}from"fs/promises";import{join as t}from"path";var s=".pending-wakeup",p=1024,m=f(()=>Ue({toolUseId:o().min(1).max(256),scheduledFor:E().int().positive(),chainStartedAt:E().int().nonnegative()}));async function x9t(i,r){let e=t(i,s);try{if(r===void 0){if(await a(e,{force:!0}).then(()=>!0,(d)=>(Rl(d),!1)))return}await UUe(e,r===void 0?"":_(r))}catch(n){if(!G(n))Rl(n)}}async function qcs(i){let r=await bl(t(i,s),p);if(!r)return null;try{let e=m().safeParse(ee(r));return e.success?e.data:null}catch{return null}}class nto{#o=Promise.resolve();#r=0;#e;#i;constructor(){this.#i=Gos(this.#n)}#n=(i)=>{try{if(!rc())return;let r=_H();if(r===void 0)return;if(i!==void 0&&_s())return;this.#e??=_t(()=>this.#o);let e=++this.#r;this.#o=this.#o.then(()=>e===this.#r?x9t(r,i):void 0)}catch(r){l(r)}};flush(){return this.#o}dispose(){this.#i(),this.#o.then(()=>this.#e?.())}}
export{x9t,qcs,nto};
