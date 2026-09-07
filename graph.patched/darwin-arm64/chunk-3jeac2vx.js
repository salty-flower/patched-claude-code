// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{m}from"./chunk-3qjd0g3g.js";import{I}from"./chunk-n495pc0t.js";import{Vm}from"./chunk-q2df50y4.js";import{s,v,c}from"./chunk-zd09sacr.js";var l=m(()=>v(c({marketplace:s(),plugin:s()})));function mMt(){let e=I("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function ZW(){return!0}function Yrn(e){if(!e)return!1;let{name:n,marketplace:t}=Vm(e);if(!t)return!1;return mMt().some((r)=>r.plugin===n&&r.marketplace===t)}
export{mMt,ZW,Yrn};
