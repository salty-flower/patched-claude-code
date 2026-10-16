// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Iw}from"./chunk-r0a9v21k.js";import{nt,CBt}from"./chunk-btnsqe7h.js";function o(n){return CBt(nt(n,".")," ")}function Pbo(n){return/^con(in|out)\$$/i.test(o(n))}var e=/[<>"|?*\\\x00-\x1f]/;function UTs(n){return n.split("/").some((t)=>e.test(t))}function ojn(n){return n.split("/").some((t)=>t.includes(":")||t.endsWith(".")||t.endsWith(" ")||Iw(o(t).replace(/ {2,}/g," "))||Pbo(t))}var r=/^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;function i(n){return CBt(nt(n,":"),". ")}function Atn(n){return n.split("/").some((t)=>r.test(i(t)))}
export{Pbo,UTs,ojn,Atn};
