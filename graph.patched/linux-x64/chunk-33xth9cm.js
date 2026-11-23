// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ACt}from"./chunk-24q2e8x1.js";import{qe}from"./chunk-2xv5yvxr.js";var r=ACt("computerUseMcpState",void 0);class b0t{#e;constructor(e){this.#e=e}static over(e){return new b0t(r(e.getState,e.setState))}get(){return this.#e.get()}update(e){this.#e.set(e)}}class t{owner=void 0;acquire(e){if(this.owner)return()=>{};return this.owner=e,()=>{if(this.owner===e)this.owner=void 0}}}var EXt=new qe(()=>new t);function rRi(e){return EXt.of(e).owner}
export{b0t,EXt,rRi};
