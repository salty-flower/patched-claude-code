// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{yIo}from"./chunk-4bw62nzm.js";import{W}from"./chunk-886tf6ja.js";import{St,_,Y}from"./chunk-gyf58rwf.js";import{c}from"./chunk-gsnbskq4.js";import{p}from"./chunk-fdwn5gdv.js";import{ja}from"./chunk-64ag51qf.js";import{bd,dO}from"./chunk-bk5ct2gw.js";import{dl}from"./chunk-m2gn903q.js";import{tOe}from"./chunk-afp70n0f.js";import{Ds}from"./chunk-sfn1dbxq.js";import{o,v,De}from"./chunk-9cmjz7j9.js";import{rm as a}from"fs/promises";import{join as t}from"path";var s=".pending-wakeup",m=1024,u=p(()=>De({toolUseId:o().min(1).max(256),scheduledFor:v().int().positive(),chainStartedAt:v().int().nonnegative()}));async function FNt(i,r){let e=t(i,s);try{if(r===void 0){if(await a(e,{force:!0}).then(()=>!0,(d)=>(dl(d),!1)))return}await tOe(e,r===void 0?"":_(r))}catch(n){if(!W(n))dl(n)}}async function gLo(i){let r=await ja(t(i,s),m);if(!r)return null;try{let e=u().safeParse(Y(r));return e.success?e.data:null}catch{return null}}class qHr{#o=Promise.resolve();#r=0;#e;#i;constructor(){this.#i=yIo(this.#n)}#n=(i)=>{try{if(!bd())return;let r=dO();if(r===void 0)return;if(i!==void 0&&Ds())return;this.#e??=St(()=>this.#o);let e=++this.#r;this.#o=this.#o.then(()=>e===this.#r?FNt(r,i):void 0)}catch(r){c(r)}};flush(){return this.#o}dispose(){this.#i(),this.#o.then(()=>this.#e?.())}}
export{FNt,gLo,qHr};
