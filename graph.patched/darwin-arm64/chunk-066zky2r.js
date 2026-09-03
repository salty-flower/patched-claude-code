// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{m}from"./chunk-ffgkv432.js";import{P}from"./chunk-h6md7820.js";import{Yt}from"./chunk-zesc0ppt.js";import{i,R,c}from"./chunk-rwtwjs93.js";var a=m(()=>R(c({marketplace:i(),plugin:i()})));function mNt(){let e=P("tengu_harbor_ledger",[]),n=a().safeParse(e);return n.success?n.data:[]}function h9(){return!0}function Cin(e){if(!e)return!1;let{name:n,marketplace:r}=Yt(e);if(!r)return!1;return mNt().some((t)=>t.plugin===n&&t.marketplace===r)}
export{mNt,h9,Cin};
