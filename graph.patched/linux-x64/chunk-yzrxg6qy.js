// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{oi}from"./chunk-jye1k3bx.js";import{Le}from"./chunk-732yb76j.js";import{qe}from"./chunk-2xv5yvxr.js";var t="repl-ask-declined",Prs=new DOMException(t,"AbortError");function jPn(e){return e.aborted&&oi(e.reason)===t}class o{#e=0;#t=Le();subscribe=(e)=>this.#t.subscribe(e);getSnapshot=()=>this.#e>0;hold(){if(this.#e++,this.#e===1)this.#t.emit();let e=!1;return()=>{if(e)return;if(e=!0,this.#e--,this.#e===0)this.#t.emit()}}}var Irs=new qe(()=>new o);
export{Prs,jPn,Irs};
