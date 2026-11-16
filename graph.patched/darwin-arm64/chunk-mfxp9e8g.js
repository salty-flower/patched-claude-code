// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{EC}from"./chunk-0sn0736b.js";import{et,bU}from"./chunk-b5xhmzas.js";function o(n){return bU(et(n,".")," ")}function UKs(n){return/^con(in|out)\$$/i.test(o(n))}var r=/[<>"|?*\\\x00-\x1f]/;function oEa(n){return n.split("/").some((t)=>r.test(t))}function Pzt(n){return n.split("/").some((t)=>t.includes(":")||t.endsWith(".")||t.endsWith(" ")||EC(o(t).replace(/ {2,}/g," "))||UKs(t))}var i=/^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;function e(n){return bU(et(n,":"),". ")}var s=/:|[. ](?:\/|$)/;function sEa(n){return s.test(n)?[n.split("/").map(e).filter((t)=>t!=="").join("/")]:[]}function E5n(n){return n.split("/").some((t)=>i.test(e(t)))}
export{UKs,oEa,Pzt,sEa,E5n};
