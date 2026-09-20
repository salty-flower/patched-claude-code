// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{gs}from"./chunk-hsnx5x8q.js";import{VA,B,Xs}from"./chunk-b3g6g5ra.js";import{S}from"./chunk-6qjhsn35.js";import{Ne,k,dn,L}from"./chunk-cf8g1269.js";L();function _(){return gs().get(process.stdout)?.invalidatePrevFrame()}function b(z){return z.activeOverlays.size>0}function g(F){return v(F.activeOverlays)}function T(I){return s4t(I.activeOverlays)}function d(K){for(const M of K.activeOverlays){if(f.has(M)){return!0}}return!1}function C(j){for(const q of j.activeOverlays){if(l.has(q)){return!0}}return!1}var E=new Set(["autocomplete"]),N=new Set(["above-prompt-input","above-prompt-select"]),f=new Set(["history-search"]),l=new Set(["elicitation","elicitation-url"]),Uhe=2;function Ys(n,y){let x=S(8),o=y===void 0?!0:y,s=Ne(VA)?.setState,h,m;if(x[0]!==o||x[1]!==n||x[2]!==s)h=()=>{if(!o||!s){return}return s((c)=>{if(c.activeOverlays.has(n)){return c}let p=new Set(c.activeOverlays);return p.add(n),{...c,activeOverlays:p}}),()=>{s((u)=>{if(!u.activeOverlays.has(n)){return u}let R=new Set(u.activeOverlays);return R.delete(n),{...u,activeOverlays:R}})}},m=[n,o,s],x[0]=o,x[1]=n,x[2]=s,x[3]=h,x[4]=m;else h=x[3],m=x[4];k(h,m);let w,A;if(x[5]!==o)w=()=>{if(!o){return}return _},A=[o],x[5]=o,x[6]=w,x[7]=A;else w=x[6],A=x[7];dn(w,A)}function qvn(){return B(b)}function v(t){for(let e of t)if(!N.has(e))return!0;return!1}function Vvn(){return B(g)}function s4t(t){for(let e of t)if(!E.has(e))return!0;return!1}function r1(){return B(T)}function PJe(){return Xs(d)??!1}function i4t(){return Xs(C)??!1}
export{Uhe,Ys,qvn,Vvn,s4t,r1,PJe,i4t};
