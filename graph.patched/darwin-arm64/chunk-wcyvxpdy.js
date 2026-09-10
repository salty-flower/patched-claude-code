// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{ws}from"./chunk-arpntj1n.js";import{iD,F,Is}from"./chunk-6vxadp0c.js";import{y}from"./chunk-hshe4789.js";import{De,E,fn,N}from"./chunk-w8p0f9k6.js";N();function L(){return ws().get(process.stdout)?.invalidatePrevFrame()}function g(I){return I.activeOverlays.size>0}function T(K){return v(K.activeOverlays)}function d(M){return xMt(M.activeOverlays)}function C(j){for(const k of j.activeOverlays){if(f.has(k)){return!0}}return!1}function P(q){for(const B of q.activeOverlays){if(l.has(B)){return!0}}return!1}var _=new Set(["autocomplete"]),b=new Set(["above-prompt-input","above-prompt-select"]),f=new Set(["history-search"]),l=new Set(["elicitation","elicitation-url"]),Zce=2;function ls(n,x){let S=y(8),o=x===void 0?!0:x,s=De(iD)?.setState,h,m;if(S[0]!==o||S[1]!==n||S[2]!==s)h=()=>{if(!o||!s){return}return s((c)=>{if(c.activeOverlays.has(n)){return c}let p=new Set(c.activeOverlays);return p.add(n),{...c,activeOverlays:p}}),()=>{s((u)=>{if(!u.activeOverlays.has(n)){return u}let R=new Set(u.activeOverlays);return R.delete(n),{...u,activeOverlays:R}})}},m=[n,o,s],S[0]=o,S[1]=n,S[2]=s,S[3]=h,S[4]=m;else h=S[3],m=S[4];E(h,m);let w,A;if(S[5]!==o)w=()=>{if(!o){return}return L},A=[o],S[5]=o,S[6]=w,S[7]=A;else w=S[6],A=S[7];fn(w,A)}function Don(){return F(g)}function v(t){for(let e of t)if(!b.has(e))return!0;return!1}function Lon(){return F(T)}function xMt(t){for(let e of t)if(!_.has(e))return!0;return!1}function sN(){return F(d)}function O3e(){return Is(C)??!1}function HMt(){return Is(P)??!1}
export{Zce,ls,Don,Lon,xMt,sN,O3e,HMt};
