// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Mvo}from"./chunk-g79wjybr.js";import{W}from"./chunk-5g6j8x8p.js";import{Et,_,J}from"./chunk-p46wpkfz.js";import{c}from"./chunk-3s94kw4m.js";import{Ta}from"./chunk-5pdrsybf.js";import{Ic,JP}from"./chunk-cxjvwxsa.js";import{f}from"./chunk-ras5x31x.js";import{gl}from"./chunk-ztvkra0t.js";import{XUe}from"./chunk-rg6v163e.js";import{js}from"./chunk-g263vvvn.js";import{o,E,Ge}from"./chunk-w8db6ytr.js";import{rm as a}from"fs/promises";import{join as t}from"path";var s=".pending-wakeup",p=1024,m=f(()=>Ge({toolUseId:o().min(1).max(256),scheduledFor:E().int().positive(),chainStartedAt:E().int().nonnegative()}));async function yHt(i,r){let e=t(i,s);try{if(r===void 0){if(await a(e,{force:!0}).then(()=>!0,(d)=>(gl(d),!1)))return}await XUe(e,r===void 0?"":_(r))}catch(n){if(!W(n))gl(n)}}async function _Ro(i){let r=await Ta(t(i,s),p);if(!r)return null;try{let e=m().safeParse(J(r));return e.success?e.data:null}catch{return null}}class dRr{#o=Promise.resolve();#r=0;#e;#i;constructor(){this.#i=Mvo(this.#n)}#n=(i)=>{try{if(!Ic())return;let r=JP();if(r===void 0)return;if(i!==void 0&&js())return;this.#e??=Et(()=>this.#o);let e=++this.#r;this.#o=this.#o.then(()=>e===this.#r?yHt(r,i):void 0)}catch(r){c(r)}};flush(){return this.#o}dispose(){this.#i(),this.#o.then(()=>this.#e?.())}}
export{yHt,_Ro,dRr};
