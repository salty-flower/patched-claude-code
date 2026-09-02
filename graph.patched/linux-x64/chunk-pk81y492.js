// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{y}from"./chunk-a5ahs27a.js";import{e}from"./chunk-ys8dsnqt.js";import{_n,ze,A,V,u,$t,F}from"./chunk-v59pjxqq.js";import{une,LF,PX}from"./chunk-58nngn6x.js";var ak=16;F();F();var l=_n({isTerminalFocused:!0,terminalFocusState:"unknown"});l.displayName="TerminalFocusContext";function oon(H){let N=y(6),{children:T}=H,b=$t(PX,une),x=$t(PX,LF),P;if(N[0]!==b||N[1]!==x)P={isTerminalFocused:b,terminalFocusState:x},N[0]=b,N[1]=x,N[2]=P;else P=N[2];let C=P,h;if(N[3]!==T||N[4]!==C)h=e(l.Provider,{value:C,children:T}),N[3]=T,N[4]=C,N[5]=h;else h=N[5];return h}var p=l;function Ua(){let{isTerminalFocused:n}=ze(p);return n}function Nye(){let{terminalFocusState:n}=ze(p);return n}F();function U(){return S(ak)}var DN=(n,r)=>{let t=setTimeout(n,r);return()=>clearTimeout(t)},Uae=()=>()=>{},q$t=()=>null;function S(n){let r=new Map,t=null,c=n,v=performance.now(),s=0;function I(){s=performance.now()-v;for(let o of r.keys())o()}function a(){if([...r.values()].some(Boolean)){if(t)clearInterval(t),t=null;t=setInterval(I,c)}else if(t)clearInterval(t),t=null}function f(o,m){return r.set(o,m),a(),()=>{r.delete(o),a()}}return{subscribeKeepAlive(o){return f(o,!0)},subscribeFollower(o){return f(o,!1)},now(){if(t&&s)return s;return performance.now()-v},setTickInterval(o){if(o===c)return;c=o,a()},setTimeout(o,m){let w=setTimeout(o,m);return()=>clearTimeout(w)}}}var jT=_n(null),R=ak*2;function ion(Z){let E=y(7),{children:k}=Z,[i]=u(U),d=Ua(),K,M;if(E[0]!==i||E[1]!==d)K=()=>{i.setTickInterval(d?ak:R)},M=[i,d],E[0]=i,E[1]=d,E[2]=K,E[3]=M;else K=E[2],M=E[3];A(K,M);let O;if(E[4]!==k||E[5]!==i)O=e(jT.Provider,{value:i,children:k}),E[4]=k,E[5]=i,E[6]=O;else O=E[6];return O}
export{ak,oon,Ua,Nye,DN,Uae,q$t,jT,ion};
