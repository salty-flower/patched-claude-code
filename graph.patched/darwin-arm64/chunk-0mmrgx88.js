// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{As}from"./chunk-en1z36t1.js";import{VP,U,Ss}from"./chunk-2e1d5j6k.js";import{_}from"./chunk-c8ey99v5.js";import{De,E,vn,N}from"./chunk-jegfnmzv.js";N();function L(){return As().get(process.stdout)?.invalidatePrevFrame()}function g(F){return F.activeOverlays.size>0}function T(I){return v(I.activeOverlays)}function d(K){return mIt(K.activeOverlays)}function C(M){for(const j of M.activeOverlays){if(f.has(j)){return!0}}return!1}function P(k){for(const q of k.activeOverlays){if(l.has(q)){return!0}}return!1}var A=new Set(["autocomplete"]),b=new Set(["above-prompt-input","above-prompt-select"]),f=new Set(["history-search"]),l=new Set(["elicitation","elicitation-url"]),vae=2;function Hs(n,y){let x=_(8),o=y===void 0?!0:y,s=De(VP)?.setState,S,h;if(x[0]!==o||x[1]!==n||x[2]!==s)S=()=>{if(!o||!s){return}return s((c)=>{if(c.activeOverlays.has(n)){return c}let m=new Set(c.activeOverlays);return m.add(n),{...c,activeOverlays:m}}),()=>{s((u)=>{if(!u.activeOverlays.has(n)){return u}let p=new Set(u.activeOverlays);return p.delete(n),{...u,activeOverlays:p}})}},h=[n,o,s],x[0]=o,x[1]=n,x[2]=s,x[3]=S,x[4]=h;else S=x[3],h=x[4];E(S,h);let R,w;if(x[5]!==o)R=()=>{if(!o){return}return L},w=[o],x[5]=o,x[6]=R,x[7]=w;else R=x[6],w=x[7];vn(R,w)}function fQt(){return U(g)}function v(t){for(let e of t)if(!b.has(e))return!0;return!1}function mQt(){return U(T)}function mIt(t){for(let e of t)if(!A.has(e))return!0;return!1}function H1(){return U(d)}function Mje(){return Ss(C)??!1}function gIt(){return Ss(P)??!1}
export{vae,Hs,fQt,mQt,mIt,H1,Mje,gIt};
