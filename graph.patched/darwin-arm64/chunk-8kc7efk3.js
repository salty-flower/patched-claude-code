// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{woe,W$,TJ}from"./chunk-dby21jff.js";import{y}from"./chunk-pqa42v56.js";import{e}from"./chunk-6ccz96s4.js";import{yn,qe,C,K,p,kt,j}from"./chunk-8wk5q2vw.js";var Kv=16;j();j();var l=yn({isTerminalFocused:!0,terminalFocusState:"unknown"});l.displayName="TerminalFocusContext";function Fnn(H){let N=y(6),{children:T}=H,F=kt(TJ,woe),b=kt(TJ,W$),P;if(N[0]!==F||N[1]!==b)P={isTerminalFocused:F,terminalFocusState:b},N[0]=F,N[1]=b,N[2]=P;else P=N[2];let x=P,A;if(N[3]!==T||N[4]!==x)A=e(l.Provider,{value:x,children:T}),N[3]=T,N[4]=x,N[5]=A;else A=N[5];return A}var m=l;function Za(){let{isTerminalFocused:n}=qe(m);return n}function sce(){let{terminalFocusState:n}=qe(m);return n}j();function U(){return S(Kv)}var wF=(n,r)=>{let t=setTimeout(n,r);return()=>clearTimeout(t)},ace=()=>()=>{},$Dt=()=>null;function S(n){let r=new Map,t=null,c=n,v=performance.now(),s=0;function I(){s=performance.now()-v;for(let o of r.keys())o()}function a(){if([...r.values()].some(Boolean)){if(t)clearInterval(t),t=null;t=setInterval(I,c)}else if(t)clearInterval(t),t=null}function f(o,u){return r.set(o,u),a(),()=>{r.delete(o),a()}}return{subscribeKeepAlive(o){return f(o,!0)},subscribeFollower(o){return f(o,!1)},now(){if(t&&s)return s;return performance.now()-v},setTickInterval(o){if(o===c)return;c=o,a()},setTimeout(o,u){let w=setTimeout(o,u);return()=>clearTimeout(w)}}}var Sk=yn(null),R=Kv*2;function $nn(Y){let h=y(7),{children:k}=Y,[i]=p(U),d=Za(),E,M;if(h[0]!==i||h[1]!==d)E=()=>{i.setTickInterval(d?Kv:R)},M=[i,d],h[0]=i,h[1]=d,h[2]=E,h[3]=M;else E=h[2],M=h[3];C(E,M);let O;if(h[4]!==k||h[5]!==i)O=e(Sk.Provider,{value:i,children:k}),h[4]=k,h[5]=i,h[6]=O;else O=h[6];return O}
export{Kv,Fnn,Za,sce,wF,ace,$Dt,Sk,$nn};
