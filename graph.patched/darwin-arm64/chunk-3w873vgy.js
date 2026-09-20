// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
var oge=String.raw`\$\{([A-Za-z_][A-Za-z0-9_]*)(?::-[^}]*)?\}`;function m8(e){return new RegExp(oge).test(e)}function Ryt(e){let n=[],r=0;for(let t of e.matchAll(new RegExp(oge,"g")))n.push(e.slice(r,t.index)),r=t.index+t[0].length;return n.push(e.slice(r)),n}function xyt(e){return e.replace(new RegExp(oge,"g"),(n)=>"x".repeat(n.length))}function rie(e){return e.replace(new RegExp(oge,"g"),(n,r)=>`\${${r}}`)}
export{oge,m8,Ryt,xyt,rie};
