// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{nt}from"./chunk-e7w4xcnz.js";import{_}from"./chunk-5nh49npx.js";import{f}from"./chunk-tkh9f09d.js";import{jc,I,u,B,C}from"./chunk-97je7cvf.js";var t=1,m=65536,r=f(()=>jc().min(0).default(0)),p=f(()=>u({version:jc()})),n=f(()=>u({version:C(t),generation:jc().min(1),appliedBeforeFirstAsk:I(),outcome:B(["applied","partial"]),filesApplied:r(),filesRefused:r(),settingsWritten:I().default(!1),replacedForeign:r(),writtenAtMs:jc().min(0)}));function c6o(o){let e=n().safeParse({...o,version:t});if(!e.success)throw Error("home ready row is off-schema");return Buffer.from(_(e.data))}function hQn(o){if(o.length>m)return{ok:!1,reason:"oversize"};let e=nt(o.toString("utf8"),!1),s=p().safeParse(e);if(s.success&&s.data.version!==t)return{ok:!1,reason:"unsupported_version"};let a=n().safeParse(e);if(!a.success)return{ok:!1,reason:"malformed"};let{version:l,...i}=a.data;return{ok:!0,ready:i}}
export{c6o,hQn};
