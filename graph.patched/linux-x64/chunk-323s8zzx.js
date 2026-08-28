// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Ud,Ye,ehn,x}from"./chunk-ns0ekkj0.js";import{lQn,yE}from"./chunk-fa374z64.js";import{dc,Oe,Bo}from"./chunk-ryvgd9z0.js";function d(){return null}function s(){return[]}function Yct(e,r){return}function l(e){return typeof e?.model==="string"&&e.model.trim()!==""}function Ma(e){let r=f(),t=e?Ye(e):void 0,i=t?dc(t)?.image_limits:void 0,o=i?{maxWidth:i.maxWidth,maxHeight:i.maxHeight,maxBase64Size:i.maxBase64Size}:void 0,n=e?Yct(e,{ignore1mTag:!0})?.imageLimits??o:void 0;if(!n){if(r===yE.maxBase64Size)return yE;return{...yE,maxBase64Size:r,targetRawSize:r*3/4}}let a=n.maxBase64Size??r;return{maxWidth:n.maxWidth??yE.maxWidth,maxHeight:n.maxHeight??yE.maxHeight,maxBase64Size:a,targetRawSize:n.targetRawSize??a*3/4}}function f(){if(Oe()==="firstParty"&&Bo()&&x("tengu_crimson_vector",!1))return lQn;return yE.maxBase64Size}
export{Yct,Ma};
