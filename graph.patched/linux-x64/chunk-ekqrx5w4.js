// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ww}from"./chunk-gf0t3nd9.js";import{Ze,FCt}from"./chunk-z6am4wsr.js";function t(n){return FCt(Ze(n,".")," ")}function EYr(n){return/^con(in|out)\$$/i.test(t(n))}var e=/[<>"|?*\\\x00-\x1f]/;function P5o(n){return n.split("/").some((o)=>e.test(o))}function NEn(n){return n.split("/").some((o)=>o.includes(":")||o.endsWith(".")||o.endsWith(" ")||Ww(t(o).replace(/ {2,}/g," "))||EYr(o))}var r=/^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;function i(n){return FCt(Ze(n,":"),". ")}function b2t(n){return n.split("/").some((o)=>r.test(i(o)))}
export{EYr,P5o,NEn,b2t};
