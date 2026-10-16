// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{rzo}from"./chunk-eqmywwjn.js";import{W}from"./chunk-w7m8nded.js";import{bt,_,X}from"./chunk-cwsn6mdf.js";import{l}from"./chunk-9pt2nr7j.js";import{ol}from"./chunk-yfyzz0k6.js";import{_c,CM}from"./chunk-k16gymf7.js";import{p}from"./chunk-he0s6sfd.js";import{pl}from"./chunk-602wadg8.js";import{g0e}from"./chunk-057xqfn7.js";import{ys}from"./chunk-38nf1dnm.js";import{o,v,He}from"./chunk-zypddzr3.js";import{rm as a}from"fs/promises";import{join as t}from"path";var s=".pending-wakeup",m=1024,u=p(()=>He({toolUseId:o().min(1).max(256),scheduledFor:v().int().positive(),chainStartedAt:v().int().nonnegative()}));async function szt(i,r){let e=t(i,s);try{if(r===void 0){if(await a(e,{force:!0}).then(()=>!0,(d)=>(pl(d),!1)))return}await g0e(e,r===void 0?"":_(r))}catch(n){if(!W(n))pl(n)}}async function qqo(i){let r=await ol(t(i,s),m);if(!r)return null;try{let e=u().safeParse(X(r));return e.success?e.data:null}catch{return null}}class qzr{#o=Promise.resolve();#r=0;#e;#i;constructor(){this.#i=rzo(this.#n)}#n=(i)=>{try{if(!_c())return;let r=CM();if(r===void 0)return;if(i!==void 0&&ys())return;this.#e??=bt(()=>this.#o);let e=++this.#r;this.#o=this.#o.then(()=>e===this.#r?szt(r,i):void 0)}catch(r){l(r)}};flush(){return this.#o}dispose(){this.#i(),this.#o.then(()=>this.#e?.())}}
export{szt,qqo,qzr};
