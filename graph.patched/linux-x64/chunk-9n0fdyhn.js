// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{S}from"./chunk-6qjhsn35.js";import{e}from"./chunk-437ab22y.js";import{Pae,OM,o3}from"./chunk-c4n8nzjb.js";import{Jt,Ne,k,d,Ct,L}from"./chunk-cf8g1269.js";var h_=16,kar=50,Aar=4;L();L();var l=Jt({isTerminalFocused:!0,terminalFocusState:"unknown"});l.displayName="TerminalFocusContext";function akn(D){let _=S(6),{children:f}=D,F=Ct(o3,Pae),x=Ct(o3,OM),P;if(_[0]!==F||_[1]!==x)P={isTerminalFocused:F,terminalFocusState:x},_[0]=F,_[1]=x,_[2]=P;else P=_[2];let I=P,w;if(_[3]!==f||_[4]!==I)w=e(l.Provider,{value:I,children:f}),_[3]=f,_[4]=I,_[5]=w;else w=_[5];return w}var m=l;function Nl(){let{isTerminalFocused:n}=Ne(m);return n}function tye(){let{terminalFocusState:n}=Ne(m);return n}L();function U(){return R(h_)}var QA=(n,r)=>{let t=setTimeout(n,r);return()=>clearTimeout(t)},nye=()=>()=>{},Z4t=()=>null;function R(n){let r=new Map,t=null,i=n,T=performance.now(),s=0;function y(){s=performance.now()-T;for(let o of r.keys())o()}function a(){if([...r.values()].some(Boolean)){if(t)clearInterval(t),t=null;t=setInterval(y,i)}else if(t)clearInterval(t),t=null}function v(o,u){return r.set(o,u),a(),()=>{r.delete(o),a()}}return{subscribeKeepAlive(o){return v(o,!0)},subscribeFollower(o){return v(o,!1)},now(){if(t&&s)return s;return performance.now()-T},setTickInterval(o){if(o===i)return;i=o,a()},setTimeout(o,u){let N=setTimeout(o,u);return()=>clearTimeout(N)}}}var Py=Jt(null),C=h_*2;function lkn(X){let A=S(7),{children:b}=X,[c]=d(U),p=Nl(),M,E;if(A[0]!==c||A[1]!==p)M=()=>{c.setTickInterval(p?h_:C)},E=[c,p],A[0]=c,A[1]=p,A[2]=M,A[3]=E;else M=A[2],E=A[3];k(M,E);let O;if(A[4]!==b||A[5]!==c)O=e(Py.Provider,{value:c,children:b}),A[4]=b,A[5]=c,A[6]=O;else O=A[6];return O}
export{h_,kar,Aar,akn,Nl,tye,QA,nye,Z4t,Py,lkn};
