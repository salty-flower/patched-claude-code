// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{U}from"./chunk-wyh8dmft.js";import{yh,Tt}from"./chunk-ce4ppmnp.js";import{xA}from"./chunk-y6w6xm9b.js";import{Mi}from"./chunk-bsshrpje.js";import{G,L}from"./chunk-kt4npzgg.js";import{jNe,foe}from"./chunk-2byjyg85.js";L();function C$t(o,n){return jNe(o)??jNe(n)??yh()}function AMe(o){return Tt(C$t(o.mainLoopModelForSession,o.mainLoopModel))}function gX(){let o=U((e)=>e.mainLoopModel),n=U((e)=>e.mainLoopModelForSession),i=xA(),s=Mi();return G(()=>foe(n,o),[n,o,i,s])}function Dut(){let o=U((e)=>e.mainLoopModel),n=U((e)=>e.mainLoopModelForSession),i=xA(),s=Mi();return G(()=>C$t(n,o),[n,o,i,s])}function Za(){let o=U((e)=>e.mainLoopModel),n=U((e)=>e.mainLoopModelForSession),i=xA(),s=Mi();return G(()=>AMe({mainLoopModel:o,mainLoopModelForSession:n}),[n,o,i,s])}
export{C$t,AMe,gX,Dut,Za};
