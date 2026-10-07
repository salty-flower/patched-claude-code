// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{w}from"./chunk-fetrqmkr.js";import{e}from"./chunk-mq8eg5v4.js";import{eCe,p5,r_e}from"./chunk-r3xxk7dt.js";import{wm}from"./chunk-ja4g89q3.js";import{zt,Te,x,g,Pt,L}from"./chunk-1mwacejt.js";L();L();var u=zt({isTerminalFocused:!0,terminalFocusState:"unknown"});u.displayName="TerminalFocusContext";function Zvr(c){let l=w(6),{children:r}=c,t=Pt(r_e,eCe),n=Pt(r_e,p5),i;if(l[0]!==t||l[1]!==n)i={isTerminalFocused:t,terminalFocusState:n},l[0]=t,l[1]=n,l[2]=i;else i=l[2];let s=i,a;if(l[3]!==r||l[4]!==s)a=e(u.Provider,{value:s,children:r}),l[3]=r,l[4]=s,l[5]=a;else a=l[5];return a}var d=u;function vc(){let{isTerminalFocused:c}=Te(d);return c}function Xne(){let{terminalFocusState:c}=Te(d);return c}L();function R(){return v(wm)}var wx=(c,r)=>{let t=setTimeout(c,r);return()=>clearTimeout(t)},c$e=()=>()=>{},DUn=()=>null;function v(c){let r=new Map,t=null,n=c,l=performance.now(),i=0;function s(){i=performance.now()-l;for(let o of r.keys())o()}function a(){if([...r.values()].some(Boolean)){if(t!==null)clearInterval(t);else i=performance.now()-l;t=setInterval(s,n)}else if(t!==null)clearInterval(t),t=null}function f(o,m){return r.set(o,m),a(),()=>{r.delete(o),a()}}return{subscribeKeepAlive(o){return f(o,!0)},subscribeFollower(o){return f(o,!1)},now(){if(t!==null)return i;return performance.now()-l},setTickInterval(o){if(o===n)return;n=o,a()},setTimeout(o,m){let b=setTimeout(o,m);return()=>clearTimeout(b)}}}var cw=zt(null),T=wm*2;function eEr(c){let l=w(7),{children:r}=c,[t]=g(R),n=vc(),i,s;if(l[0]!==t||l[1]!==n)i=()=>{t.setTickInterval(n?wm:T)},s=[t,n],l[0]=t,l[1]=n,l[2]=i,l[3]=s;else i=l[2],s=l[3];x(i,s);let a;if(l[4]!==r||l[5]!==t)a=e(cw.Provider,{value:t,children:r}),l[4]=r,l[5]=t,l[6]=a;else a=l[6];return a}
export{Zvr,vc,Xne,wx,c$e,DUn,cw,eEr};
