// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{oi}from"./chunk-c7dwhznj.js";import{Le}from"./chunk-5p4f0tx0.js";import{qe}from"./chunk-hqh4zzjp.js";var t="repl-ask-declined",tos=new DOMException(t,"AbortError");function oOn(e){return e.aborted&&oi(e.reason)===t}class o{#e=0;#t=Le();subscribe=(e)=>this.#t.subscribe(e);getSnapshot=()=>this.#e>0;hold(){if(this.#e++,this.#e===1)this.#t.emit();let e=!1;return()=>{if(e)return;if(e=!0,this.#e--,this.#e===0)this.#t.emit()}}}var nos=new qe(()=>new o);
export{tos,oOn,nos};
