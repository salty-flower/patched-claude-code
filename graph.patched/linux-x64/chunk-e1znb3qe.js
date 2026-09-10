// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{As}from"./chunk-9kcgg3vt.js";import{pO,U,Os}from"./chunk-wyh8dmft.js";import{y}from"./chunk-spjasdq6.js";import{De,v,un,L}from"./chunk-kt4npzgg.js";L();function b(){return As().get(process.stdout)?.invalidatePrevFrame()}function g(F){return F.activeOverlays.size>0}function T(I){return O(I.activeOverlays)}function d(K){return pNt(K.activeOverlays)}function C(M){for(const j of M.activeOverlays){if(f.has(j)){return!0}}return!1}function P(k){for(const q of k.activeOverlays){if(l.has(q)){return!0}}return!1}var N=new Set(["autocomplete"]),_=new Set(["above-prompt-input","above-prompt-select"]),f=new Set(["history-search"]),l=new Set(["elicitation","elicitation-url"]),Fue=2;function ds(n,S){let h=y(8),o=S===void 0?!0:S,s=De(pO)?.setState,m,p;if(h[0]!==o||h[1]!==n||h[2]!==s)m=()=>{if(!o||!s){return}return s((c)=>{if(c.activeOverlays.has(n)){return c}let R=new Set(c.activeOverlays);return R.add(n),{...c,activeOverlays:R}}),()=>{s((u)=>{if(!u.activeOverlays.has(n)){return u}let w=new Set(u.activeOverlays);return w.delete(n),{...u,activeOverlays:w}})}},p=[n,o,s],h[0]=o,h[1]=n,h[2]=s,h[3]=m,h[4]=p;else m=h[3],p=h[4];v(m,p);let A,E;if(h[5]!==o)A=()=>{if(!o){return}return b},E=[o],h[5]=o,h[6]=A,h[7]=E;else A=h[6],E=h[7];un(A,E)}function bin(){return U(g)}function O(t){for(let e of t)if(!_.has(e))return!0;return!1}function Sin(){return U(T)}function pNt(t){for(let e of t)if(!N.has(e))return!0;return!1}function y$(){return U(d)}function VKe(){return Os(C)??!1}function fNt(){return Os(P)??!1}
export{Fue,ds,bin,Sin,pNt,y$,VKe,fNt};
