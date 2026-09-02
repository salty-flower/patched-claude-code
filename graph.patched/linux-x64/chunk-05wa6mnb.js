// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Ac,Xe,cHn,x}from"./chunk-1e5y3pjf.js";import{Kir,fA}from"./chunk-0sdpjn9a.js";import{Ql,Oe,jo}from"./chunk-4n7ktjmt.js";function d(){return null}function s(){return[]}function Hpt(e,r){return}function l(e){return typeof e?.model==="string"&&e.model.trim()!==""}function Xa(e){let r=f(),t=e?Xe(e):void 0,n=t?Ql(t)?.image_limits:void 0,o=n?{maxWidth:n.maxWidth,maxHeight:n.maxHeight,maxBase64Size:n.maxBase64Size}:void 0,i=e?Hpt(e,{ignore1mTag:!0})?.imageLimits??o:void 0;if(!i){if(r===fA.maxBase64Size)return fA;return{...fA,maxBase64Size:r,targetRawSize:r*3/4}}let a=i.maxBase64Size??r;return{maxWidth:i.maxWidth??fA.maxWidth,maxHeight:i.maxHeight??fA.maxHeight,maxBase64Size:a,targetRawSize:i.targetRawSize??a*3/4}}function f(){if(Oe()==="firstParty"&&jo()&&x("tengu_crimson_vector",!1))return Kir;return fA.maxBase64Size}
export{Hpt,Xa};
