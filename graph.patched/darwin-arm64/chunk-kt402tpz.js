// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{zw}from"./chunk-5qeme8w3.js";import{et,JTt}from"./chunk-fqzh3zpr.js";function t(n){return JTt(et(n,".")," ")}function J5r(n){return/^con(in|out)\$$/i.test(t(n))}var e=/[<>"|?*\\\x00-\x1f]/;function m8o(n){return n.split("/").some((o)=>e.test(o))}function tCn(n){return n.split("/").some((o)=>o.includes(":")||o.endsWith(".")||o.endsWith(" ")||zw(t(o).replace(/ {2,}/g," "))||J5r(o))}var r=/^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;function i(n){return JTt(et(n,":"),". ")}function M6t(n){return n.split("/").some((o)=>r.test(i(o)))}
export{J5r,m8o,tCn,M6t};
