// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{nB}from"./chunk-163vzz9f.js";import{qe}from"./chunk-hqh4zzjp.js";var d=["take_in"];class r{visitors=new Map}var l=new qe(()=>new r);function a(o){try{return o.pending()===!0}catch{return!1}}function WRi(o){let e=l.peek(o)?.visitors;return e!==void 0&&[...e.values()].some(a)}async function GRi(o,e){let n=l.peek(o)?.visitors;if(n===void 0)return;let p=(async()=>{for(let s of d){let i=n.get(s);if(i!==void 0&&!nB(e)&&a(i))try{await i.visit(e)}catch{}}})();if(nB(e))return;let t=()=>{},c=new Promise((s)=>{t=()=>s()});e.addEventListener("abort",t,{once:!0});try{await Promise.race([p,c])}finally{e.removeEventListener("abort",t)}}
export{WRi,GRi};
