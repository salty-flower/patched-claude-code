// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{w5o}from"./chunk-kpqr86hf.js";import{G}from"./chunk-nre716m4.js";import{yt,_,X}from"./chunk-tdxkq523.js";import{l}from"./chunk-277zhca1.js";import{ul}from"./chunk-drp9p5tr.js";import{rc,ZM}from"./chunk-bvn0epzr.js";import{f}from"./chunk-ynakaye4.js";import{bl}from"./chunk-79rentg1.js";import{fNe}from"./chunk-j9jrxykj.js";import{ps}from"./chunk-na9nw575.js";import{o,E,Le}from"./chunk-xv841za9.js";import{rm as a}from"fs/promises";import{join as t}from"path";var s=".pending-wakeup",p=1024,m=f(()=>Le({toolUseId:o().min(1).max(256),scheduledFor:E().int().positive(),chainStartedAt:E().int().nonnegative()}));async function K6t(i,r){let e=t(i,s);try{if(r===void 0){if(await a(e,{force:!0}).then(()=>!0,(d)=>(bl(d),!1)))return}await fNe(e,r===void 0?"":_(r))}catch(n){if(!G(n))bl(n)}}async function _Jo(i){let r=await ul(t(i,s),p);if(!r)return null;try{let e=m().safeParse(X(r));return e.success?e.data:null}catch{return null}}class X3r{#o=Promise.resolve();#r=0;#e;#i;constructor(){this.#i=w5o(this.#n)}#n=(i)=>{try{if(!rc())return;let r=ZM();if(r===void 0)return;if(i!==void 0&&ps())return;this.#e??=yt(()=>this.#o);let e=++this.#r;this.#o=this.#o.then(()=>e===this.#r?K6t(r,i):void 0)}catch(r){l(r)}};flush(){return this.#o}dispose(){this.#i(),this.#o.then(()=>this.#e?.())}}
export{K6t,_Jo,X3r};
