// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Vy,Ct,Lp}from"./chunk-twxt3h9y.js";import{U}from"./chunk-cdky7mz1.js";import{Ra}from"./chunk-a46s93v9.js";import{UEt,MSe}from"./chunk-h3bc7dkc.js";import{k,J,ZT,L}from"./chunk-1cnhgfv0.js";L();function J0(){let[o,e]=ZT((r)=>r+1,0);return k(()=>Lp(e),[]),o}function OO(o){return J0(),o()}L();function Umn(o,e){return UEt(o)??UEt(e)??Vy()}function yte(o){return Ct(Umn(o.mainLoopModelForSession,o.mainLoopModel))}function _te(){let o=U((n)=>n.mainLoopModel),e=U((n)=>n.mainLoopModelForSession),r=J0(),i=Ra();return J(()=>MSe(e,o),[e,o,r,i])}function UUt(){let o=U((n)=>n.mainLoopModel),e=U((n)=>n.mainLoopModelForSession),r=J0(),i=Ra();return J(()=>Umn(e,o),[e,o,r,i])}function Uc(){let o=U((n)=>n.mainLoopModel),e=U((n)=>n.mainLoopModelForSession),r=J0(),i=Ra();return J(()=>yte({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,r,i])}
export{J0,OO,Umn,yte,_te,UUt,Uc};
