// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Tn}from"./chunk-jmghkf3s.js";import{Hf}from"./chunk-d9vq4daa.js";import{CG,q8e}from"./chunk-chdmy0ef.js";import{FNe,$w,td,Cy,EC}from"./chunk-996thspe.js";function d(e){return e!==void 0&&Hf(e)?{kind:"unresolved",reason:"Its marketplace is a folder whose catalog could not be read, or lists it no more."}:{kind:"copy"}}async function NBr(e,o){let[r,l]=await Promise.all([EC(e,o),td(o)]),n=l[Tn(e).marketplace??""]?.source;if(r===null)return d(n);let{source:t}=r.entry,c=FNe(t,n);if(typeof t!=="string"||!c)return{kind:"copy"};let i=Cy(r.marketplaceInstallLocation)===void 0?"workspace":"system",a=await CG(e,r.marketplaceInstallLocation,t,l,$w(),o,i);return a.kind==="ok"?{kind:"folder",path:a.entryPath}:{kind:"unresolved",reason:q8e(a,r.marketplaceInstallLocation,t).message}}export{NBr};
