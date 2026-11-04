// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Me}from"./chunk-w5484khd.js";import{Je}from"./chunk-k6s5je75.js";class e{#e={credentialsPersisted:0,loginCompleted:0};#t=Me();subscribe=(t)=>this.#t.subscribe(t);getSnapshot=()=>this.#e;credentialsPersisted(){this.#e={...this.#e,credentialsPersisted:this.#e.credentialsPersisted+1},this.#t.emit()}loginCompleted(){this.#e={...this.#e,loginCompleted:this.#e.loginCompleted+1},this.#t.emit()}}var U6=new Je(()=>new e);
export{U6};
