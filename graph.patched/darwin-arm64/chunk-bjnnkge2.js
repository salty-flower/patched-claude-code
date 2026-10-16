// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{R2o}from"./chunk-xzypj06m.js";import{W}from"./chunk-wkh5syvr.js";import{St,_,Y}from"./chunk-bnfhb7sj.js";import{l}from"./chunk-e666gr8q.js";import{sl}from"./chunk-7nqmd82e.js";import{_c,I0}from"./chunk-1901fdh6.js";import{f}from"./chunk-5r64b6x9.js";import{fl}from"./chunk-knqsyt69.js";import{wDe}from"./chunk-k5nw52xq.js";import{ys}from"./chunk-996thspe.js";import{o,E,Me}from"./chunk-82bgdty3.js";import{rm as a}from"fs/promises";import{join as t}from"path";var s=".pending-wakeup",p=1024,m=f(()=>Me({toolUseId:o().min(1).max(256),scheduledFor:E().int().positive(),chainStartedAt:E().int().nonnegative()}));async function m2t(i,r){let e=t(i,s);try{if(r===void 0){if(await a(e,{force:!0}).then(()=>!0,(d)=>(fl(d),!1)))return}await wDe(e,r===void 0?"":_(r))}catch(n){if(!W(n))fl(n)}}async function CKo(i){let r=await sl(t(i,s),p);if(!r)return null;try{let e=m().safeParse(Y(r));return e.success?e.data:null}catch{return null}}class _Gr{#o=Promise.resolve();#r=0;#e;#i;constructor(){this.#i=R2o(this.#n)}#n=(i)=>{try{if(!_c())return;let r=I0();if(r===void 0)return;if(i!==void 0&&ys())return;this.#e??=St(()=>this.#o);let e=++this.#r;this.#o=this.#o.then(()=>e===this.#r?m2t(r,i):void 0)}catch(r){l(r)}};flush(){return this.#o}dispose(){this.#i(),this.#o.then(()=>this.#e?.())}}
export{m2t,CKo,_Gr};
