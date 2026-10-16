// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{gt}from"./chunk-txv2yh90.js";import{_}from"./chunk-bnfhb7sj.js";import{f}from"./chunk-5r64b6x9.js";import{Lu,H,u,B,A}from"./chunk-82bgdty3.js";var t=1,m=65536,r=f(()=>Lu().min(0).default(0)),p=f(()=>u({version:Lu()})),n=f(()=>u({version:A(t),generation:Lu().min(1),appliedBeforeFirstAsk:H(),outcome:B(["applied","partial"]),filesApplied:r(),filesRefused:r(),settingsWritten:H().default(!1),replacedForeign:r(),writtenAtMs:Lu().min(0)}));function jQr(o){let e=n().safeParse({...o,version:t});if(!e.success)throw Error("home ready row is off-schema");return Buffer.from(_(e.data))}function sPn(o){if(o.length>m)return{ok:!1,reason:"oversize"};let e=gt(o.toString("utf8"),!1),s=p().safeParse(e);if(s.success&&s.data.version!==t)return{ok:!1,reason:"unsupported_version"};let a=n().safeParse(e);if(!a.success)return{ok:!1,reason:"malformed"};let{version:l,...i}=a.data;return{ok:!0,ready:i}}
export{jQr,sPn};
