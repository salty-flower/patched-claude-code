// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{w}from"./chunk-1qj92kzv.js";import{e}from"./chunk-srmsc891.js";import{oye,zF,xX}from"./chunk-hxzjsqqc.js";import{Eg}from"./chunk-z7dh0jgg.js";import{Vt,Ie,k,g,Tt,L}from"./chunk-1cnhgfv0.js";L();L();var u=Vt({isTerminalFocused:!0,terminalFocusState:"unknown"});u.displayName="TerminalFocusContext";function o8n(c){let l=w(6),{children:r}=c,t=Tt(xX,oye),n=Tt(xX,zF),i;if(l[0]!==t||l[1]!==n)i={isTerminalFocused:t,terminalFocusState:n},l[0]=t,l[1]=n,l[2]=i;else i=l[2];let s=i,a;if(l[3]!==r||l[4]!==s)a=e(u.Provider,{value:s,children:r}),l[3]=r,l[4]=s,l[5]=a;else a=l[5];return a}var d=u;function Tl(){let{isTerminalFocused:c}=Ie(d);return c}function zTe(){let{terminalFocusState:c}=Ie(d);return c}L();function R(){return v(Eg)}var _x=(c,r)=>{let t=setTimeout(c,r);return()=>clearTimeout(t)},VTe=()=>()=>{},mhn=()=>null;function v(c){let r=new Map,t=null,n=c,l=performance.now(),i=0;function s(){i=performance.now()-l;for(let o of r.keys())o()}function a(){if([...r.values()].some(Boolean)){if(t!==null)clearInterval(t);else i=performance.now()-l;t=setInterval(s,n)}else if(t!==null)clearInterval(t),t=null}function f(o,m){return r.set(o,m),a(),()=>{r.delete(o),a()}}return{subscribeKeepAlive(o){return f(o,!0)},subscribeFollower(o){return f(o,!1)},now(){if(t!==null)return i;return performance.now()-l},setTickInterval(o){if(o===n)return;n=o,a()},setTimeout(o,m){let b=setTimeout(o,m);return()=>clearTimeout(b)}}}var CS=Vt(null),T=Eg*2;function s8n(c){let l=w(7),{children:r}=c,[t]=g(R),n=Tl(),i,s;if(l[0]!==t||l[1]!==n)i=()=>{t.setTickInterval(n?Eg:T)},s=[t,n],l[0]=t,l[1]=n,l[2]=i,l[3]=s;else i=l[2],s=l[3];k(i,s);let a;if(l[4]!==r||l[5]!==t)a=e(CS.Provider,{value:t,children:r}),l[4]=r,l[5]=t,l[6]=a;else a=l[6];return a}
export{o8n,Tl,zTe,_x,VTe,mhn,CS,s8n};
