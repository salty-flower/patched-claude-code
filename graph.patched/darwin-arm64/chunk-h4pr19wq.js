// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
var SZe=String.raw`\$\{([A-Za-z_][A-Za-z0-9_]*)(?::-[^}]*)?\}`;function x5(e){return new RegExp(SZe).test(e)}function bZe(e){let n=[],r=0;for(let t of e.matchAll(new RegExp(SZe,"g")))n.push(e.slice(r,t.index)),r=t.index+t[0].length;return n.push(e.slice(r)),n}function Dsn(e){return e.replace(new RegExp(SZe,"g"),(n)=>"x".repeat(n.length))}function o6e(e){return e.replace(new RegExp(SZe,"g"),(n,r)=>`\${${r}}`)}
export{SZe,x5,bZe,Dsn,o6e};
