// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Pv}from"./chunk-qedh1vmm.js";import{tt,Z5}from"./chunk-zmmnrc9r.js";function o(n){return Z5(tt(n,".")," ")}function Uds(n){return/^con(in|out)\$$/i.test(o(n))}var e=/[<>"|?*\\\x00-\x1f]/;function nxi(n){return n.split("/").some((t)=>e.test(t))}function Mgr(n){return n.split("/").some((t)=>t.includes(":")||t.endsWith(".")||t.endsWith(" ")||Pv(o(t).replace(/ {2,}/g," "))||Uds(t))}var r=/^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;function i(n){return Z5(tt(n,":"),". ")}function wOn(n){return n.split("/").some((t)=>r.test(i(t)))}
export{Uds,nxi,Mgr,wOn};
