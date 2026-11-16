// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{sep as c}from"path";var Qii=new Set([".git","hooks",".husky",".githooks","node_modules",".vscode",".idea","head","config","objects","refs",".claude","skills","commands","agents",".cargo",".devcontainer",".yarn",".mvn"]),der=/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/,cer=new RegExp(der,"g");function Al(e){return i(e,!0)}function D8r(e){return i(e,!1)}function i(e,o){let t=e.toLowerCase().replace(/\u0131/g,"i").replace(/\u017f/g,"s"),n=t.replace(cer,"");return(o?n.replace(/:.*$/,""):n).replace(/[. ]+$/,"")||t}function Zii(e){return!1}function Qye(e,o,t){let n=e.slice(o.length).split(c),a=n.length-1;for(let r=0;r<n.length;r++){let s=Al(n[r]);if(Qii.has(s)||Zii(s))return!0;if(r===a&&t?.has(s))return!0}return!1}
export{Qii,der,cer,Al,D8r,Zii,Qye};
