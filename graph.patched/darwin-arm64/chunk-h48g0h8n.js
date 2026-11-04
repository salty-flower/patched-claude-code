// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Wh,Bn}from"./chunk-h21zbzen.js";import{I4,gft}from"./chunk-9yh8vn2r.js";import{A4e,Lv,Rc,hb,sx}from"./chunk-0x9x817t.js";function d(e){return e!==void 0&&Wh(e)?{kind:"unresolved",reason:"Its marketplace is a folder whose catalog could not be read, or lists it no more."}:{kind:"copy"}}async function LAo(e,o){let[r,l]=await Promise.all([sx(e,o),Rc(o)]),n=l[Bn(e).marketplace??""]?.source;if(r===null)return d(n);let{source:t}=r.entry,c=A4e(t,n);if(typeof t!=="string"||!c)return{kind:"copy"};let i=hb(r.marketplaceInstallLocation)===void 0?"workspace":"system",a=await I4(e,r.marketplaceInstallLocation,t,l,Lv(),o,i);return a.kind==="ok"?{kind:"folder",path:a.entryPath}:{kind:"unresolved",reason:gft(a,r.marketplaceInstallLocation,t).message}}export{LAo};
