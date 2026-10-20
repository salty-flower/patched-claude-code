// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Cn}from"./chunk-gzssw8ss.js";import{Qf}from"./chunk-q6vwcyd6.js";import{fz,QXe}from"./chunk-xw74sg2f.js";import{L$e,iE,id,Xy,WC}from"./chunk-na9nw575.js";function d(e){return e!==void 0&&Qf(e)?{kind:"unresolved",reason:"Its marketplace is a folder whose catalog could not be read, or lists it no more."}:{kind:"copy"}}async function cVr(e,o){let[r,l]=await Promise.all([WC(e,o),id(o)]),n=l[Cn(e).marketplace??""]?.source;if(r===null)return d(n);let{source:t}=r.entry,c=L$e(t,n);if(typeof t!=="string"||!c)return{kind:"copy"};let i=Xy(r.marketplaceInstallLocation)===void 0?"workspace":"system",a=await fz(e,r.marketplaceInstallLocation,t,l,iE(),o,i);return a.kind==="ok"?{kind:"folder",path:a.entryPath}:{kind:"unresolved",reason:QXe(a,r.marketplaceInstallLocation,t).message}}export{cVr};
