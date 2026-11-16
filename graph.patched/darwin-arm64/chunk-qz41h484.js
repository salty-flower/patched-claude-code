// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{rt}from"./chunk-cy76pm9m.js";import{_}from"./chunk-bdfv2ky4.js";import{p}from"./chunk-7ap5zh1s.js";import{Eu,O,u,B,T}from"./chunk-m507bxk0.js";var t=1,f=65536,r=p(()=>Eu().min(0).default(0)),m=p(()=>u({version:Eu()})),n=p(()=>u({version:T(t),generation:Eu().min(1),appliedBeforeFirstAsk:O(),outcome:B(["applied","partial"]),filesApplied:r(),filesRefused:r(),settingsWritten:O().default(!1),replacedForeign:r(),writtenAtMs:Eu().min(0)}));function Jms(o){let e=n().safeParse({...o,version:t});if(!e.success)throw Error("home ready row is off-schema");return Buffer.from(_(e.data))}function JSr(o){if(o.length>f)return{ok:!1,reason:"oversize"};let e=rt(o.toString("utf8"),!1),s=m().safeParse(e);if(s.success&&s.data.version!==t)return{ok:!1,reason:"unsupported_version"};let a=n().safeParse(e);if(!a.success)return{ok:!1,reason:"malformed"};let{version:l,...i}=a.data;return{ok:!0,ready:i}}
export{Jms,JSr};
