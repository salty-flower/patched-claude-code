// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{X}from"./chunk-0cvfymxt.js";import{g}from"./chunk-f8g4f3e3.js";var o=5000,n=new WeakSet;function L2i(e){n.add(e)}function H2i(e){return n.has(e)}var rHn=Object.freeze({action:"cancel"});class oys{#s;#i=0;#t=!1;#e=!1;#o=new Set;#n=new AbortController;#a;constructor(e){this.#a=e}set(e){if(e!==this.#s)this.#s=e,this.#a(e&&this.open,e)}open=()=>{if(this.#s==="off_screen"&&!this.#t)this.#t=!0,this.#n.abort(),g("mcp_task_question_reopen")};takeOpen(){let e=this.#t;if(this.#t=!1,e)this.#e=!1,this.#o.clear();return e}putAside(e){this.#e=!0,this.#o.add(e),this.set("off_screen")}updateHold(e){return this.#e=e.length>0&&(this.#e||e.some((t)=>this.#o.has(t))),this.#e}answered(){this.#i=Date.now()}graceLeftMs(){return this.#i+o-Date.now()}async sleep(e,t,s){if(await X(e,AbortSignal.any([t,this.#n.signal]),s),this.#n.signal.aborted)this.#n=new AbortController}}
export{L2i,H2i,rHn,oys};
