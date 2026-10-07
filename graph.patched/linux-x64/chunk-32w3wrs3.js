// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ft}from"./chunk-0834hdpw.js";import{b}from"./chunk-gvn18sr5.js";import{f}from"./chunk-wp37h1qm.js";import{Vg,M,u,z,R}from"./chunk-6kgnb6mn.js";var t=1,m=65536,r=f(()=>Vg().min(0).default(0)),p=f(()=>u({version:Vg()})),n=f(()=>u({version:R(t),generation:Vg().min(1),appliedBeforeFirstAsk:M(),outcome:z(["applied","partial"]),filesApplied:r(),filesRefused:r(),settingsWritten:M().default(!1),replacedForeign:r(),writtenAtMs:Vg().min(0)}));function wDr(o){let e=n().safeParse({...o,version:t});if(!e.success)throw Error("home ready row is off-schema");return Buffer.from(b(e.data))}function Adn(o){if(o.length>m)return{ok:!1,reason:"oversize"};let e=ft(o.toString("utf8"),!1),s=p().safeParse(e);if(s.success&&s.data.version!==t)return{ok:!1,reason:"unsupported_version"};let a=n().safeParse(e);if(!a.success)return{ok:!1,reason:"malformed"};let{version:l,...i}=a.data;return{ok:!0,ready:i}}
export{wDr,Adn};
