// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{cYe,iAe,jvn}from"./chunk-jwn3rcdm.js";import{yie,Qr,nM,Ao}from"./chunk-kvaypm0q.js";function ict(t){let e=nM(t);return Ao(e)?Qr:e}function Str(t){let e=jvn(t);return e.includes("\\")||/%[0-9A-Fa-f]{2}/.test(e)||e.split(/[/?#]/).some((n)=>n==="."||n==="..")}function adi(t){let e=t.trimStart(),n=/^([A-Za-z][A-Za-z0-9+.-]*):\/\//.exec(e);if(n===null||/^https?$/i.test(n[1]??""))return cYe(e);return cYe(n[0]+jvn(e.slice(n[0].length)))}function _ie(t){if(t.includes("%00")||t.includes("\x00"))return!0;if(yie(t))return!0;let e=[iAe(t)?.host,iAe(t,{asRewritten:!0})?.host];if(t.includes("://"))e.push(cYe(t.trimStart())?.hostname||void 0,adi(t)?.hostname||void 0);let n=e.map((o)=>o===void 0?null:ict(o));return n.some((o)=>o!==n[0])}
export{ict,Str,adi,_ie};
