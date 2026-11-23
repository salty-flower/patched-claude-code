// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{rt}from"./chunk-vbyq84t6.js";import{_}from"./chunk-ray9kegj.js";import{p}from"./chunk-q8mq1ny3.js";import{wu,I,u,B,T}from"./chunk-xrhk683g.js";var t=1,f=65536,r=p(()=>wu().min(0).default(0)),m=p(()=>u({version:wu()})),n=p(()=>u({version:T(t),generation:wu().min(1),appliedBeforeFirstAsk:I(),outcome:B(["applied","partial"]),filesApplied:r(),filesRefused:r(),settingsWritten:I().default(!1),replacedForeign:r(),writtenAtMs:wu().min(0)}));function hms(o){let e=n().safeParse({...o,version:t});if(!e.success)throw Error("home ready row is off-schema");return Buffer.from(_(e.data))}function Ebr(o){if(o.length>f)return{ok:!1,reason:"oversize"};let e=rt(o.toString("utf8"),!1),s=m().safeParse(e);if(s.success&&s.data.version!==t)return{ok:!1,reason:"unsupported_version"};let a=n().safeParse(e);if(!a.success)return{ok:!1,reason:"malformed"};let{version:l,...i}=a.data;return{ok:!0,ready:i}}
export{hms,Ebr};
