// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{On}from"./chunk-qnvapa9t.js";import{Tm}from"./chunk-cemwep0x.js";import{SV,Let}from"./chunk-bp7z975p.js";import{cje,jE,Rd,O_,GT}from"./chunk-31gxg38t.js";function d(e){return e!==void 0&&Tm(e)?{kind:"unresolved",reason:"Its marketplace is a folder whose catalog could not be read, or lists it no more."}:{kind:"copy"}}async function tJr(e,o){let[r,l]=await Promise.all([GT(e,o),Rd(o)]),n=l[On(e).marketplace??""]?.source;if(r===null)return d(n);let{source:t}=r.entry,c=cje(t,n);if(typeof t!=="string"||!c)return{kind:"copy"};let i=O_(r.marketplaceInstallLocation)===void 0?"workspace":"system",a=await SV(e,r.marketplaceInstallLocation,t,l,jE(),o,i);return a.kind==="ok"?{kind:"folder",path:a.entryPath}:{kind:"unresolved",reason:Let(a,r.marketplaceInstallLocation,t).message}}export{tJr};
