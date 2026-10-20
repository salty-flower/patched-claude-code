// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Jw}from"./chunk-f66mhvm1.js";import{tt,q2t}from"./chunk-42txhxmf.js";function GAo(n){return n.birthtimeNs>0n&&n.birthtimeNs!==n.ctimeNs?n.birthtimeNs.toString():void 0}function i(n){return n>=-(2n**63n)&&n<-1n?n+2n**64n:n}function Jon(n,t){return i(n)===i(t)}function e(n){return q2t(tt(n,".")," ")}function zAo(n){return/^con(in|out)\$$/i.test(e(n))}var o=/[<>"|?*\\\x00-\x1f]/;function jLs(n){return n.split("/").some((t)=>o.test(t))}function Azn(n){return n.split("/").some((t)=>t.includes(":")||t.endsWith(".")||t.endsWith(" ")||Jw(e(t).replace(/ {2,}/g," "))||zAo(t))}var r=/^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;function s(n){return q2t(tt(n,":"),". ")}function Qon(n){return n.split("/").some((t)=>r.test(s(t)))}
export{GAo,Jon,zAo,jLs,Azn,Qon};
