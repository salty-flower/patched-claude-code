// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ip}from"./chunk-nqb0d8cm.js";import{Cn}from"./chunk-vhhr71m6.js";import{IB,zWe}from"./chunk-qdb771kt.js";import{$xe,JS,pl,ch,gv}from"./chunk-y0b3kvx1.js";function d(e){return e!==void 0&&Ip(e)?{kind:"unresolved",reason:"Its marketplace is a folder whose catalog could not be read, or lists it no more."}:{kind:"copy"}}async function c_r(e,o){let[r,l]=await Promise.all([gv(e,o),pl(o)]),n=l[Cn(e).marketplace??""]?.source;if(r===null)return d(n);let{source:t}=r.entry,c=$xe(t,n);if(typeof t!=="string"||!c)return{kind:"copy"};let i=ch(r.marketplaceInstallLocation)===void 0?"workspace":"system",a=await IB(e,r.marketplaceInstallLocation,t,l,JS(),o,i);return a.kind==="ok"?{kind:"folder",path:a.entryPath}:{kind:"unresolved",reason:zWe(a,r.marketplaceInstallLocation,t).message}}export{c_r};
