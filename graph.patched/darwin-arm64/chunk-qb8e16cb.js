// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
var n=new WeakMap;var sJe=(o)=>n.get(o);function OBi(o){let t=Object.values(o??{}).flatMap((r)=>(r??[]).flatMap((s)=>(s.hooks??[]).map(sJe))),[e]=t;return t.every((r)=>r===e)?e:void 0}function K2e(o,t){if(t===void 0)return;for(let e of Object.values(o))for(let r of e??[])for(let s of r.hooks??[])n.set(s,t)}export{sJe,OBi,K2e};
