// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Eq}from"./chunk-hmnv0ey7.js";import{lt}from"./chunk-xzypj06m.js";var r=Eq("computerUseMcpState",void 0);class nrt{#e;constructor(e){this.#e=e}static over(e){return new nrt(r(e.getState,e.setState))}get(){return this.#e.get()}update(e){this.#e.set(e)}}class t{owner=void 0;acquire(e){if(this.owner)return()=>{};return this.owner=e,()=>{if(this.owner===e)this.owner=void 0}}}var Ivt=new lt(()=>new t);function RVt(e){return Ivt.of(e).owner}
export{nrt,Ivt,RVt};
