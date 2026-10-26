// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Ws}from"./chunk-gdbt8ma3.js";import{w}from"./chunk-zqxc4qtb.js";import{XI,K,Yo}from"./chunk-p82eferg.js";import{Se,P,Xt,j}from"./chunk-s8vmszp2.js";j();function g(){return Ws().get(process.stdout)?.invalidatePrevFrame()}function F(e){return e.activeOverlays.size>0}function U(e){return S(e.activeOverlays)}function V(e){return Rgr(e.activeOverlays)}function z(e){for(const t of e.activeOverlays){if(v.has(t)){return!0}}return!1}function M(e){for(const t of e.activeOverlays){if(f.has(t)){return!0}}return!1}var N=new Set(["autocomplete"]),A=new Set(["above-prompt-input","above-prompt-select"]),v=new Set(["history-search"]),f=new Set(["elicitation","elicitation-url",...[]]),SUe=2;function ka(e,t){let O=w(8),r=t===void 0?!0:t,n=Se(XI)?.setState,b,x;if(O[0]!==r||O[1]!==e||O[2]!==n)b=()=>{if(!r||!n){return}return n((c)=>{if(c.activeOverlays.has(e)){return c}let _=new Set(c.activeOverlays);return _.add(e),{...c,activeOverlays:_}}),()=>{n((u)=>{if(!u.activeOverlays.has(e)){return u}let y=new Set(u.activeOverlays);return y.delete(e),{...u,activeOverlays:y}})}},x=[e,r,n],O[0]=r,O[1]=e,O[2]=n,O[3]=b,O[4]=x;else b=O[3],x=O[4];P(b,x);let E,m;if(O[5]!==r)E=()=>{if(!r){return}return g},m=[r],O[5]=r,O[6]=E,O[7]=m;else E=O[6],m=O[7];Xt(E,m)}function hro(){return K(F)}function S(e){for(let t of e)if(!A.has(t))return!0;return!1}function CIn(){return K(U)}function Rgr(e){for(let t of e)if(!N.has(t))return!0;return!1}function Zz(){return K(V)}function cPt(){return Yo(z)??!1}function xgr(){return Yo(M)??!1}
export{SUe,ka,hro,CIn,Rgr,Zz,cPt,xgr};
