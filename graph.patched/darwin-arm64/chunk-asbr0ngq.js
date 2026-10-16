// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{oi}from"./chunk-y60e3peb.js";import{w}from"./chunk-d6ktxc5j.js";import{bP,V,Wo}from"./chunk-dyec77x8.js";import{ve,P,Jt,F}from"./chunk-57p87fb1.js";F();function g(){return oi().get(process.stdout)?.invalidatePrevFrame()}function K(e){return e.activeOverlays.size>0}function U(e){return S(e.activeOverlays)}function z(e){return str(e.activeOverlays)}function M(e){for(const t of e.activeOverlays){if(v.has(t)){return!0}}return!1}function j(e){for(const t of e.activeOverlays){if(f.has(t)){return!0}}return!1}var N=new Set(["autocomplete"]),A=new Set(["above-prompt-input","above-prompt-select"]),v=new Set(["history-search"]),f=new Set(["elicitation","elicitation-url",...[]]),oDe=2;function va(e,t){let O=w(8),r=t===void 0?!0:t,n=ve(bP)?.setState,b,x;if(O[0]!==r||O[1]!==e||O[2]!==n)b=()=>{if(!r||!n){return}return n((c)=>{if(c.activeOverlays.has(e)){return c}let _=new Set(c.activeOverlays);return _.add(e),{...c,activeOverlays:_}}),()=>{n((u)=>{if(!u.activeOverlays.has(e)){return u}let y=new Set(u.activeOverlays);return y.delete(e),{...u,activeOverlays:y}})}},x=[e,r,n],O[0]=r,O[1]=e,O[2]=n,O[3]=b,O[4]=x;else b=O[3],x=O[4];P(b,x);let E,m;if(O[5]!==r)E=()=>{if(!r){return}return g},m=[r],O[5]=r,O[6]=E,O[7]=m;else E=O[6],m=O[7];Jt(E,m)}function xVr(){return V(K)}function S(e){for(let t of e)if(!A.has(t))return!0;return!1}function Hbn(){return V(U)}function str(e){for(let t of e)if(!N.has(t))return!0;return!1}function a8(){return V(z)}function tEt(){return Wo(M)??!1}function itr(){return Wo(j)??!1}
export{oDe,va,xVr,Hbn,str,a8,tEt,itr};
