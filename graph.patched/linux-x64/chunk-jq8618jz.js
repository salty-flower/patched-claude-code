// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ip}from"./chunk-p72qafcy.js";import{kn}from"./chunk-hyvfy8xz.js";import{_1,$ze}from"./chunk-x35ssz7t.js";import{Ixe,Xb,ul,ch,pE}from"./chunk-9wqh5j7s.js";function d(e){return e!==void 0&&Ip(e)?{kind:"unresolved",reason:"Its marketplace is a folder whose catalog could not be read, or lists it no more."}:{kind:"copy"}}async function Uyr(e,o){let[r,l]=await Promise.all([pE(e,o),ul(o)]),n=l[kn(e).marketplace??""]?.source;if(r===null)return d(n);let{source:t}=r.entry,c=Ixe(t,n);if(typeof t!=="string"||!c)return{kind:"copy"};let i=ch(r.marketplaceInstallLocation)===void 0?"workspace":"system",a=await _1(e,r.marketplaceInstallLocation,t,l,Xb(),o,i);return a.kind==="ok"?{kind:"folder",path:a.entryPath}:{kind:"unresolved",reason:$ze(a,r.marketplaceInstallLocation,t).message}}export{Uyr};
