// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{IAt}from"./chunk-r53aj6a2.js";import{qe}from"./chunk-hqh4zzjp.js";var r=IAt("computerUseMcpState",void 0);class dHt{#e;constructor(e){this.#e=e}static over(e){return new dHt(r(e.getState,e.setState))}get(){return this.#e.get()}update(e){this.#e.set(e)}}class t{owner=void 0;acquire(e){if(this.owner)return()=>{};return this.owner=e,()=>{if(this.owner===e)this.owner=void 0}}}var uen=new qe(()=>new t);function nLn(e){return uen.of(e).owner}
export{dHt,uen,nLn};
