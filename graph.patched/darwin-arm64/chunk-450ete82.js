// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{cvo}from"./chunk-vd0a9d2s.js";import{j}from"./chunk-tnh13g2g.js";import{bt,_,X}from"./chunk-b5feae42.js";import{c}from"./chunk-tdmgys2e.js";import{Aa}from"./chunk-kbn00z3m.js";import{Ic,tI}from"./chunk-gcyvvtkw.js";import{f}from"./chunk-y575z4xw.js";import{gl}from"./chunk-28k2pyza.js";import{rUe}from"./chunk-shyp6gy4.js";import{js}from"./chunk-nwqfvmza.js";import{o,v,ze}from"./chunk-hcyr0654.js";import{rm as a}from"fs/promises";import{join as t}from"path";var s=".pending-wakeup",p=1024,m=f(()=>ze({toolUseId:o().min(1).max(256),scheduledFor:v().int().positive(),chainStartedAt:v().int().nonnegative()}));async function fHt(i,r){let e=t(i,s);try{if(r===void 0){if(await a(e,{force:!0}).then(()=>!0,(d)=>(gl(d),!1)))return}await rUe(e,r===void 0?"":_(r))}catch(n){if(!j(n))gl(n)}}async function _Ro(i){let r=await Aa(t(i,s),p);if(!r)return null;try{let e=m().safeParse(X(r));return e.success?e.data:null}catch{return null}}class tRr{#o=Promise.resolve();#r=0;#e;#i;constructor(){this.#i=cvo(this.#n)}#n=(i)=>{try{if(!Ic())return;let r=tI();if(r===void 0)return;if(i!==void 0&&js())return;this.#e??=bt(()=>this.#o);let e=++this.#r;this.#o=this.#o.then(()=>e===this.#r?fHt(r,i):void 0)}catch(r){c(r)}};flush(){return this.#o}dispose(){this.#i(),this.#o.then(()=>this.#e?.())}}
export{fHt,_Ro,tRr};
