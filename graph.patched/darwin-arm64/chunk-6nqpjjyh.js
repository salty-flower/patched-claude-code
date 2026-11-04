// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Hre}from"./chunk-69b9zpsr.js";function Yzo(s,r=[]){let t=s.message.content;if(!Array.isArray(t))return"";let o=Hre();if(o.size===0)return"";return t.flatMap((e)=>{if(e.type!=="tool_use")return[];if(!o.has(e.name))return r.filter((n)=>n.replCallId===e.id).map((n)=>n.text);let i=e.input?.text;return typeof i==="string"?[i]:[]}).filter(Boolean).join(`
`)}var p=8;class Jot{#t=[];note(s,r){let t=r.text;if(typeof t!=="string"||!t)return;if(this.#t.push({replCallId:s,text:t}),this.#t.length>p)this.#t.shift()}take(){return this.#t.splice(0)}clear(){this.#t.length=0}}
export{Yzo,Jot};
