// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Fp}from"./chunk-5zqw5ss6.js";import{Tn}from"./chunk-wn3mk0qg.js";import{vj,vqe}from"./chunk-0avs5kwj.js";import{FIe,lS,vl,Th,NE}from"./chunk-g263vvvn.js";function d(e){return e!==void 0&&Fp(e)?{kind:"unresolved",reason:"Its marketplace is a folder whose catalog could not be read, or lists it no more."}:{kind:"copy"}}async function $kr(e,o){let[r,l]=await Promise.all([NE(e,o),vl(o)]),n=l[Tn(e).marketplace??""]?.source;if(r===null)return d(n);let{source:t}=r.entry,c=FIe(t,n);if(typeof t!=="string"||!c)return{kind:"copy"};let i=Th(r.marketplaceInstallLocation)===void 0?"workspace":"system",a=await vj(e,r.marketplaceInstallLocation,t,l,lS(),o,i);return a.kind==="ok"?{kind:"folder",path:a.entryPath}:{kind:"unresolved",reason:vqe(a,r.marketplaceInstallLocation,t).message}}export{$kr};
