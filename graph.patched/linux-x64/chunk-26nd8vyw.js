// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{bA}from"./chunk-e5p1adf2.js";import{et,y1}from"./chunk-h4js79s0.js";function o(n){return y1(et(n,".")," ")}function a3s(n){return/^con(in|out)\$$/i.test(o(n))}var r=/[<>"|?*\\\x00-\x1f]/;function hwa(n){return n.split("/").some((t)=>r.test(t))}function wVt(n){return n.split("/").some((t)=>t.includes(":")||t.endsWith(".")||t.endsWith(" ")||bA(o(t).replace(/ {2,}/g," "))||a3s(t))}var i=/^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;function e(n){return y1(et(n,":"),". ")}var s=/:|[. ](?:\/|$)/;function gwa(n){return s.test(n)?[n.split("/").map(e).filter((t)=>t!=="").join("/")]:[]}function e5n(n){return n.split("/").some((t)=>i.test(e(t)))}
export{a3s,hwa,wVt,gwa,e5n};
