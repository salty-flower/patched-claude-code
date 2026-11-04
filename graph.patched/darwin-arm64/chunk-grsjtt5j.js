// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Zs}from"./chunk-9vtk14cn.js";import{Me}from"./chunk-w5484khd.js";import{Je}from"./chunk-k6s5je75.js";var t="repl-ask-declined",LNo=new DOMException(t,"AbortError");function Vfn(e){return e.aborted&&Zs(e.reason)===t}class o{#e=0;#t=Me();subscribe=(e)=>this.#t.subscribe(e);getSnapshot=()=>this.#e>0;hold(){if(this.#e++,this.#e===1)this.#t.emit();let e=!1;return()=>{if(e)return;if(e=!0,this.#e--,this.#e===0)this.#t.emit()}}}var HNo=new Je(()=>new o);
export{LNo,Vfn,HNo};
