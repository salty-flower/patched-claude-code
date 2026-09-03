// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{loe,M$,gJ}from"./chunk-2hyaze8r.js";import{_}from"./chunk-0jrfbepr.js";import{e}from"./chunk-v5r13aq1.js";import{hn,Ge,C,z,d,Ht,j}from"./chunk-xyxaqzpf.js";var Wv=16;j();j();var l=hn({isTerminalFocused:!0,terminalFocusState:"unknown"});l.displayName="TerminalFocusContext";function Oln(g){let w=_(6),{children:T}=g,F=Ht(gJ,loe),b=Ht(gJ,M$),N;if(w[0]!==F||w[1]!==b)N={isTerminalFocused:F,terminalFocusState:b},w[0]=F,w[1]=b,w[2]=N;else N=w[2];let x=N,P;if(w[3]!==T||w[4]!==x)P=e(l.Provider,{value:x,children:T}),w[3]=T,w[4]=x,w[5]=P;else P=w[5];return P}var m=l;function Ka(){let{isTerminalFocused:n}=Ge(m);return n}function qce(){let{terminalFocusState:n}=Ge(m);return n}j();function M(){return S(Wv)}var vF=(n,r)=>{let t=setTimeout(n,r);return()=>clearTimeout(t)},zce=()=>()=>{},CFt=()=>null;function S(n){let r=new Map,t=null,c=n,v=performance.now(),s=0;function R(){s=performance.now()-v;for(let o of r.keys())o()}function a(){if([...r.values()].some(Boolean)){if(t)clearInterval(t),t=null;t=setInterval(R,c)}else if(t)clearInterval(t),t=null}function f(o,u){return r.set(o,u),a(),()=>{r.delete(o),a()}}return{subscribeKeepAlive(o){return f(o,!0)},subscribeFollower(o){return f(o,!1)},now(){if(t&&s)return s;return performance.now()-v},setTickInterval(o){if(o===c)return;c=o,a()},setTimeout(o,u){let I=setTimeout(o,u);return()=>clearTimeout(I)}}}var fk=hn(null),y=Wv*2;function Dln(Y){let A=_(7),{children:k}=Y,[i]=d(M),p=Ka(),h,E;if(A[0]!==i||A[1]!==p)h=()=>{i.setTickInterval(p?Wv:y)},E=[i,p],A[0]=i,A[1]=p,A[2]=h,A[3]=E;else h=A[2],E=A[3];C(h,E);let K;if(A[4]!==k||A[5]!==i)K=e(fk.Provider,{value:i,children:k}),A[4]=k,A[5]=i,A[6]=K;else K=A[6];return K}
export{Wv,Oln,Ka,qce,vF,zce,CFt,fk,Dln};
