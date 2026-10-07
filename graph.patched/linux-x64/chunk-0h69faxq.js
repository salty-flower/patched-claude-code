// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
var v0e=String.raw`\$\{([A-Za-z_][A-Za-z0-9_]*)(?::-[^}]*)?\}`;function ale(e){return new RegExp(v0e).test(e)}function W8t(e){let n=[],r=0;for(let t of e.matchAll(new RegExp(v0e,"g")))n.push(e.slice(r,t.index)),r=t.index+t[0].length;return n.push(e.slice(r)),n}function z8t(e){return e.replace(new RegExp(v0e,"g"),(n)=>"x".repeat(n.length))}function cTe(e){return e.replace(new RegExp(v0e,"g"),(n,r)=>`\${${r}}`)}
export{v0e,ale,W8t,z8t,cTe};
