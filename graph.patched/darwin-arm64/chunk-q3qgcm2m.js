// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{m}from"./chunk-7tpgnqqk.js";import{H}from"./chunk-vryy7b5x.js";import{Fp}from"./chunk-4r0kqv8e.js";import{s,T,c}from"./chunk-5vjkaf25.js";var l=m(()=>T(c({marketplace:s(),plugin:s()})));function fUt(){let e=H("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function BG(){return!0}function Dcn(e){if(!e)return!1;let{name:n,marketplace:t}=Fp(e);if(!t)return!1;return fUt().some((r)=>r.plugin===n&&r.marketplace===t)}
export{fUt,BG,Dcn};
