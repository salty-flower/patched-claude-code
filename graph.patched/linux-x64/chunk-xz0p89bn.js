// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{sep as c}from"path";var bii=new Set([".git","hooks",".husky",".githooks","node_modules",".vscode",".idea","head","config","objects","refs",".claude","skills","commands","agents",".cargo",".devcontainer",".yarn",".mvn"]),UZn=/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/,BZn=new RegExp(UZn,"g");function Cl(e){return i(e,!0)}function u9r(e){return i(e,!1)}function i(e,o){let t=e.toLowerCase().replace(/\u0131/g,"i").replace(/\u017f/g,"s"),n=t.replace(BZn,"");return(o?n.replace(/:.*$/,""):n).replace(/[. ]+$/,"")||t}function Sii(e){return!1}function Gye(e,o,t){let n=e.slice(o.length).split(c),a=n.length-1;for(let r=0;r<n.length;r++){let s=Cl(n[r]);if(bii.has(s)||Sii(s))return!0;if(r===a&&t?.has(s))return!0}return!1}
export{bii,UZn,BZn,Cl,u9r,Sii,Gye};
