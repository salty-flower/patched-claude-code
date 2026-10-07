// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Bs,ke,x,Qt,L}from"./chunk-bkksmm2y.js";import{w}from"./chunk-k8a9av7b.js";import{TT,V,zo}from"./chunk-8h7099gw.js";L();function F(){return Bs().get(process.stdout)?.invalidatePrevFrame()}function I(e){return e.activeOverlays.size>0}function K(e){return S(e.activeOverlays)}function M(e){return S1n(e.activeOverlays)}function j(e){for(const t of e.activeOverlays){if(u.has(t)){return!0}}return!1}function k(e){for(const t of e.activeOverlays){if(f.has(t)){return!0}}return!1}var E=new Set(["autocomplete"]),N=new Set(["above-prompt-input","above-prompt-select"]),u=new Set(["history-search"]),f=new Set(["elicitation","elicitation-url"]),zAe=2;function ka(e,t){let O=w(8),r=t===void 0?!0:t,n=ke(TT)?.setState,b,y;if(O[0]!==r||O[1]!==e||O[2]!==n)b=()=>{if(!r||!n){return}return n((c)=>{if(c.activeOverlays.has(e)){return c}let A=new Set(c.activeOverlays);return A.add(e),{...c,activeOverlays:A}}),()=>{n((v)=>{if(!v.activeOverlays.has(e)){return v}let h=new Set(v.activeOverlays);return h.delete(e),{...v,activeOverlays:h}})}},y=[e,r,n],O[0]=r,O[1]=e,O[2]=n,O[3]=b,O[4]=y;else b=O[3],y=O[4];x(b,y);let m,R;if(O[5]!==r)m=()=>{if(!r){return}return F},R=[r],O[5]=r,O[6]=m,O[7]=R;else m=O[6],R=O[7];Qt(m,R)}function XEr(){return V(I)}function S(e){for(let t of e)if(!N.has(t))return!0;return!1}function Jen(){return V(K)}function S1n(e){for(let t of e)if(!E.has(t))return!0;return!1}function nK(){return V(M)}function Uat(){return zo(j)??!1}function b1n(){return zo(k)??!1}
export{zAe,ka,XEr,Jen,S1n,nK,Uat,b1n};
