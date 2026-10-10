// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{lf}from"./chunk-3cynezh1.js";import{En}from"./chunk-nrk8z90j.js";import{z2,PKe}from"./chunk-s9zkj3fw.js";import{kHe,Fb,Ll,Wh,Sk}from"./chunk-sfn1dbxq.js";function d(e){return e!==void 0&&lf(e)?{kind:"unresolved",reason:"Its marketplace is a folder whose catalog could not be read, or lists it no more."}:{kind:"copy"}}async function IIr(e,o){let[r,l]=await Promise.all([Sk(e,o),Ll(o)]),n=l[En(e).marketplace??""]?.source;if(r===null)return d(n);let{source:t}=r.entry,c=kHe(t,n);if(typeof t!=="string"||!c)return{kind:"copy"};let i=Wh(r.marketplaceInstallLocation)===void 0?"workspace":"system",a=await z2(e,r.marketplaceInstallLocation,t,l,Fb(),o,i);return a.kind==="ok"?{kind:"folder",path:a.entryPath}:{kind:"unresolved",reason:PKe(a,r.marketplaceInstallLocation,t).message}}export{IIr};
