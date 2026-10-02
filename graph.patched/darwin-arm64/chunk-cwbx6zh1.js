// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Re,T,nn,M,xs}from"./chunk-757fgf90.js";import{w}from"./chunk-naky2abr.js";import{PP,B,us}from"./chunk-zb9h0sw8.js";M();function Y(){return xs().get(process.stdout)?.invalidatePrevFrame()}function z(e){return e.activeOverlays.size>0}function F(e){return x(e.activeOverlays)}function I(e){return wAn(e.activeOverlays)}function K(e){for(const t of e.activeOverlays){if(u.has(t)){return!0}}return!1}function j(e){for(const t of e.activeOverlays){if(f.has(t)){return!0}}return!1}var R=new Set(["autocomplete"]),E=new Set(["above-prompt-input","above-prompt-select"]),u=new Set(["history-search"]),f=new Set(["elicitation","elicitation-url"]),Zbe=2;function Ti(e,t){let S=w(8),r=t===void 0?!0:t,n=Re(PP)?.setState,O,b;if(S[0]!==r||S[1]!==e||S[2]!==n)O=()=>{if(!r||!n){return}return n((c)=>{if(c.activeOverlays.has(e)){return c}let y=new Set(c.activeOverlays);return y.add(e),{...c,activeOverlays:y}}),()=>{n((v)=>{if(!v.activeOverlays.has(e)){return v}let A=new Set(v.activeOverlays);return A.delete(e),{...v,activeOverlays:A}})}},b=[e,r,n],S[0]=r,S[1]=e,S[2]=n,S[3]=O,S[4]=b;else O=S[3],b=S[4];T(O,b);let h,m;if(S[5]!==r)h=()=>{if(!r){return}return Y},m=[r],S[5]=r,S[6]=h,S[7]=m;else h=S[6],m=S[7];nn(h,m)}function mor(){return B(z)}function x(e){for(let t of e)if(!E.has(t))return!0;return!1}function Eqt(){return B(F)}function wAn(e){for(let t of e)if(!R.has(t))return!0;return!1}function DG(){return B(I)}function AQe(){return us(K)??!1}function EAn(){return us(j)??!1}
export{Zbe,Ti,mor,Eqt,wAn,DG,AQe,EAn};
