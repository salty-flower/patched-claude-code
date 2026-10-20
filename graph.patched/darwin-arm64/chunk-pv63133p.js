// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{dt}from"./chunk-anq3mk5n.js";import{_}from"./chunk-tdxkq523.js";import{f}from"./chunk-ynakaye4.js";import{Dc,O,u,N,T}from"./chunk-xv841za9.js";var t=1,m=65536,r=f(()=>Dc().min(0).default(0)),p=f(()=>u({version:Dc()})),n=f(()=>u({version:T(t),generation:Dc().min(1),appliedBeforeFirstAsk:O(),outcome:N(["applied","partial"]),filesApplied:r(),filesRefused:r(),settingsWritten:O().default(!1),replacedForeign:r(),writtenAtMs:Dc().min(0)}));function yso(o){let e=n().safeParse({...o,version:t});if(!e.success)throw Error("home ready row is off-schema");return Buffer.from(_(e.data))}function AOn(o){if(o.length>m)return{ok:!1,reason:"oversize"};let e=dt(o.toString("utf8"),!1),s=p().safeParse(e);if(s.success&&s.data.version!==t)return{ok:!1,reason:"unsupported_version"};let a=n().safeParse(e);if(!a.success)return{ok:!1,reason:"malformed"};let{version:l,...i}=a.data;return{ok:!0,ready:i}}
export{yso,AOn};
