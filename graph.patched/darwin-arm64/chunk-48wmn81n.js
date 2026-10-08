// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{gE}from"./chunk-9exgg8sx.js";import{et,RIt}from"./chunk-v2r1tbj3.js";function t(n){return RIt(et(n,".")," ")}function YZr(n){return/^con(in|out)\$$/i.test(t(n))}var e=/[<>"|?*\\\x00-\x1f]/;function Uns(n){return n.split("/").some((o)=>e.test(o))}function XRn(n){return n.split("/").some((o)=>o.includes(":")||o.endsWith(".")||o.endsWith(" ")||gE(t(o).replace(/ {2,}/g," "))||YZr(o))}var r=/^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;function i(n){return RIt(et(n,":"),". ")}function UKt(n){return n.split("/").some((o)=>r.test(i(o)))}
export{YZr,Uns,XRn,UKt};
