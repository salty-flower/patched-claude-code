// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{gs}from"./chunk-f25gfe55.js";import{YC,B,Xs}from"./chunk-myc7nzmw.js";import{b}from"./chunk-mvpw0rjp.js";import{Ne,A,dn,M}from"./chunk-ncc6kxz8.js";M();function _(){return gs().get(process.stdout)?.invalidatePrevFrame()}function L(z){return z.activeOverlays.size>0}function g(F){return v(F.activeOverlays)}function T(I){return K4t(I.activeOverlays)}function d(K){for(const j of K.activeOverlays){if(f.has(j)){return!0}}return!1}function C(k){for(const q of k.activeOverlays){if(l.has(q)){return!0}}return!1}var E=new Set(["autocomplete"]),N=new Set(["above-prompt-input","above-prompt-select"]),f=new Set(["history-search"]),l=new Set(["elicitation","elicitation-url"]),Qhe=2;function Ys(n,y){let x=b(8),o=y===void 0?!0:y,s=Ne(YC)?.setState,S,h;if(x[0]!==o||x[1]!==n||x[2]!==s)S=()=>{if(!o||!s){return}return s((c)=>{if(c.activeOverlays.has(n)){return c}let m=new Set(c.activeOverlays);return m.add(n),{...c,activeOverlays:m}}),()=>{s((u)=>{if(!u.activeOverlays.has(n)){return u}let p=new Set(u.activeOverlays);return p.delete(n),{...u,activeOverlays:p}})}},h=[n,o,s],x[0]=o,x[1]=n,x[2]=s,x[3]=S,x[4]=h;else S=x[3],h=x[4];A(S,h);let R,w;if(x[5]!==o)R=()=>{if(!o){return}return _},w=[o],x[5]=o,x[6]=R,x[7]=w;else R=x[6],w=x[7];dn(R,w)}function Bvn(){return B(L)}function v(t){for(let e of t)if(!N.has(e))return!0;return!1}function jvn(){return B(g)}function K4t(t){for(let e of t)if(!E.has(e))return!0;return!1}function f$(){return B(T)}function tJe(){return Xs(d)??!1}function Y4t(){return Xs(C)??!1}
export{Qhe,Ys,Bvn,jvn,K4t,f$,tJe,Y4t};
