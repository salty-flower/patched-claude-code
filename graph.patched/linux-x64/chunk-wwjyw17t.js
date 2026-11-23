// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Th,On}from"./chunk-374g520d.js";import{pV,MEt}from"./chunk-4yh9vev3.js";import{wqe,Jk,$d,Hy,Rx}from"./chunk-zaxe68t4.js";function d(e){return e!==void 0&&Th(e)?{kind:"unresolved",reason:"Its marketplace is a folder whose catalog could not be read, or lists it no more."}:{kind:"copy"}}async function H5o(e,o){let[r,l]=await Promise.all([Rx(e,o),$d(o)]),n=l[On(e).marketplace??""]?.source;if(r===null)return d(n);let{source:t}=r.entry,c=wqe(t,n);if(typeof t!=="string"||!c)return{kind:"copy"};let i=Hy(r.marketplaceInstallLocation)===void 0?"workspace":"system",a=await pV(e,r.marketplaceInstallLocation,t,l,Jk(),o,i);return a.kind==="ok"?{kind:"folder",path:a.entryPath}:{kind:"unresolved",reason:MEt(a,r.marketplaceInstallLocation,t).message}}export{H5o};
