// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Cn}from"./chunk-hc3mrz77.js";import{Mf}from"./chunk-9155m2kg.js";import{gG,U8e}from"./chunk-5745m8g4.js";import{xNe,$w,ed,ky,bT}from"./chunk-38nf1dnm.js";function d(e){return e!==void 0&&Mf(e)?{kind:"unresolved",reason:"Its marketplace is a folder whose catalog could not be read, or lists it no more."}:{kind:"copy"}}async function h1r(e,o){let[r,l]=await Promise.all([bT(e,o),ed(o)]),n=l[Cn(e).marketplace??""]?.source;if(r===null)return d(n);let{source:t}=r.entry,c=xNe(t,n);if(typeof t!=="string"||!c)return{kind:"copy"};let i=ky(r.marketplaceInstallLocation)===void 0?"workspace":"system",a=await gG(e,r.marketplaceInstallLocation,t,l,$w(),o,i);return a.kind==="ok"?{kind:"folder",path:a.entryPath}:{kind:"unresolved",reason:U8e(a,r.marketplaceInstallLocation,t).message}}export{h1r};
