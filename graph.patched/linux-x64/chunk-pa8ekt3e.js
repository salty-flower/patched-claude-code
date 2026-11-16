// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
var ydt=String.raw`\$\{([A-Za-z_][A-Za-z0-9_]*)(?::-[^}]*)?\}`;function J7(e){return new RegExp(ydt).test(e)}function bdt(e){let n=[],r=0;for(let t of e.matchAll(new RegExp(ydt,"g")))n.push(e.slice(r,t.index)),r=t.index+t[0].length;return n.push(e.slice(r)),n}function Hwn(e){return e.replace(new RegExp(ydt,"g"),(n)=>"x".repeat(n.length))}function mYe(e){return e.replace(new RegExp(ydt,"g"),(n,r)=>`\${${r}}`)}
export{ydt,J7,bdt,Hwn,mYe};
