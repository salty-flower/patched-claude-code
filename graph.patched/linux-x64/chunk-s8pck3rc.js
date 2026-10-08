// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{fv}from"./chunk-gwj7v27h.js";import{et,hIt}from"./chunk-2j48j0j1.js";function t(n){return hIt(et(n,".")," ")}function wZr(n){return/^con(in|out)\$$/i.test(t(n))}var e=/[<>"|?*\\\x00-\x1f]/;function nns(n){return n.split("/").some((o)=>e.test(o))}function ORn(n){return n.split("/").some((o)=>o.includes(":")||o.endsWith(".")||o.endsWith(" ")||fv(t(o).replace(/ {2,}/g," "))||wZr(o))}var r=/^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;function i(n){return hIt(et(n,":"),". ")}function T4t(n){return n.split("/").some((o)=>r.test(i(o)))}
export{wZr,nns,ORn,T4t};
