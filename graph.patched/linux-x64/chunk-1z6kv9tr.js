// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{gt}from"./chunk-ac6y47nt.js";import{_}from"./chunk-cwsn6mdf.js";import{p}from"./chunk-he0s6sfd.js";import{Lu,M,u,B,A}from"./chunk-zypddzr3.js";var t=1,f=65536,r=p(()=>Lu().min(0).default(0)),m=p(()=>u({version:Lu()})),n=p(()=>u({version:A(t),generation:Lu().min(1),appliedBeforeFirstAsk:M(),outcome:B(["applied","partial"]),filesApplied:r(),filesRefused:r(),settingsWritten:M().default(!1),replacedForeign:r(),writtenAtMs:Lu().min(0)}));function F7r(o){let e=n().safeParse({...o,version:t});if(!e.success)throw Error("home ready row is off-schema");return Buffer.from(_(e.data))}function Vxn(o){if(o.length>f)return{ok:!1,reason:"oversize"};let e=gt(o.toString("utf8"),!1),s=m().safeParse(e);if(s.success&&s.data.version!==t)return{ok:!1,reason:"unsupported_version"};let a=n().safeParse(e);if(!a.success)return{ok:!1,reason:"malformed"};let{version:l,...i}=a.data;return{ok:!0,ready:i}}
export{F7r,Vxn};
