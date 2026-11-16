// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{r7e,ZAe,Akn}from"./chunk-k0dvm1am.js";import{cie,Qr,e0,Co}from"./chunk-0rzk15r4.js";function Jdt(t){let e=e0(t);return Co(e)?Qr:e}function Xer(t){let e=Akn(t);return e.includes("\\")||/%[0-9A-Fa-f]{2}/.test(e)||e.split(/[/?#]/).some((n)=>n==="."||n==="..")}function Rli(t){let e=t.trimStart(),n=/^([A-Za-z][A-Za-z0-9+.-]*):\/\//.exec(e);if(n===null||/^https?$/i.test(n[1]??""))return r7e(e);return r7e(n[0]+Akn(e.slice(n[0].length)))}function die(t){if(t.includes("%00")||t.includes("\x00"))return!0;if(cie(t))return!0;let e=[ZAe(t)?.host,ZAe(t,{asRewritten:!0})?.host];if(t.includes("://"))e.push(r7e(t.trimStart())?.hostname||void 0,Rli(t)?.hostname||void 0);let n=e.map((o)=>o===void 0?null:Jdt(o));return n.some((o)=>o!==n[0])}
export{Jdt,Xer,Rli,die};
