// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{dt}from"./chunk-pe53y0ma.js";import{_}from"./chunk-n5v91jc3.js";import{p}from"./chunk-949csv87.js";import{Hc,O,u,N,A}from"./chunk-mqaa2rrp.js";var t=1,f=65536,r=p(()=>Hc().min(0).default(0)),m=p(()=>u({version:Hc()})),n=p(()=>u({version:A(t),generation:Hc().min(1),appliedBeforeFirstAsk:O(),outcome:N(["applied","partial"]),filesApplied:r(),filesRefused:r(),settingsWritten:O().default(!1),replacedForeign:r(),writtenAtMs:Hc().min(0)}));function Doo(o){let e=n().safeParse({...o,version:t});if(!e.success)throw Error("home ready row is off-schema");return Buffer.from(_(e.data))}function uOn(o){if(o.length>f)return{ok:!1,reason:"oversize"};let e=dt(o.toString("utf8"),!1),s=m().safeParse(e);if(s.success&&s.data.version!==t)return{ok:!1,reason:"unsupported_version"};let a=n().safeParse(e);if(!a.success)return{ok:!1,reason:"malformed"};let{version:l,...i}=a.data;return{ok:!0,ready:i}}
export{Doo,uOn};
