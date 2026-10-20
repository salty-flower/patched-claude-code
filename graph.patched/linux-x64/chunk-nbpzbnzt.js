// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{X6o}from"./chunk-dxktn51d.js";import{G}from"./chunk-ekgz6skk.js";import{yt,_,Q}from"./chunk-n5v91jc3.js";import{l}from"./chunk-jkcb7qdd.js";import{cl}from"./chunk-rkrydfvk.js";import{rc,YM}from"./chunk-7p6jp6kj.js";import{p}from"./chunk-949csv87.js";import{bl}from"./chunk-cskmvz0m.js";import{sNe}from"./chunk-0pf3xnzm.js";import{ps}from"./chunk-rncrmfyt.js";import{o,v,Le}from"./chunk-mqaa2rrp.js";import{rm as a}from"fs/promises";import{join as t}from"path";var s=".pending-wakeup",m=1024,u=p(()=>Le({toolUseId:o().min(1).max(256),scheduledFor:v().int().positive(),chainStartedAt:v().int().nonnegative()}));async function HKt(i,r){let e=t(i,s);try{if(r===void 0){if(await a(e,{force:!0}).then(()=>!0,(d)=>(bl(d),!1)))return}await sNe(e,r===void 0?"":_(r))}catch(n){if(!G(n))bl(n)}}async function BJo(i){let r=await cl(t(i,s),m);if(!r)return null;try{let e=u().safeParse(Q(r));return e.success?e.data:null}catch{return null}}class TYr{#o=Promise.resolve();#r=0;#e;#i;constructor(){this.#i=X6o(this.#n)}#n=(i)=>{try{if(!rc())return;let r=YM();if(r===void 0)return;if(i!==void 0&&ps())return;this.#e??=yt(()=>this.#o);let e=++this.#r;this.#o=this.#o.then(()=>e===this.#r?HKt(r,i):void 0)}catch(r){l(r)}};flush(){return this.#o}dispose(){this.#i(),this.#o.then(()=>this.#e?.())}}
export{HKt,BJo,TYr};
