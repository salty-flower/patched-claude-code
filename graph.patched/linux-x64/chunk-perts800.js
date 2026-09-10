// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Ose,D0,vK}from"./chunk-t9kb0apz.js";import{y}from"./chunk-spjasdq6.js";import{e}from"./chunk-qs39f0kj.js";import{Vt,De,v,d,kt,L}from"./chunk-kt4npzgg.js";var dS=16,zqn=50,Wqn=4;L();L();var l=Vt({isTerminalFocused:!0,terminalFocusState:"unknown"});l.displayName="TerminalFocusContext";function Xin(D){let _=y(6),{children:F}=D,x=kt(vK,Ose),I=kt(vK,D0),P;if(_[0]!==x||_[1]!==I)P={isTerminalFocused:x,terminalFocusState:I},_[0]=x,_[1]=I,_[2]=P;else P=_[2];let b=P,w;if(_[3]!==F||_[4]!==b)w=e(l.Provider,{value:b,children:F}),_[3]=F,_[4]=b,_[5]=w;else w=_[5];return w}var m=l;function tl(){let{isTerminalFocused:n}=De(m);return n}function que(){let{terminalFocusState:n}=De(m);return n}L();function U(){return C(dS)}var GI=(n,r)=>{let t=setTimeout(n,r);return()=>clearTimeout(t)},Vue=()=>()=>{},BNt=()=>null;function C(n){let r=new Map,t=null,i=n,T=performance.now(),s=0;function k(){s=performance.now()-T;for(let o of r.keys())o()}function a(){if([...r.values()].some(Boolean)){if(t)clearInterval(t),t=null;t=setInterval(k,i)}else if(t)clearInterval(t),t=null}function f(o,u){return r.set(o,u),a(),()=>{r.delete(o),a()}}return{subscribeKeepAlive(o){return f(o,!0)},subscribeFollower(o){return f(o,!1)},now(){if(t&&s)return s;return performance.now()-T},setTickInterval(o){if(o===i)return;i=o,a()},setTimeout(o,u){let N=setTimeout(o,u);return()=>clearTimeout(N)}}}var lb=Vt(null),S=dS*2;function Jin(X){let A=y(7),{children:R}=X,[c]=d(U),p=tl(),M,E;if(A[0]!==c||A[1]!==p)M=()=>{c.setTickInterval(p?dS:S)},E=[c,p],A[0]=c,A[1]=p,A[2]=M,A[3]=E;else M=A[2],E=A[3];v(M,E);let O;if(A[4]!==R||A[5]!==c)O=e(lb.Provider,{value:c,children:R}),A[4]=R,A[5]=c,A[6]=O;else O=A[6];return O}
export{dS,zqn,Wqn,Xin,tl,que,GI,Vue,BNt,lb,Jin};
