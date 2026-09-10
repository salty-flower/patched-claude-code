// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{U}from"./chunk-5xharng0.js";import{_h,kt}from"./chunk-e02s7cks.js";import{PC}from"./chunk-zaekx7nh.js";import{Oi}from"./chunk-ejsms2qn.js";import{G,M}from"./chunk-xgsrj7pc.js";import{e1e,boe}from"./chunk-e55d0yhx.js";M();function WNt(o,n){return e1e(o)??e1e(n)??_h()}function DOe(o){return kt(WNt(o.mainLoopModelForSession,o.mainLoopModel))}function A7(){let o=U((e)=>e.mainLoopModel),n=U((e)=>e.mainLoopModelForSession),i=PC(),s=Oi();return G(()=>boe(n,o),[n,o,i,s])}function Yut(){let o=U((e)=>e.mainLoopModel),n=U((e)=>e.mainLoopModelForSession),i=PC(),s=Oi();return G(()=>WNt(n,o),[n,o,i,s])}function Za(){let o=U((e)=>e.mainLoopModel),n=U((e)=>e.mainLoopModelForSession),i=PC(),s=Oi();return G(()=>DOe({mainLoopModel:o,mainLoopModelForSession:n}),[n,o,i,s])}
export{WNt,DOe,A7,Yut,Za};
