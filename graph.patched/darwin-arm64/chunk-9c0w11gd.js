// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{$p}from"./chunk-5g70wphz.js";import{Cn}from"./chunk-zza0b6kj.js";import{Dj,xze}from"./chunk-gt8bh0pr.js";import{KIe,cb,vl,Ch,Uv}from"./chunk-nwqfvmza.js";function d(e){return e!==void 0&&$p(e)?{kind:"unresolved",reason:"Its marketplace is a folder whose catalog could not be read, or lists it no more."}:{kind:"copy"}}async function cCr(e,o){let[r,l]=await Promise.all([Uv(e,o),vl(o)]),n=l[Cn(e).marketplace??""]?.source;if(r===null)return d(n);let{source:t}=r.entry,c=KIe(t,n);if(typeof t!=="string"||!c)return{kind:"copy"};let i=Ch(r.marketplaceInstallLocation)===void 0?"workspace":"system",a=await Dj(e,r.marketplaceInstallLocation,t,l,cb(),o,i);return a.kind==="ok"?{kind:"folder",path:a.entryPath}:{kind:"unresolved",reason:xze(a,r.marketplaceInstallLocation,t).message}}export{cCr};
