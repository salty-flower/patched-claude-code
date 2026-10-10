// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{mt}from"./chunk-68wmv4pr.js";import{_}from"./chunk-gyf58rwf.js";import{p}from"./chunk-fdwn5gdv.js";import{Mf,H,u,U,C}from"./chunk-9cmjz7j9.js";var t=1,f=65536,r=p(()=>Mf().min(0).default(0)),m=p(()=>u({version:Mf()})),n=p(()=>u({version:C(t),generation:Mf().min(1),appliedBeforeFirstAsk:H(),outcome:U(["applied","partial"]),filesApplied:r(),filesRefused:r(),settingsWritten:H().default(!1),replacedForeign:r(),writtenAtMs:Mf().min(0)}));function iVr(o){let e=n().safeParse({...o,version:t});if(!e.success)throw Error("home ready row is off-schema");return Buffer.from(_(e.data))}function jbn(o){if(o.length>f)return{ok:!1,reason:"oversize"};let e=mt(o.toString("utf8"),!1),s=m().safeParse(e);if(s.success&&s.data.version!==t)return{ok:!1,reason:"unsupported_version"};let a=n().safeParse(e);if(!a.success)return{ok:!1,reason:"malformed"};let{version:l,...i}=a.data;return{ok:!0,ready:i}}
export{iVr,jbn};
