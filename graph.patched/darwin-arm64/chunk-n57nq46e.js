// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Ac,Ye,uwn,I}from"./chunk-bsdtxcdc.js";import{nsr,fA}from"./chunk-dckv2srq.js";import{Ql,Ne,jo}from"./chunk-znxmbm58.js";function d(){return null}function s(){return[]}function Eft(e,r){return}function l(e){return typeof e?.model==="string"&&e.model.trim()!==""}function Ya(e){let r=f(),t=e?Ye(e):void 0,n=t?Ql(t)?.image_limits:void 0,o=n?{maxWidth:n.maxWidth,maxHeight:n.maxHeight,maxBase64Size:n.maxBase64Size}:void 0,i=e?Eft(e,{ignore1mTag:!0})?.imageLimits??o:void 0;if(!i){if(r===fA.maxBase64Size)return fA;return{...fA,maxBase64Size:r,targetRawSize:r*3/4}}let a=i.maxBase64Size??r;return{maxWidth:i.maxWidth??fA.maxWidth,maxHeight:i.maxHeight??fA.maxHeight,maxBase64Size:a,targetRawSize:i.targetRawSize??a*3/4}}function f(){if(Ne()==="firstParty"&&jo()&&I("tengu_crimson_vector",!1))return nsr;return fA.maxBase64Size}
export{Eft,Ya};
