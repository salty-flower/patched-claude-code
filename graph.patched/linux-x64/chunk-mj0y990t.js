// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Tn}from"./chunk-ww4tybgt.js";import{Qf}from"./chunk-m7gr14b0.js";import{r2,jXe}from"./chunk-n6s5n8rn.js";import{CFe,sv,id,Yy,UT}from"./chunk-rncrmfyt.js";function d(e){return e!==void 0&&Qf(e)?{kind:"unresolved",reason:"Its marketplace is a folder whose catalog could not be read, or lists it no more."}:{kind:"copy"}}async function NKr(e,o){let[r,l]=await Promise.all([UT(e,o),id(o)]),n=l[Tn(e).marketplace??""]?.source;if(r===null)return d(n);let{source:t}=r.entry,c=CFe(t,n);if(typeof t!=="string"||!c)return{kind:"copy"};let i=Yy(r.marketplaceInstallLocation)===void 0?"workspace":"system",a=await r2(e,r.marketplaceInstallLocation,t,l,sv(),o,i);return a.kind==="ok"?{kind:"folder",path:a.entryPath}:{kind:"unresolved",reason:jXe(a,r.marketplaceInstallLocation,t).message}}export{NKr};
