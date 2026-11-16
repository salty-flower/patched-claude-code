// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{F}from"./chunk-r3adsed5.js";import{W}from"./chunk-z1a5ffdv.js";class s{#t=new Set;#e=new Map;lastBellAt=0;claim(t){if(this.#t.has(t))return!1;return this.#t.add(t),!0}has(t){return this.#t.has(t)}claimIfChanged(t,e){if(this.#e.get(t)===e)return!1;return this.#e.set(t,e),!0}}var vD=new W(()=>new s);function ca(){return vD.of(F().host)}
export{vD,ca};
