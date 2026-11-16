// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
var Adt=String.raw`\$\{([A-Za-z_][A-Za-z0-9_]*)(?::-[^}]*)?\}`;function iX(e){return new RegExp(Adt).test(e)}function Rdt(e){let n=[],r=0;for(let t of e.matchAll(new RegExp(Adt,"g")))n.push(e.slice(r,t.index)),r=t.index+t[0].length;return n.push(e.slice(r)),n}function Jwn(e){return e.replace(new RegExp(Adt,"g"),(n)=>"x".repeat(n.length))}function b7e(e){return e.replace(new RegExp(Adt,"g"),(n,r)=>`\${${r}}`)}
export{Adt,iX,Rdt,Jwn,b7e};
