// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Th,In}from"./chunk-gywtf5sd.js";import{hz,Fkt}from"./chunk-dd7bz0vm.js";import{CVe,Zv,Fd,Ny,Px}from"./chunk-wqb2b4v0.js";function d(e){return e!==void 0&&Th(e)?{kind:"unresolved",reason:"Its marketplace is a folder whose catalog could not be read, or lists it no more."}:{kind:"copy"}}async function c9o(e,o){let[r,l]=await Promise.all([Px(e,o),Fd(o)]),n=l[In(e).marketplace??""]?.source;if(r===null)return d(n);let{source:t}=r.entry,c=CVe(t,n);if(typeof t!=="string"||!c)return{kind:"copy"};let i=Ny(r.marketplaceInstallLocation)===void 0?"workspace":"system",a=await hz(e,r.marketplaceInstallLocation,t,l,Zv(),o,i);return a.kind==="ok"?{kind:"folder",path:a.entryPath}:{kind:"unresolved",reason:Fkt(a,r.marketplaceInstallLocation,t).message}}export{c9o};
