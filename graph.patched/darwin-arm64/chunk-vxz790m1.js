// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{qne,xI,S3}from"./chunk-4s3qhvnk.js";import{_}from"./chunk-c8ey99v5.js";import{e}from"./chunk-smtaex5n.js";import{Jt,De,E,d,Et,N}from"./chunk-jegfnmzv.js";var iv=16;N();N();var l=Jt({isTerminalFocused:!0,terminalFocusState:"unknown"});l.displayName="TerminalFocusContext";function bZt(H){let I=_(6),{children:T}=H,F=Et(S3,qne),b=Et(S3,xI),w;if(I[0]!==F||I[1]!==b)w={isTerminalFocused:F,terminalFocusState:b},I[0]=F,I[1]=b,I[2]=w;else w=I[2];let x=w,P;if(I[3]!==T||I[4]!==x)P=e(l.Provider,{value:x,children:T}),I[3]=T,I[4]=x,I[5]=P;else P=I[5];return P}var m=l;function $a(){let{isTerminalFocused:n}=De(m);return n}function $ae(){let{terminalFocusState:n}=De(m);return n}N();function U(){return k(iv)}var N1=(n,r)=>{let t=setTimeout(n,r);return()=>clearTimeout(t)},Uae=()=>()=>{},oPt=()=>null;function k(n){let r=new Map,t=null,c=n,v=performance.now(),a=0;function y(){a=performance.now()-v;for(let o of r.keys())o()}function s(){if([...r.values()].some(Boolean)){if(t)clearInterval(t),t=null;t=setInterval(y,c)}else if(t)clearInterval(t),t=null}function f(o,u){return r.set(o,u),s(),()=>{r.delete(o),s()}}return{subscribeKeepAlive(o){return f(o,!0)},subscribeFollower(o){return f(o,!1)},now(){if(t&&a)return a;return performance.now()-v},setTickInterval(o){if(o===c)return;c=o,s()},setTimeout(o,u){let R=setTimeout(o,u);return()=>clearTimeout(R)}}}var VR=Jt(null),S=iv*2;function wZt(Y){let A=_(7),{children:C}=Y,[i]=d(U),p=$a(),h,K;if(A[0]!==i||A[1]!==p)h=()=>{i.setTickInterval(p?iv:S)},K=[i,p],A[0]=i,A[1]=p,A[2]=h,A[3]=K;else h=A[2],K=A[3];E(h,K);let O;if(A[4]!==C||A[5]!==i)O=e(VR.Provider,{value:i,children:C}),A[4]=C,A[5]=i,A[6]=O;else O=A[6];return O}
export{iv,bZt,$a,$ae,N1,Uae,oPt,VR,wZt};
