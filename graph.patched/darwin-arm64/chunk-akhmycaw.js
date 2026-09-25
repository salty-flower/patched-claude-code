// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{ks}from"./chunk-gk57vfsv.js";import{w}from"./chunk-1qj92kzv.js";import{mx,U,hs}from"./chunk-cdky7mz1.js";import{Ie,k,cn,L}from"./chunk-1cnhgfv0.js";L();function Y(){return ks().get(process.stdout)?.invalidatePrevFrame()}function z(e){return e.activeOverlays.size>0}function F(e){return x(e.activeOverlays)}function I(e){return Dgn(e.activeOverlays)}function K(e){for(const t of e.activeOverlays){if(u.has(t)){return!0}}return!1}function M(e){for(const t of e.activeOverlays){if(f.has(t)){return!0}}return!1}var R=new Set(["autocomplete"]),E=new Set(["above-prompt-input","above-prompt-select"]),u=new Set(["history-search"]),f=new Set(["elicitation","elicitation-url"]),Khe=2;function di(e,t){let S=w(8),r=t===void 0?!0:t,n=Ie(mx)?.setState,O,b;if(S[0]!==r||S[1]!==e||S[2]!==n)O=()=>{if(!r||!n){return}return n((c)=>{if(c.activeOverlays.has(e)){return c}let y=new Set(c.activeOverlays);return y.add(e),{...c,activeOverlays:y}}),()=>{n((v)=>{if(!v.activeOverlays.has(e)){return v}let A=new Set(v.activeOverlays);return A.delete(e),{...v,activeOverlays:A}})}},b=[e,r,n],S[0]=r,S[1]=e,S[2]=n,S[3]=O,S[4]=b;else O=S[3],b=S[4];k(O,b);let h,m;if(S[5]!==r)h=()=>{if(!r){return}return Y},m=[r],S[5]=r,S[6]=h,S[7]=m;else h=S[6],m=S[7];cn(h,m)}function T9n(){return U(z)}function x(e){for(let t of e)if(!E.has(t))return!0;return!1}function xBt(){return U(F)}function Dgn(e){for(let t of e)if(!R.has(t))return!0;return!1}function pW(){return U(I)}function m8e(){return hs(K)??!1}function Lgn(){return hs(M)??!1}
export{Khe,di,T9n,xBt,Dgn,pW,m8e,Lgn};
