// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{QE}from"./chunk-ae84tp6z.js";import{Qe,GMt}from"./chunk-ax7r0qj7.js";function t(n){return GMt(Qe(n,".")," ")}function Hio(n){return/^con(in|out)\$$/i.test(t(n))}var e=/[<>"|?*\\\x00-\x1f]/;function kus(n){return n.split("/").some((o)=>e.test(o))}function bHn(n){return n.split("/").some((o)=>o.includes(":")||o.endsWith(".")||o.endsWith(" ")||QE(t(o).replace(/ {2,}/g," "))||Hio(o))}var r=/^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;function i(n){return GMt(Qe(n,":"),". ")}function S8t(n){return n.split("/").some((o)=>r.test(i(o)))}
export{Hio,kus,bHn,S8t};
