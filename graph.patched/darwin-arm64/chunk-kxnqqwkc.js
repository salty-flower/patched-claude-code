// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{kmt}from"./chunk-t01yefrc.js";import{Je}from"./chunk-k6s5je75.js";var r=kmt("computerUseMcpState",void 0);class tCt{#e;constructor(e){this.#e=e}static over(e){return new tCt(r(e.getState,e.setState))}get(){return this.#e.get()}update(e){this.#e.set(e)}}class t{owner=void 0;acquire(e){if(this.owner)return()=>{};return this.owner=e,()=>{if(this.owner===e)this.owner=void 0}}}var Q6t=new Je(()=>new t);function H_n(e){return Q6t.of(e).owner}
export{tCt,Q6t,H_n};
