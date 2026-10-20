// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Xw}from"./chunk-h9cj3xp8.js";import{tt,$Gt}from"./chunk-nt1g7asm.js";function ICo(n){return n.birthtimeNs>0n&&n.birthtimeNs!==n.ctimeNs?n.birthtimeNs.toString():void 0}function i(n){return n>=-(2n**63n)&&n<-1n?n+2n**64n:n}function Won(n,t){return i(n)===i(t)}function e(n){return $Gt(tt(n,".")," ")}function OCo(n){return/^con(in|out)\$$/i.test(e(n))}var o=/[<>"|?*\\\x00-\x1f]/;function p0s(n){return n.split("/").some((t)=>o.test(t))}function E2n(n){return n.split("/").some((t)=>t.includes(":")||t.endsWith(".")||t.endsWith(" ")||Xw(e(t).replace(/ {2,}/g," "))||OCo(t))}var r=/^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;function s(n){return $Gt(tt(n,":"),". ")}function Gon(n){return n.split("/").some((t)=>r.test(s(t)))}
export{ICo,Won,OCo,p0s,E2n,Gon};
