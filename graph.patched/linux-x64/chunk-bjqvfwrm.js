// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{As}from"./chunk-307b14z2.js";import{NP,B,bs}from"./chunk-pv5vwvkf.js";import{y}from"./chunk-wdpeygc3.js";import{De,E,kn,N}from"./chunk-vm1tjjym.js";N();function L(){return As().get(process.stdout)?.invalidatePrevFrame()}function g(F){return F.activeOverlays.size>0}function T(I){return v(I.activeOverlays)}function d(K){return Zxt(K.activeOverlays)}function C(M){for(const j of M.activeOverlays){if(f.has(j)){return!0}}return!1}function P(k){for(const q of k.activeOverlays){if(l.has(q)){return!0}}return!1}var _=new Set(["autocomplete"]),b=new Set(["above-prompt-input","above-prompt-select"]),f=new Set(["history-search"]),l=new Set(["elicitation","elicitation-url"]),Sae=2;function Rs(n,x){let S=y(8),o=x===void 0?!0:x,s=De(NP)?.setState,h,m;if(S[0]!==o||S[1]!==n||S[2]!==s)h=()=>{if(!o||!s){return}return s((c)=>{if(c.activeOverlays.has(n)){return c}let p=new Set(c.activeOverlays);return p.add(n),{...c,activeOverlays:p}}),()=>{s((u)=>{if(!u.activeOverlays.has(n)){return u}let R=new Set(u.activeOverlays);return R.delete(n),{...u,activeOverlays:R}})}},m=[n,o,s],S[0]=o,S[1]=n,S[2]=s,S[3]=h,S[4]=m;else h=S[3],m=S[4];E(h,m);let w,A;if(S[5]!==o)w=()=>{if(!o){return}return L},A=[o],S[5]=o,S[6]=w,S[7]=A;else w=S[6],A=S[7];kn(w,A)}function z7t(){return B(g)}function v(t){for(let e of t)if(!b.has(e))return!0;return!1}function V7t(){return B(T)}function Zxt(t){for(let e of t)if(!_.has(e))return!0;return!1}function EN(){return B(d)}function vGe(){return bs(C)??!1}function eLt(){return bs(P)??!1}
export{Sae,Rs,z7t,V7t,Zxt,EN,vGe,eLt};
