// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ft}from"./chunk-vrsbmck5.js";import{S}from"./chunk-f8eqwxpt.js";import{f}from"./chunk-2pfss7d0.js";import{Kg,H,u,G,R}from"./chunk-seb9y51t.js";var t=1,m=65536,r=f(()=>Kg().min(0).default(0)),p=f(()=>u({version:Kg()})),n=f(()=>u({version:R(t),generation:Kg().min(1),appliedBeforeFirstAsk:H(),outcome:G(["applied","partial"]),filesApplied:r(),filesRefused:r(),settingsWritten:H().default(!1),replacedForeign:r(),writtenAtMs:Kg().min(0)}));function XMr(o){let e=n().safeParse({...o,version:t});if(!e.success)throw Error("home ready row is off-schema");return Buffer.from(S(e.data))}function zdn(o){if(o.length>m)return{ok:!1,reason:"oversize"};let e=ft(o.toString("utf8"),!1),s=p().safeParse(e);if(s.success&&s.data.version!==t)return{ok:!1,reason:"unsupported_version"};let a=n().safeParse(e);if(!a.success)return{ok:!1,reason:"malformed"};let{version:l,...i}=a.data;return{ok:!0,ready:i}}
export{XMr,zdn};
